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
    const openModal = () => {
        
        setshowModal(true)
    }
   
    const [ showChapter, setShowChapter ] = useState<any>({});

    const toggleShowChapter = (Chapter: number) => {
        setShowChapter({
            ...showChapter,
            [Chapter]: !showChapter[Chapter]
        })
    }
    
    const addChapter = () => {
        let chapters = props.formData.chapters
        chapters.push({
            id: chapters.length + 1,
            title: '',
            lecture: []
        })
        props.setFormData({...props.formData, chapters: chapters})
      
    }


      const removeChapter = (id: number) => {
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
        Message.success("Course updated successfuly");
        props.setPage(props.page + 1)
        return;
        e.preventDefault(); 
        setIsAddingCourseDescription(true)
        const courseId = query.get('course-id')
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/course/update/"+courseId,
                data: {
                    // isFor: props.formData.whoCourse,
                    // wouldLearn: props.formData.whatLearn,
                    // requirements: props.formData.requirements
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsAddingCourseDescription(false)
                Message.success("Course updated successfuly");
                props.setPage(props.page + 1)
            } else {
                setIsAddingCourseDescription(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsAddingCourseDescription(false)
            Message.error(err?.response.data.message)
        }
    }
    
    return ( 
        <Wrapper>
             
            <h5>Course Upload</h5>
            {
                props.formData.chapters.map(
                    (c, index) => (
                        <div className="course-upload" key={c.id}>
                <div className="chapter-head">
                    <div className="" onClick={() => { toggleShowChapter(c.id) }}>
                    <div className="icon">
                                {
                                    showChapter[c.id] ? <IoIosArrowDropdown />:
                                    <IoIosArrowDropup />
                                } 
                            </div> 
                        <p >Chapter {index + 1}:</p>
                        <p className="chapter-title">{c.title}</p>
                    </div>
                    <div className="chapter-btn">
                        <button type="button" onClick={() => { toggleShowChapter(c.id) }}>
                            <BiPencil /> Add Content
                        </button>
                        <button className="delete" onClick={() => { removeChapter(c.id) }}>
                            <RiDeleteBinLine />
                        </button>
                    </div>
                </div>
                {  
                showChapter[c.id] && 
                    (
                    <div className="chapter-details" key={c.id}>
                    <div className="">
                                <label htmlFor="institution">Chapter Title</label>
                                <input type="text" required name="title" placeholder='Types of Cakes' id="" value={props.formData.chapters[index]?.title}
                                onChange={(e) => {
                                    let oldChapters = props.formData.chapters;
                                    oldChapters[index].title = e.target.value
                                    props.setFormData({...props.formData, chapters: oldChapters})
                                }}
                                
                                />
                            </div>
                            <div className="">
                                {c.lectures.map((item: any, index:any) => {
                                    return <>
                                        <label htmlFor="lecture">Lecture</label><div className="lecture-detail">
                                        <div className="">
                                            <span className="lecture-type">
                                                <img src="/assets/img/book.svg" alt="" />
                                            </span>
                                            <span>
                                                <strong>Introduction to Pastries</strong><br />
                                                <small>Reading . 5 min</small>
                                            </span>
                                        </div>
                                        <div>
                                            <button className="edit">
                                                    <FiEdit />
                                                </button> 
                                            <button className="delete">
                                                <RiDeleteBinLine  />
                                            </button>
                                        </div>
                                    </div>
                                </>
                                })}

                                <button type="button" className="btn-dark" onClick={openModal}>
                                   <AiOutlinePlusCircle /> Add Lecture
                                </button>
                            </div>
                            <div className={showModal ? 'show' : 'view-modal'}>
                                <AddLectureModal close={() => {
                                    setshowModal(false)
                                }} 
                                index={index}
                                formData={props.formData}
                                />
                            </div>
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