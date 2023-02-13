import { Wrapper } from "../../../screens/teacher/courses/CreateCourse/styles";
import { useState } from 'react';
import Loader from "../../Loader/Loader";
import AxiosCall from "../../../../utils/axios";
import UploadUtility from "../../../../utils/axios/UploadUtility";
import Message from "../../message/Message";

type formDataProps = {
    formData: {
        title: string,
        description: string,
        img: string,
        category: string,
        level: string,
        about: string,
    }
    setFormData: Function,
    page: number,
    setPage: Function,
}
const CourseOverview:React.FC<formDataProps> = (props: formDataProps) => {
    const [courseImage, setcourseImage] = useState('')
    const selectImage = (x: any) => {
        const input = x.target.files;
        setcourseImage(input[0]) ;
        if (input && input[0]) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            setcourseImage(e.target.result);
            props.formData.img = e.target.result
          };
          reader.readAsDataURL(input[0]);
        }
        
      }
      const removeImage = () => {
        setcourseImage('')
      }
      const categories = ["Baking", "Photography", "Sewing", "Makeup"];
      const levels = ["Beginner", "Intermediate", "Advanced",];
    const handleChange = (evt: any) => {
        const name = evt.target.name;
        const value = 
        evt.target.value;
        props.setFormData({
          ...props.formData,
          [name]: value
        })
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
      

      const [isAddingCourseOverview, setIsAddingCourseOverview] = useState(false)
      const addCourseDescription = async (e: any) => {
        e.preventDefault(); 
        setIsAddingCourseOverview(true)
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/course/add",
                data: {   
                    title: props.formData.title,
                    category: props.formData.category,
                    level: props.formData.level,
                    description: props.formData.description,
                    about: props.formData.about,
                    courseImg: courseImg.name,
                    isFor: [],
                    wouldLearn: [],
                    requirements: [],
                    price: 0,
                    status: "active"
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsAddingCourseOverview(false)
                Message.success("Course created successfuly");
                props.setPage(props.page + 1)
            } else {
                setIsAddingCourseOverview(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsAddingCourseOverview(false)
            Message.error(err?.response.data.message)
        }
    }


    
    return ( 
        <Wrapper>
            <h5>Course Overview</h5>
                {/* <form  > */}
                    <div className="profile">
                        <div className="img-container">
                            <div className="img-wrapper">
                                {
                                    courseImage ?  <img src={courseImage} alt="courseImage" /> : <img src='/assets/img/courseImage.svg' alt="instructor" /> 
                                }
                                
                                {isUploadingCourseImage  && <div className="uploading-profile-img">
                                    <Loader />
                                </div>}
                            </div>
                            <div>
                            <label htmlFor="profile">Display Image</label>
                            <div className="actions">
                                
                                <label htmlFor="image" className="btn-primary" >
                                <input type="file" required onChange={selectImage}  name="image" id="image" />
                                        Upload photo
                                </label>
                                <button onClick={ removeImage} className="btn-secondary">
                                    Delete
                                </button>                               
                            </div>
                            <p>Maximum file size 1MB  File format JPEG, PNG or GIF</p>
                            </div>
                        </div>
                        <div className="form-container">
                           <section>
                           <div className="">
                                <label htmlFor="category">Select Category</label>
                                <select name="category" required id="" value={props.formData.category}
                                        onChange={handleChange}>
                                {categories.map((option: string, index: number) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="">
                                <label htmlFor="level">Level</label>
                                <select name="level" required id="" value={props.formData.level}
                                        onChange={handleChange}>
                                {levels.map((option: string, index: number) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                ))}
                                </select>
                            </div>
                           </section>
                            <div className="">
                                <label htmlFor="title">Course Title</label>
                                <input type="text" required name="title" placeholder='Making Pastries' id=""  value={props.formData.title}
                                onChange={handleChange} />
                            </div>
                         <div className="">
                                
                                <div className="about">
                                <label htmlFor="description">Brief Description</label>
                                <span className="about-length">{props.formData.description.length}/50</span>
                                </div>
                                <textarea name="description" required id="" rows={2} onChange={handleChange} value={props.formData.description} maxLength={50}>
                                    {props.formData.description}
                                </textarea>
                            </div>
                            <div className="">
                                <div className="about">
                                <label htmlFor="About">About the Course</label>
                                <span className="about-length">{props.formData.about.length}/1000</span>
                                </div>
                                <textarea name="about" required id="" rows={10} onChange={handleChange} value={props.formData.about} maxLength={1000}>
                                    {props.formData.about}
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="save">
                        <button onClick={(e) => {addCourseDescription(e);}}>
                        {isAddingCourseOverview ? <Loader /> : "Save and Continue"}
                        </button>
                    </div>
                {/* </form> */}
        </Wrapper>
     );
}


export default CourseOverview;