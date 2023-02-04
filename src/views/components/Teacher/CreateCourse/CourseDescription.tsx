import { Wrapper } from "../../../screens/teacher/courses/CreateCourse/styles";
import { useRef, useState } from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";

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
      const [studentLearn, setstudentLearn] = useState('')
      const [requirements, setrequirements] = useState('')

      const studentDescriptionRef = useRef<HTMLInputElement>(null)

      const addDescription = () => {
       if(studentDescriptionRef.current!.value!.length) {
        let whoCourse = props.formData.whoCourse
        whoCourse.push({
            id: nextId++,
            description: studentDescriptionRef?.current?.value
        })
        studentDescriptionRef!.current!.value = "";

         props.setFormData({...props.formData, whoCourse: whoCourse})
       }
      }
      const addLearn = () => {
        setstudentLearn('')
       if(studentLearn.length) {
        props.formData.whatLearn.push( {id: nextId++, description: studentLearn})
       }
      }
      const addRequirements = () => {
        setrequirements('')
       if(requirements.length) {
        props.formData.requirements.push( {id: nextId++, description: requirements})
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
                                    props.formData.whoCourse.map(des => 
                                        (
                                            <div className="answer" key={des.id}>
                                                {des.description}
                                            </div>
                                        )
                                        )
                                }
                                <input ref={studentDescriptionRef} type="text" required name="studentDes" placeholder='Describe your potential student' id="" />
                                <button type="button" className="add" onClick={addDescription}>
                                   <AiOutlinePlusCircle /> Add
                                </button>
                            </div>
                            <div className="">
                                <label htmlFor="studentLearn">What you will learn</label>
                                {
                                    props.formData.whatLearn.map(learn => 
                                        (
                                            <div className="answer" key={learn.id}>
                                                {learn.description}
                                            </div>
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
                                    props.formData.requirements.map(requirements => 
                                        (
                                            <div className="answer" key={requirements.id}>
                                                {requirements.description}
                                            </div>
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
                        <button onClick={() => { 
                            props.setPage(props.page + 1)
                        }}>
                        Save and Continue
                        </button>
                    </div>
                {/* </form> */}
        </Wrapper>
     );
}


export default CourseDescription;