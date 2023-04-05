import { Wrapper, AddLectureModalContainer } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdAttach } from 'react-icons/io';
import AxiosCall from '../../../utils/axios';
import Message from '../message/Message';
import useQuery from '../../../hooks/useQuery';
import Loader from '../Loader/Loader';
import UploadUtility from '../../../utils/axios/UploadUtility';

const AddLectureModal: React.FC<{close: any, index: any, lectureIndex: any, formData: {chapters: Array<any>}, setFormData: Function, selectedChapter: number}> = (props) => {
    const [isInitLecture, setIsInitLecture] = useState(true)
    const [lecture, setLecture] = useState<any>({
        id: "",
        title: "",
        body: "",
        duration: {
            value: "",
            type: "minutes"
        },
        type: "NOTE",
        items: []
    })

    const titleRef = useRef<HTMLInputElement>(null)
    const durationRef = useRef<HTMLInputElement>(null)
    const durationTypeRef = useRef<HTMLSelectElement>(null)
    const contentTypeRef = useRef<HTMLSelectElement>(null)

    const checkSelectedLecture = () => {
        setIsInitLecture(true)
        if (props.lectureIndex != null) {
            const selectedLecture = props.formData.chapters[props.selectedChapter].lectures[props.lectureIndex]

            console.log('====================================');
            console.log("lecture found: ", selectedLecture);
            console.log('====================================');
            setLecture({
                id: selectedLecture.id,
                title: selectedLecture.title,
                body: selectedLecture.body ? selectedLecture.body : "",
                duration: {
                    value: selectedLecture.duration,
                    type: "minutes"
                },
                type: selectedLecture.type,
                items: selectedLecture.items
            })
        } else {
            console.log('====================================');
            console.log("lecture index not found");
            console.log('====================================');
        }

        setTimeout(() => {
            setIsInitLecture(false)
        }, 500)
    }
    
    useEffect(() => {
        checkSelectedLecture()
    }, [])

    const [isUploadingFile, setIsUploadingFile] = useState(false)

    const selectVideo = (x: any) => {
        const file = x.target.files[0];
        const videourl = URL.createObjectURL(file);

        setLecture({...lecture, items: [{
            title: lecture.items.length ? lecture.items[0].title : "",
            fileName: "",
            originalName: file.name,
            uri: videourl
        }]})

        uploadCourseImage(file)
      }

      const uploadCourseImage = async (file: string | Blob) => {
          try {
                setIsUploadingFile(true)
                const res = await UploadUtility(file)
                setLecture({...lecture, items: [{
                    title: lecture.items.length ? lecture.items[0].title : "",
                    fileName: res.data.name,
                    originalName: res.data.originalName,
                    uri: res.data.uri
                }]})
                setIsUploadingFile(false)
          } catch (error) {
              setIsUploadingFile(false)
          }
      }

    const query = useQuery()

    const [isSavingLecture, setIsSavingLesture] = useState<any>(null)
    const saveLecture = async (e: any) => {
        e.preventDefault(); 
        setIsSavingLesture(true)
        const oldChapters =  props.formData.chapters
        try {
            const courseId = query.get('course-id')
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/course/lecture/add",
                data: {
                    title: lecture.title,
                    chapterId: oldChapters[props.selectedChapter].id,
                    courseId: courseId,
                    type: lecture.type,
                    body: lecture.body,
                    duration: lecture.duration.value
                }
            });

            console.log("response:",res);
    
            if (res.status == 1) {
                
                if (lecture.type == "FILE") {
                    await saveLectureFile(res.data._id)
                } else {
                    await saveLectureNote(res.data._id)
                }

                resetLectureEditor()
                setIsSavingLesture(false)
                Message.success(res.message);
            } else {
                setIsSavingLesture(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSavingLesture(false)
            Message.error(err?.response.data.message)
        }
    }

    const saveLectureNote = async (lectureId: any) => {
        const oldChapters =  props.formData.chapters
        try {
            const courseId = query.get('course-id')
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/course/lecture/note/add",
                data: {
                    lectureId: lectureId,
                    courseId: courseId,
                    title: lecture.items[0].title,
                    body: lecture.items[0].body,
                }
            });

            console.log("response:",res);

            if (res.status == 1) {
                
                oldChapters[props.selectedChapter].lectures.push({
                    id: lectureId,
                    title: lecture.title,
                    body: lecture.body,
                    duration: lecture.duration.value,
                    type: lecture.type,
                    items: [{
                        title: lecture.title,
                        body: lecture.body,
                    }]
                })

                props.setFormData({...props.formData, chapters: oldChapters})
                props.close()

                Message.success(res.message);
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            Message.error(err?.response.data.message)
        }
    }


    const saveLectureFile = async (lectureId: any) => {
        const oldChapters =  props.formData.chapters
        try {
            const courseId = query.get('course-id')
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/course/lecture/file/add",
                data: {
                    lectureId: lectureId,
                    courseId: courseId,
                    title: lecture.items[0].title,
                    fileName: lecture.items[0].fileName,
                    originalName: lecture.items[0].originalName
                }
            });

            console.log("response:",res);

            if (res.status == 1) {
                
                oldChapters[props.selectedChapter].lectures.push({
                    id: lectureId,
                    title: lecture.title,
                    body: lecture.body,
                    duration: lecture.duration.value,
                    type: lecture.type,
                    items: [{
                        title: lecture.title,
                        uri: res.data.uri,
                        originalName: res.data.originalName
                    }]
                })

                props.setFormData({...props.formData, chapters: oldChapters})
                props.close()

                Message.success(res.message);
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            Message.error(err?.response.data.message)
        }
    }

    const resetLectureEditor = () => {
        console.log("is reseting editor");
        
        titleRef!.current!.value = "";
        durationRef!.current!.value = "";
        durationTypeRef!.current!.value = "";
        contentTypeRef!.current!.value = "";
        setLecture({
            id: "",
            title: "",
            body: "",
            duration: {
                value: "0",
                type: ""
            },
            type: "NOTE",
            items: []
        })
        console.log("Reseting editor completed");
    }

    return ( 
        <Wrapper>
            <AddLectureModalContainer>
            {isInitLecture ? <Loader styleTwo /> : <>
            <div className="close-btn" onClick={() => {
                props.close()
                // resetLectureEditor()
            }}>
                    <MdOutlineCancel />
                </div>
                <div className="modal">
                
                <h5>Chapter {props.selectedChapter+1}</h5>
                    <div className="lecture-details">
                        <div className="">
                            <label htmlFor="lectureType">Content type</label>
                            <select ref={contentTypeRef} value={lecture.type} name="lecturetype" required id="" onChange={(e) => {
                                setLecture({...lecture, type: e.target.value})
                            }}>
                                {lecture.id == "" || lecture.type == "NOTE" ? <option value="NOTE">Reading</option> : <></>}
                                {lecture.id == "" || lecture.type == "FILE" ? <option value="FILE">Video</option> : <></>}
                                {/* <option value="quiz">
                                    Quiz
                                </option> */}
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="duration">Duration</label>
                            <span className="duration">
                            <input ref={durationRef} defaultValue={lecture.duration.value} className="duration-input" type="text" name="time" placeholder="duration" id="" onChange={(e) => {
                                setLecture({...lecture, duration: {value: e.target.value, type: lecture.duration.type}})
                            }} />
                            <select ref={durationTypeRef} defaultValue={lecture.duration.type} name="timeType" required id="" onChange={(e) => {
                                setLecture({...lecture, duration: {type: e.target.value, value: lecture.duration.value}})
                            }}>
                                <option value="minutes">Minutes</option>
                                <option value="hours">Hours</option>
                            </select>
                            </span>
                        </div>
                    </div>
                    <input ref={titleRef} type="text" name="" id="" defaultValue={lecture.title} placeholder="Lecture title" onChange={(e) => {
                        setLecture({
                            ...lecture,
                            title: e.target.value,
                            items: [{
                                title: e.target.value,
                                body: lecture.items.length ? lecture.items[0].body : "",
                                fileName: lecture.items.length ? lecture.items[0]?.fileName : "",
                                originalName: lecture.items.length ? lecture.items[0]?.originalName : "",
                                uri: lecture.items.length ? lecture.items[0]?.uri : ""
                            }]
                        })
                    }} />
                    {lecture.type === 'NOTE' ?
                        <div className="editor">
                            <CKEditor
                                editor={ ClassicEditor }
                                onReady={ editor => {
                                    editor.setData(lecture.body)
                                } }
                                onChange={( event, editor ) => {
                                    const data = editor.getData();
                                    setLecture({
                                        ...lecture, body: data,
                                        items: [{
                                            title: lecture.items.length ? lecture.items[0].title : "",
                                            body: data
                                        }]})
                            }} />
                        </div> : 
                    <div className="video">
                        <h4>Video Upload</h4>
                        <div className="img-container">
                            <div className="img-wrapper">
                                {
                                    lecture.items.length > 0 ?  <>
                                        {lecture.items[0]?.uri?.length && <video width="400" height="180" controls >
                                            <source src={lecture.items[0].uri} type="video/mp4"/>
                                            Your browser does not support HTML video.
                                       </video>}

                                        {isUploadingFile && <div className="uploading-profile-img">
                                        <Loader styleTwo />
                                    </div>} </>
                               : <div className="blank-video"></div>
                                }
                            </div>

                            <div className="video-meta">
                                <div>
                                    <div className="file-name">
                                        <label htmlFor="profile">File Name:</label>
                                        {lecture.items.length > 0 && <p>{lecture.items[0].originalName}</p> }<br />
                                    </div>
                                    <div className="file-name">
                                        <label htmlFor="profile">Status:</label>
                                    </div>
                                </div>
                                <div className="actions">
                                    <input type="file" accept="video/*" required onChange={selectVideo}  name="video" id="file-input" />
                                    <label style={{cursor: 'pointer'}} htmlFor="file-input" className="btn-dark" ><IoMdAttach /> Attach file</label>
                                    
                                    <p>Note: All files should be at least <b>720p</b> and less than 4GB</p>                          
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    
                    <div className="upload">
                        <span>If you need further assistance <a href="">contact our support team</a></span>
                        <button onClick={(e) => {
                            saveLecture(e);
                        }}>{isSavingLecture ? <Loader /> : "Upload"}</button>
                    </div>
                </div></>}
            </AddLectureModalContainer>  
        </Wrapper>
     );
}
 
export default AddLectureModal;