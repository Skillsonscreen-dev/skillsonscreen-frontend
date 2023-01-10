import { Wrapper } from "../../../screens/teacher/courses/CreateCourse/styles";
import { useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {IoIosArrowDropdown, IoIosArrowDropup} from "react-icons/io"
import AddLectureModal from "../AddLectureModal";

type formDataProps = {
    formData: {
        chapterTitle: string,
    }
    setFormData: Function,
    page: number,
    setPage: Function,
}
const CourseUpload:React.FC<formDataProps> = (props: formDataProps) => {

    const handleChange = (evt: any) => {
        const name = evt.target.name;
        const value = 
        evt.target.value;
        props.setFormData({
          ...props.formData,
          [name]: value
        })
      }
      const [showModal, setshowModal] = useState(false)
    const openModal = () => {
        
        setshowModal(true)
    }
    const chapters = [
        { id: 1, title: 'Types of Pastries ', },
        { id: 2, title: 'How to make meat pie pastries', },
        { id: 3, title: 'How to make Sausage rolls Pastries', },
        { id: 4, title: 'How do I promote my course to gain more students', },
        { id: 4, title: 'How to make Puff-puff Pastries', }
    ]
    const [ showChapter, setShowChapter ] = useState<any>({});

    const toggleShowChapter = (Chapter: number) => {
        setShowChapter({
            ...showChapter,
            [Chapter]: !showChapter[Chapter]
        })
    }
    return ( 
        <Wrapper>
             <div className={showModal ? 'show' : 'view-modal'}>
                    <AddLectureModal close={() => {
                        setshowModal(false)
                    }} />
                </div>
            <h5>Course Upload</h5>
            {
                chapters.map(
                    c => (
                        <div className="course-upload">
                <div className="chapter-head">
                    <div className="" onClick={() => { toggleShowChapter(c.id) }}>
                    <div className="icon">
                                {
                                    showChapter[c.id] ? <IoIosArrowDropdown />:
                                    <IoIosArrowDropup />
                                } 
                            </div> 
                        <p >Chapter {c.id}:</p>
                        <p className="chapter-title">{c.title}</p>
                    </div>
                    <div className="chapter-btn">
                                <button type="button" >
                                   <AiOutlinePlusCircle /> Add Content
                                </button>
                                <button>
                                    <FiEdit />
                                </button> 
                               <button className="delete">
                                  <RiDeleteBinLine />
                               </button>
                    </div>
                </div>
                {  
                showChapter[c.id] && 
                    (
                    <div className="chapter-details">
                    <div className="">
                                <label htmlFor="institution">Chapter Title</label>
                                <input type="text" required name="title" placeholder='Types of Cakes' id="" value={props.formData.chapterTitle}
                                onChange={handleChange} />
                            </div>
                            <div className="">
                                <label htmlFor="lecture">Lecture</label>
                                <div className="lecture-detail">
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
                                  <RiDeleteBinLine />
                               </button>
                            </div>
                                </div>
                                <button type="button" className="btn-dark" onClick={openModal}>
                                   <AiOutlinePlusCircle /> Add Lecture
                                </button>
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
                    <button className="add-chapter" onClick={() => {}}>
                    <AiOutlinePlusCircle /> Add Chapter
                        </button>
                        <button onClick={() => {}}>
                        Save and Continue
                        </button>
                    </div>

        </Wrapper>
     );
}


export default CourseUpload;