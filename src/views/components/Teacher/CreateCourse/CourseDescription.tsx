import { Wrapper } from "../../../screens/teacher/courses/CreateCourse/styles";
import { useRef, useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import Message from "../../message/Message";
import AxiosCall from "../../../../utils/axios";
import Loader from "../../Loader/Loader";
import UploadUtility from "../../../../utils/axios/UploadUtility";
import useQuery from "../../../../hooks/useQuery";

type formDataProps = {
    formData: {
        whoCourse: Array<any>,
        whatLearn: Array<any>,
        requirements: Array<any>,
    }
    setFormData: Function,
    page: number,
    setPage: Function,
}
let nextId = 0
const CourseDescription:React.FC<formDataProps> = (props: formDataProps) => {


      const [studentDescription, setstudentDescription] = useState('')
      const [courseIsFor, setCourseIsFor] = useState('')
      const [studentLearn, setstudentLearn] = useState('')
      const [requirements, setrequirements] = useState('')

      const studentDescriptionRef = useRef<HTMLInputElement>(null)

      const addDescription = () => {
       setCourseIsFor('')
       if(courseIsFor.length) {
        props.formData.whoCourse.push(courseIsFor)
       }
      }

      const addLearn = () => {
        setstudentLearn('')
       if(studentLearn.length) {
        props.formData.whatLearn.push(studentLearn)
       }
      }

      const addRequirements = () => {
        setrequirements('')
       if(requirements.length) {
        props.formData.requirements.push(requirements)
       }
      }


      const [courseImg, setCourseImg] = useState<any>(null)
      const [isUploadingCourseImage, setIsUploadingCourseImage] = useState(false)
  
      const uploadCourseImage = async (file: string | Blob) => {
          try {
              setIsUploadingCourseImage(true)
              const res = await UploadUtility(file)
              setCourseImg(res.data)
              setIsUploadingCourseImage(false)
          } catch (error) {
              setIsUploadingCourseImage(false)
          }
      }

      const query = useQuery()

      const [isAddingCourseDescription, setIsAddingCourseDescription] = useState(false)
      const addCourseDescription = async (e: any) => {
        // Message.success("Course updated successfuly");
        // props.setPage(props.page + 1)
        // return;
        e.preventDefault(); 
        setIsAddingCourseDescription(true)
        const courseId = query.get('course-id')
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/course/update/"+courseId,
                data: {
                    isFor: props.formData.whoCourse,
                    wouldLearn: props.formData.whatLearn,
                    requirements: props.formData.requirements
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
            <h5>Course Description</h5>
                {/* <form  > */}
                    <div className="profile">
                        <div className="form-container">
                            <div className="">
                                <label htmlFor="studentDes">Who is this course for:</label>

                                {
                                    props.formData.whoCourse.map((des, idx) => 
                                        (

                                            <input ref={studentDescriptionRef} type="text"  key={idx} required name="studentDes" placeholder='Describe your potential student' id="" defaultValue={des} onChange={(value) => {
                                                let oldWhoCourse = props.formData.whoCourse
                                                oldWhoCourse[idx] = value.target.value
                                                props.setFormData({...props.formData, whoCourse: oldWhoCourse})
                                            }}/>

                                        )
                                        )
                                }
                                <input ref={studentDescriptionRef} type="text" required name="studentDes" placeholder='Describe your potential student' id="" onChange={e => setCourseIsFor(e.target.value)} value={courseIsFor} />
                                <button type="button" className="add" onClick={addDescription}>
                                   <AiOutlinePlusCircle /> Add
                                </button>
                            </div>
                            <div className="">
                                <label htmlFor="studentLearn">What you will learn</label>
                                {
                                    props.formData.whatLearn.map((learn, idx) => 
                                        (
                                            <input ref={studentDescriptionRef} type="text"  key={idx} required name="studentDes" placeholder='Describe your potential student' id="" defaultValue={learn} onChange={(value) => {
                                                let oldWhatLearn = props.formData.whatLearn
                                                oldWhatLearn[idx] = value.target.value
                                                props.setFormData({...props.formData, whatLearn: oldWhatLearn})
                                            }}/>
                                        )
                                        )
                                }       
                                <input type="text" required name="studentLearn" placeholder='What your students will learn' id=""  value={studentLearn}
                                onChange={e => setstudentLearn(e.target.value)} /> 
                                <button type="button" className="add" onClick={addLearn}>
                                   <AiOutlinePlusCircle /> Add
                                </button>
                            </div>
                            <div className="">
                                <label htmlFor="requirements">Requirements</label>
                                {
                                    props.formData.requirements.map((requirements, idx) => 
                                        (
                                            <input ref={studentDescriptionRef} type="text"  key={idx} required name="studentDes" placeholder='Describe your potential student' id="" defaultValue={requirements} onChange={(value) => {
                                                let oldRequirements = props.formData.requirements
                                                oldRequirements[idx] = value.target.value
                                                props.setFormData({...props.formData, requirements: oldRequirements})
                                            }}/>
                                        )
                                        )
                                }       
                                <input type="text" required name="requirements" placeholder='What your students need to take this course' id=""  value={requirements}
                                onChange={e => setrequirements(e.target.value)} /> 
                                <button type="button" className="add" onClick={addRequirements}>
                                   <AiOutlinePlusCircle /> Add
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="save">
                    <button onClick={() => {props.setPage(props.page - 1)}}>
                         Previous
                        </button>
                        <button onClick={(e) => {
                            addCourseDescription(e)
                        }}>
                        {isAddingCourseDescription ? <Loader /> : "Save and Continue"}
                        </button>
                    </div>
                {/* </form> */}
        </Wrapper>
     );
}


export default CourseDescription;