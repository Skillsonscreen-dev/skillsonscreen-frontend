import { Wrapper } from "../../screens/teacher/registration/styles";
import { useEffect, useState } from 'react';
import Message from "../message/Message";
import AxiosCall from "../../../utils/axios";
import Loader from "../Loader/Loader";
import UploadUtility from "../../../utils/axios/UploadUtility";
import { TutorProfileInterface } from "../student/courseDetails/courseInstructor/CourseInstructor";
type gender = {
    male: string,
    female: string,
    unknown: string
}
type formDataProps = {
    formData: {
        firstname: string,
        lastname: string,
        img: string,
        dob: any,
        gender: string,
        location: string,
        skill: string,
        about: string,
        headline: string,
    }
    setFormData: Function,
    page: number,
    setPage: Function,
}
const TeacherPersonalData:React.FC<formDataProps> = (props: formDataProps) => {
    const [instructor, setinstructor] = useState('')
    const [isFetchingProfile, setIsFetchingProfile] = useState(false)
    const [tutorProfile, setTutorProfile] = useState<TutorProfileInterface>()

    const fetchTutorProfile = async () => {
        setIsFetchingProfile(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/user/profile"
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsFetchingProfile(false)
                setTutorProfile(res.data)

                    props.setFormData({
                        ...props.formData,
                        ["firstname"]: res.data?.firstName,
                        ["lastname"]: res.data?.lastName,
                        ["img"]: res.data?.profileImg,
                        ["dob"]: res.data.teacher.dateOfBirth,
                        ["gender"]: res.data.teacher.gender,
                        ["location"]: res.data.teacher.location,
                        ["skill"]: res.data.teacher.skill,
                        ["about"]: res.data.teacher.about,
                        ["headline"]: res.data.teacher.headline,
                    })
                setinstructor(res.data?.profileImg)
                Message.success("Tutor profile fetched");
            } else {
                setIsFetchingProfile(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingProfile(false)
            Message.error(err?.response.data.message)
        }
    }

    useEffect(() => {
        fetchTutorProfile()
    }, []) 

    const selectImage = (x: any) => {
        const input = x.target.files;
        setinstructor(input[0]) ;
        uploadProfileImg(input[0])
        if (input && input[0]) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            setinstructor(e.target.result);
            props.formData.img = e.target.result
          };
          reader.readAsDataURL(input[0]);
        }
        
      }
      const removeImage = () => {
        setinstructor('')
      }
      const skills = ["Baking", "Photography", "Sewing", "Makeup"];
    const handleChange = (evt: any) => {
        const name = evt.target.name;
        const value = 
        evt.target.value;
        props.setFormData({
          ...props.formData,
          [name]: value
        })
    }

    const [profileImg, setProfileImg] = useState<any>(null)
    const [isUploadingProfileImg, setIsUploadingProfileImg] = useState(false)

    const uploadProfileImg = async (file: string | Blob) => {
        try {
            setIsUploadingProfileImg(true)
            const res = await UploadUtility(file)
            setProfileImg(res.data)
            setIsUploadingProfileImg(false)
        } catch (error) {
            setIsUploadingProfileImg(false)
        }
    }

    const [isSavingProfile, setIsSavingProfile] = useState<boolean>(false);
    const saveProfile = async (e: any) => {
        e.preventDefault();
        if (profileImg == null && props.formData.img == "") {
            console.log('====================================');
            console.log(profileImg);
            console.log('====================================');
            return Message.error("Please upload an image")
        }
        setIsSavingProfile(true)
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/profile/update",
                data: {   
                    dateOfBirth: props.formData.dob,
                    skill: props.formData.skill,
                    about: props.formData.about,
                    gender: props.formData.gender,
                    firstName: props.formData.firstname,
                    lastName: props.formData.lastname,
                    location: props.formData.location,
                    headline: props.formData.headline,
                    profileImg: profileImg ? profileImg.name : null
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsSavingProfile(false)
                Message.success("Teacher Profile updated successfuly");
                props.setPage(props.page + 1);
            } else {
                setIsSavingProfile(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            setIsSavingProfile(false)
            Message.error(err?.response?.data?.message)
        }
    }
    return ( 
        <Wrapper>
            <h5>Personal Data</h5>
                {/* <form  > */}
                    <div className="profile">
                        <label htmlFor="profile">Profile picture</label>
                        <div className="img-container">
                            <div className="img-wrapper">
                                {
                                    instructor ?  <img src={instructor} alt="instructor" /> : <img src='assets/img/instructor.png' alt="instructor" /> 
                                }

                                {isUploadingProfileImg  && <div className="uploading-profile-img">
                                    <Loader />
                                </div>}
                            </div>
                            <div>
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
                            <div className="">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" required name="firstname" placeholder='Adekunle' id=""  value={props.formData.firstname}
                                onChange={handleChange} />
                            </div>
                         <div className="">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" required name="lastname" placeholder='Ciroma' id="" value={props.formData.lastname}
                                onChange={handleChange} />
                            </div>
                            <div className="">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" required name="dob" id="" value={props.formData.dob}
                                onChange={handleChange}/> 
                            </div>
                            <div className="">
                               <span>
                               <label htmlFor="gender">Gender</label> (optional)
                               </span>
                                <div className="gender">
                                    <span>
                                    <input checked={props.formData.gender == "male" ? true : false} type="radio" name="gender" id="" value="male"
                                        onChange={handleChange} /> Male
                                    </span>
                                    <span>
                                    <input checked={props.formData.gender == "female" ? true : false} type="radio" name="gender" id="" value="female"
                                        onChange={handleChange} /> Female
                                    </span>
                                    <span>
                                    <input checked={props.formData.gender == "unknown" ? true : false} type="radio" name="gender" id="" value="unknown"
                                        onChange={handleChange} /> I'd rather not say 
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="skill">Skill</label>
                                <select name="skill" required id="" value={props.formData.skill}
                                        onChange={handleChange}>
                                {skills.map((option: string, index: number) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                ))}
                                </select>
                            </div>
                            <div className="">
                                <label htmlFor="location">Location</label>
                                <input type="text" required name="location" placeholder='Lagos, Nigeria' id="" value={props.formData.location}
                                        onChange={handleChange} />
                            </div>
                            <div className="">
                                <div className="about">
                                <label htmlFor="About">About Me</label>
                                <span className="about-length">{props.formData.about.length}/1000</span>
                                </div>
                                <textarea name="about" required id="" placeholder='Tell us about yourself, your area of specialization and your achievements' rows={10} onChange={handleChange} value={props.formData.about} maxLength={1000}>
                                    {props.formData.about}
                                </textarea>
                            </div>
                            <div className="">
                                <label htmlFor="headline">Headline</label>
                                <input type="text" required name="headline" placeholder='Baking Tutor' id="" value={props.formData.headline}
                                        onChange={handleChange} />
                            </div> 
                        </div>
                    </div>

                    <div className="save">
                        <button onClick={(e) => {
                            saveProfile(e);
                        }}>
                        {isSavingProfile ? <Loader /> : "Save and Continue"}
                        </button>
                    </div>
                {/* </form> */}
        </Wrapper>
     );
}


export default TeacherPersonalData;