import { Wrapper } from "../../screens/teacher/registration/styles";
import { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsBank } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AxiosCall from "../../../utils/axios";
import Message from "../message/Message";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";
type formDataProps = {
    formData: {
        degree: string,
        institution: string,
        occupation: string,
        experience: string,
        bank: string,
        accountNumber: number,
        accountName: string,
        terms: any,
    }
    setFormData: Function,
    page: number,
    setPage: Function
}
const TeacherBackgroundInfo:React.FC<formDataProps> = (props: formDataProps) => {
    const handleChange = (evt: any) => {
        const name = evt.target.name;
        const value = 
        evt.target.value;
        props.setFormData({
          ...props.formData,
          [name]: value
        })
      }
    const navigate = useNavigate()
    const [displayAccountForm, setdisplayAccountForm] = useState(false)
    const openAcctForm = () => {
    setdisplayAccountForm(!displayAccountForm)
    }

    const [isSavingProfile, setIsSavingProfile] = useState<boolean>(false);
    const saveProfile = async (e: any) => {
        e.preventDefault();
        setIsSavingProfile(true)
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/teacher/profile/update",
                data: {
                    degree: props.formData.degree,
                    occupation: props.formData.occupation,
                    institution: props.formData.institution,
                    experience: props.formData.experience,
                    bank: props.formData.bank,
                    accountNumber: props.formData.accountNumber,
                    accountName: props.formData.accountName
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsSavingProfile(false)
                Message.success("Teacher Profile updated successfuly");
                return navigate("/teacher");
            } else {
                setIsSavingProfile(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSavingProfile(false)
            Message.error(err?.response.data.message)
        }
    }

    return ( 
        <Wrapper>
            <h5>Background & Experience</h5>
                    <div className="profile">
                        <div className="form-container">
                            <div className="">
                                <label htmlFor="degree">Highest Degree</label>
                                <input type="text" required name="degree" placeholder='B.Engineering' id=""  value={props.formData.degree}
                                onChange={handleChange} />
                            </div>
                         <div className="">
                                <label htmlFor="institution">Institution Attended</label>
                                <input type="text" required name="institution" placeholder='Lagbaja University, Nigeria' id="" value={props.formData.institution}
                                onChange={handleChange} />
                            </div>
                            <div className="">
                                <label htmlFor="ocupation">Occupation</label>
                                <input type="text" required name="ocupation" id="" placeholder="Baker" defaultValue={props.formData.occupation}
                                onChange={handleChange}/> 
                            </div>
                            <div className="">
                                <label htmlFor="experience">Years of Experience</label>
                                <input type="text" required name="experience" placeholder='6 years' id="" defaultValue={props.formData.experience}
                                        onChange={handleChange} />
                            </div> 
                        </div>
                        <div className="note-text">
                        When you sign up to become an instructor on Skillsonscreen, you agree to abide by the <a href="/become-a-tutor">Instructor Terms</a>. <br />
                       <p> They cover details about the Udemy platform that are relevant to instructors (including pricing, payments, and your obligations as an instructor), so it’s important to read them.</p>
                        </div>
                        <div className="check">
                            <input type="checkbox" name="terms" required  id="" value={props.formData.terms}
                                onChange={handleChange} />
                                <p> I have read and agree to the Skillsonscreen Instructor Terms.</p>
                        </div>
                        <div className="payout">
                        <h5>Payout and Taxes</h5>
                        <h4>Choose your payout method below.</h4>
                        <p>You can only  add one payout method at a time. Connecting to a new payout method may take a few days. You won’t receive payments to the new linked account until its status is approved.</p>
                        <h4>Saved Payment Method</h4>
                        <div className="account-detail">
                            <div className="">
                                <span className="bank">
                                    <BsBank />
                                </span>
                                <span>
                                    <small>Access Bank</small><br />
                                    <strong>Adekunle Ciroma | 0568631256</strong>
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
                        { displayAccountForm === true &&
                        <div className="account-form">
                        <div className="">
                                <label htmlFor="bank">Bank</label>
                                <input type="text" name="bank" placeholder='Access Bank' id=""  value={props.formData.bank}
                                onChange={handleChange} />
                            </div>
                         <div className="">
                                <label htmlFor="account-number">Account Number</label>
                                <input type="text" required name="accountNumber" placeholder='058522899289' id="" value={props.formData.accountNumber}
                                onChange={handleChange} />
                            </div>
                            <div className="">
                                <label htmlFor="account-name">Account Name</label>
                                <input type="text" required name="accountName" id="" placeholder="Adekunle Ciroma" value={props.formData.accountName}
                                onChange={handleChange}/> 
                            </div>
                        </div> }
                        <button className="acct-action" onClick={openAcctForm}>
                           <AiOutlinePlusCircle /> Add Payout Method
                        </button>
                        </div>
                    </div>

                    <div className="save">
                    <button onClick={() => {props.setPage(props.page - 1)}}>
                         Previous
                        </button>
                        <button onClick={saveProfile}>
                         {isSavingProfile ? <Loader /> : "Complete"}
                        </button>
                    </div>
        </Wrapper>
     );
}


export default TeacherBackgroundInfo;