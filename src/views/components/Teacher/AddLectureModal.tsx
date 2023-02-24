import { Wrapper, AddLectureModalContainer } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';
import { IoMdAttach } from 'react-icons/io';
import AxiosCall from '../../../utils/axios';
import Message from '../message/Message';
import useQuery from '../../../hooks/useQuery';
import Loader from '../Loader/Loader';

const AddLectureModal: React.FC<{close: any, index: any, formData: {chapters: Array<any>}, setFormData: Function, selectedChapter: number}> = (props) => {
    
    const [lecture, setLecture] = useState<any>({
        id: "",
        title: "",
        body: "",
        duration: {
            value: "0",
            type: "minutes"
        },
        type: "reading",
        items: []
    })
    
    
    const [lectureDetails, setLectureDetails] = useState({
        lectureType: 'reading',
        duration: '',
        timeType: '',
        video: '',
        readingData: ''
    })
    const selectVideo = (x: any) => {
        const file = x.target.files[0];
        console.log('====================================');
        console.log(file);
        console.log('====================================');
        const videourl = URL.createObjectURL(file);

        setLecture({...lecture, items: [{
            title: "",
            fileName: "",
            originalName: file.name,
            uri: videourl
        }]})
        
      }
      const handleChange = (editor: any) => {
        console.log(editor)
        const data = editor?.getData()
        // setLectureDetails({...lectureDetails, readingData: data})
      }
    //   console.log(lectureDetails.readingData)

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
                    type: lecture.type == "reading" ? "NOTE" : "FILE",
                    body: lecture.body,
                    duration: lecture.duration.value
                }
            });

            console.log("response:",res);
    
            if (res.status == 1) {
                
                if (lecture.type == "video") {
                    await saveLectureFile(res.data._id)
                } else {
                    await saveLectureNote(res.data._id)
                }

                setLecture({
                    id: "",
                    title: "",
                    body: "",
                    duration: {
                        value: "0",
                        type: ""
                    },
                    type: "Reading",
                    items: []
                })
                
                setIsSavingLesture(false)
                Message.success(res.message);
            } else {
                setIsSavingLesture(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            setIsSavingLesture(false)
            // Message.error(err?.response.data.message)
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
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            // Message.error(err?.response.data.message)
        }
    }


    const saveLectureFile = async (lectureId: any) => {
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

    return ( 
        <Wrapper>
            <AddLectureModalContainer>
            <div className="close-btn" onClick={() => props.close()}>
                    <MdOutlineCancel />
                </div>
                <div className="modal">
                <h5>Chapter {props.selectedChapter+1}</h5>
                    <div className="lecture-details">
                    <div className="">
                        <label htmlFor="lectureType">Content type</label>
                        <select name="lecturetype" required id="" onChange={(e) => {
                                    setLectureDetails({...lectureDetails, lectureType: e.target.value})
                                    setLecture({...lecture, type: e.target.value})
                                }}>
                            <option value="reading">
                                Reading
                            </option>
                            <option value="video">
                                Video
                            </option>
                            {/* <option value="quiz">
                                Quiz
                            </option> */}
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="duration">Duration</label>
                        <span className="duration">
                        <input className="duration-input" type="text" name="time" placeholder="duration" id="" onChange={(e) => {
                                    setLecture({...lecture, duration: {value: e.target.value, type: lecture.duration.type}})
                                }} />
                        <select name="timeType" required id="" onChange={(e) => {
                                    setLecture({...lecture, duration: {type: e.target.value, value: lecture.duration.value}})
                                }}>
                            <option value="minutes">
                                Minutes
                            </option>
                            <option value="hours">
                                Hours
                            </option>
                        </select>
                        </span>
                    </div>
                    </div>
                    <input type="text" name="" id="" placeholder="Lecture title" onChange={(e) => {
                        setLecture({
                            ...lecture,
                            title: e.target.value
                        })
                    }} />
                    {
                        lectureDetails.lectureType === 'reading' ?
                        <div className="editor">
                    <CKEditor 
                            editor={ ClassicEditor }
                            data=" "
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                // console.log( { event, editor, data } );
                                setLecture({...lecture, body: data})
                            } }
                            onBlur={ ( event, editor ) => {
                                // console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                // console.log( 'Focus.', editor );
                            } }></CKEditor>
                    </div> : 
                    <div className="video">
                        <h4>Video Upload</h4>
                        <div className="img-container">
                            <div className="img-wrapper">
                                {
                                    lecture.items.length > 0 ?  
                                        <video width="400" controls >
                                            <source src={lecture.items[0].uri} type="video/mp4"/>
                                            Your browser does not support HTML video.
                                       </video>
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
                                    <label htmlFor="video" className="btn-dark" >
                                    <input type="file" accept="video/*" required onChange={selectVideo}  name="video" id="video" />
                                        <IoMdAttach/> Attach file
                                    </label>    
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
                            // const oldChapters =  props.formData.chapters
                            // oldChapters[props.selectedChapter].lectures.push({
                            //     id: "",
                            //     title: lecture.title,
                            //     body: lecture.body,
                            //     duration: lecture.duration.value,
                            //     type: lecture.type,
                            //     items: [{
                            //         title: lecture.title,
                            //         body: lecture.body,
                            //     }]
                            // })
                            // props.setFormData({...props.formData, chapters: oldChapters})
                            // props.close()

                            // setLecture({
                            //     id: "",
                            //     title: "",
                            //     body: "",
                            //     duration: {
                            //         value: "0",
                            //         type: ""
                            //     },
                            //     type: "Reading",
                            //     items: []
                            // })
                        }}>{isSavingLecture ? <Loader /> : "Upload"}</button>
                    </div>
                </div>
            </AddLectureModalContainer>           
        </Wrapper>
     );
}
 
export default AddLectureModal;