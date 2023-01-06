import THeader from '../../../components/Teacher/TeacherHeader'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import { useState } from 'react';
import TeacherPersonalData from '../../../components/Teacher/personalInfo';
import TeacherBackgroundInfo from '../../../components/Teacher/BackgroundInfo';

const PersonalDataScreen: React.FC = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState<any>({
        firstname: '',
            lastname: '',
            img: '',
            dob: '',
            gender: {
                male: 'male',
                female: 'female',
                unknown: 'unknown',
            },
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
    const componentList = [
        <TeacherPersonalData 
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
                ></TeacherPersonalData>,
                <TeacherBackgroundInfo 
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
                ></TeacherBackgroundInfo>
    ]
    return ( 
        <Wrapper>
            <THeader />
                
                <Container>
                <div className="title">
                    <h4>Create your Tutor profile</h4>
                    <p>Let your students and fellow community member know more about you</p>
                </div>
               {/* <form> */}
               <div>{componentList[page]}</div>
               {/* </form> */}
                </Container>
                <Footer />
        </Wrapper>
     );
}
 
export default PersonalDataScreen;