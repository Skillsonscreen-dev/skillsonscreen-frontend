import { Wrapper } from "../../screens/teacher/registration/styles";
import { useState } from 'react';
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
        gender: gender,
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
    const selectImage = (x: any) => {
        const input = x.target.files;
        setinstructor(input[0]) ;
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
                                    <input type="radio" name="gender" id="" value={props.formData.gender.male}
                                        onChange={handleChange} /> Male
                                    </span>
                                    <span>
                                    <input type="radio" name="gender" id="" value={props.formData.gender.female}
                                        onChange={handleChange} /> Female
                                    </span>
                                    <span>
                                    <input type="radio" name="gender" id="" value={props.formData.gender.unknown}
                                        onChange={handleChange} /> I’d rather not say 
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
                        <button onClick={() => {props.setPage(props.page + 1);}}>
                        Save and Continue
                        </button>
                    </div>
                {/* </form> */}
        </Wrapper>
     );
}


export default TeacherPersonalData;