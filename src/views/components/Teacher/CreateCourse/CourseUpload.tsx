import { Wrapper } from "../../../screens/teacher/courses/CreateCourse/styles";
import { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io"
import AddLectureModal from "../AddLectureModal";
import { BiPencil } from "react-icons/bi";
import Message from "../../message/Message";
import AxiosCall from "../../../../utils/axios";
import useQuery from "../../../../hooks/useQuery";
import Loader from "../../Loader/Loader";


type formDataProps = {
    formData: {
        chapters: Array<any>,
    }
    setFormData: Function,
    page: number,
    setPage: Function,
}
const CourseUpload:React.FC<formDataProps> = (props: formDataProps) => {
    const [showModal, setshowModal] = useState(false)
    const [selectedLecture, setSelectedLecture] = useState<number | null>(null)

    const [ showChapter, setShowChapter ] = useState<any>({});

    const toggleShowChapter = (Chapter: string) => {
        setShowChapter({
            ...showChapter,
            [Chapter]: !showChapter[Chapter]
        })
    }
    
    const addChapter = () => {
        let chapters = props.formData.chapters
        chapters.push({
            id: "",
            title: '',
            lectures: []
        })
        props.setFormData({...props.formData, chapters: chapters})
      
    }


      const removeChapter = (id: string) => {
        for (var i = props.formData.chapters.length - 1; i >= 0; i--) {
            if (props.formData.chapters[i].id === id) {
                props.formData.chapters.splice(i, 1);
                
            }
            props.setFormData({...props.formData, chapters: props.formData.chapters})
           }
      }
    
    const query = useQuery()

    const [isAddingCourseDescription, setIsAddingCourseDescription] = useState(false)
    const addCourseDescription = async (e: any) => {
        e.preventDefault(); 
        Message.success("Course updated successfuly");
        props.setPage(props.page + 1)
    }

    const [isSavingChapter, setIsSavingChapter] = useState<any>(null)
    const saveChapter = async (e: any, chapterIndex: number) => {
        e.preventDefault(); 
        setIsSavingChapter(chapterIndex)
        const courseId = query.get('course-id')
        const oldChapters = [...props.formData.chapters]
        try {
            const res: any = await AxiosCall({
                method: oldChapters[chapterIndex].id ? "PATCH" : "POST",
                path: oldChapters[chapterIndex].id ? "/teacher/course/chapter/update/"+oldChapters[chapterIndex].id : "/teacher/course/chapter/add",
                data: {
                    courseId: courseId,
                    title: props.formData.chapters[chapterIndex].title
                }
            });

            console.log("response:",res);
    
            if (res.status == 1) {
                if (!oldChapters[chapterIndex].id){
                    oldChapters[chapterIndex].id = res.data._id
                    props.setFormData({...props.formData, chapters: oldChapters})
                }
                setIsSavingChapter(null)
                Message.success(res.message);
            } else {
                setIsSavingChapter(null)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSavingChapter(null)
            Message.error(err?.response.data.message)
        }
    }
    
    return ( 
        <Wrapper>
             
            <h5>Course Upload</h5>
            {
                props.formData.chapters.map(
                    (c, chapterIndex) => (
                        <div className="course-upload" key={"chapter-"+chapterIndex}>
                <div className="chapter-head">
                    <div className="" onClick={() => { toggleShowChapter("chapter-"+chapterIndex) }}>
                    <div className="icon">
                                {
                                    showChapter["chapter-"+chapterIndex] ? <IoIosArrowDropdown />:
                                    <IoIosArrowDropup />
                                } 
                            </div> 
                        <p >Chapter {chapterIndex + 1}:</p>
                        <p className="chapter-title">{c.title}</p>
                    </div>
                    <div className="chapter-btn">
                        <button type="button" onClick={() => { toggleShowChapter("chapter-"+chapterIndex) }}>
                            <BiPencil /> Add Content
                        </button>
                        <button className="delete" onClick={() => { removeChapter("chapter-"+chapterIndex) }}>
                            <RiDeleteBinLine />
                        </button>
                    </div>
                </div>
                {  
                showChapter["chapter-"+chapterIndex] && 
                    (
                    <div className="chapter-details" key={"chapter-"+chapterIndex}>
                    <div className="">
                                <label htmlFor="institution">Chapter Title</label>
                                <input type="text" required name="title" placeholder='Types of Cakes' id="" value={props.formData.chapters[chapterIndex]?.title}
                                onChange={(e) => {
                                    let oldChapters = props.formData.chapters;
                                    oldChapters[chapterIndex].title = e.target.value
                                    props.setFormData({...props.formData, chapters: oldChapters})
                                }}
                                
                                />
                            </div>
                            <div className="">
                                {c.lectures.length > 0 && <label htmlFor="lecture">Lectures</label>}
                                {c.lectures.map((item: any, lectureIndex:any) => {
                                    return  <div className="lecture-detail" key={"lecture-"+lectureIndex}>
                                        <div className="">
                                            <span className="lecture-type">
                                                <img src="/assets/img/book.svg" alt="" />
                                            </span>
                                            <span>
                                                <strong>{item.title}</strong><br />
                                                <small>{item.type} . {item.duration} minutes</small>
                                            </span>
                                        </div>
                                        <div>
                                            <button className="edit" onClick={() => {
                                                setshowModal(true);
                                                setSelectedLecture(lectureIndex)
                                            }}>
                                                    <FiEdit />
                                                </button> 
                                            <button className="delete">
                                                <RiDeleteBinLine  />
                                            </button>
                                        </div>
                                    </div>
                                })}

                                <div className="chpter-action-row">
                                    <button type="button" className="btn-dark" onClick={(e) => saveChapter(e, chapterIndex)}>
                                        {isSavingChapter == chapterIndex ? <Loader /> : <><AiOutlinePlusCircle /> Save chapter</>}
                                    </button>
                                    <button type="button" className="btn-dark" onClick={() => {
                                        setshowModal(true);
                                    }}>
                                        <AiOutlinePlusCircle /> Add Lecture
                                    </button>
                                </div>
                            </div>
                            {showModal && <div className={'show'}>
                                <AddLectureModal lectureIndex={selectedLecture} selectedChapter={chapterIndex} close={() => {
                                    setshowModal(false)
                                    setSelectedLecture(null)
                                }} 
                                index={chapterIndex}
                                formData={props.formData}
                                setFormData={props.setFormData}
                                />
                            </div>}
                            {/* <div className="">
                                <label htmlFor="lecture">Lecture</label>
                                <div className="lecture-detail">
                            <div className="">
                                <span className="lecture-type">
                                    <img src="/assets/img/book.svg" alt="" />
                                </span>
                                <span>
                                    <strong>Introduction to Pastries</strong>
                                    <small>Reading . 5 min</small>
                                </span>
                            </div>
                            <div>
                               <button className="edit">
                                    <FiEdit />
                                </button> 
                               <button className="delete">
                                  <RiDeleteBinLine />
                               </button>
                            </div>
                                </div>
                                <button type="button" className="btn-dark" >
                                   <AiOutlinePlusCircle /> Attach file
                                </button>
                            </div> */}
                    </div>
                    )}
            </div>
                    )
                )
            }

            <div className="save">
                <button className="add-chapter" onClick={addChapter}>
                    <AiOutlinePlusCircle /> Add Chapter
                </button>
                <button onClick={addCourseDescription}>
                Save and Continue
                </button>
            </div>
        </Wrapper>
     );
}


export default CourseUpload;