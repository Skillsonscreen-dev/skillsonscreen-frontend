import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import { useState } from 'react';
import TeacherPersonalData from '../../../components/Teacher/personalInfo';
import TeacherBackgroundInfo from '../../../components/Teacher/BackgroundInfo';
import Message from '../../../components/message/Message';
import { TutorProfileInterface } from '../../../components/student/courseDetails/courseInstructor/CourseInstructor';

const PersonalDataScreen: React.FC = () => {
    const [isFetchingProfile, setIsFetchingProfile] = useState(false)
    const [tutorProfile, setTutorProfile] = useState<TutorProfileInterface>()
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState<any>({
        firstname: '',
            lastname: '',
            img: '',
            dob: '',
            gender: '',
            location: '',
            skill: '',
            about: '',
            headline: '',
            degree: '',
            institution: '',
            occupation: '',
            experience: '',
            bank: '',
            accountNumber: '',
            accountName: '',
            terms: false,
    })

    const fetchTutorProfile = async (tutorId: string) => {
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

    const componentList = [
        <TeacherPersonalData  formData={formData} setFormData={setFormData} page={page} setPage={setPage} />,
        <TeacherBackgroundInfo formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
    ]

    return ( 
        <Wrapper>
            <Header />
                
                <Container>
                <div className="title">
                    <h4>Create your Tutor profile</h4>
                    <p>Let your students and fellow community member know more about you</p>
                </div>
               <form onSubmit={(e) => { e.preventDefault()}}>
                    <div>{componentList[page]}</div>
               </form>
                </Container>
                <Footer />
        </Wrapper>
     );
}
 
export default PersonalDataScreen;

function AxiosCall(arg0: { method: string; path: string; }): any {
    throw new Error('Function not implemented.');
}
