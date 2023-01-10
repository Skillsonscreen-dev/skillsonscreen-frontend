import THeader from '../../../../components/Teacher/TeacherHeader'
import Footer from '../../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import { useState } from 'react';
import CourseOverview from '../../../../components/Teacher/CreateCourse/CourseOverview';
import CourseDescription from '../../../../components/Teacher/CreateCourse/CourseDescription';
import CoursePricing from '../../../../components/Teacher/CreateCourse/CoursePricing';
import {IoChevronForward} from 'react-icons/io5'
import CourseUpload from '../../../../components/Teacher/CreateCourse/CourseUpload';
// import TeacherBackgroundInfo from '../../../components/Teacher/BackgroundInfo';

const CreateCourse: React.FC = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState<any>({
        title: "",
        description: "",
        img: "",
        category: "",
        level: "",
        about: "",
        whoCourse: [],
        whatLearn: [],
        requirements: [],
        price: '',
    })
    const componentList = [
        <CourseOverview 
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
                ></CourseOverview>,
                <CourseDescription 
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
                ></CourseDescription>,
                <CourseUpload
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
                ></CourseUpload>,
                <CoursePricing
                formData={formData}
                setFormData={setFormData}
                page={page}
                setPage={setPage}
                ></CoursePricing>,
                
    ]
    return ( 
        <Wrapper>
            <THeader />
                <div className="course-content-header">
                    <ul>
                        <li style={ page === 0 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => setPage(0)}>Overview <IoChevronForward/> </li>
                        <li style={ page === 1 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => setPage(1)}>Description <IoChevronForward/> </li>
                        <li style={ page === 2 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => setPage(2)}>Upload <IoChevronForward/> </li>
                        <li style={ page === 3 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => setPage(3)}>Pricing <IoChevronForward/> </li>
                    </ul>
                </div>
                <Container>

               <form onSubmit={(e) => { e.preventDefault()}}>
               <div>{componentList[page]}</div>
               </form>
                </Container>
                <Footer />
        </Wrapper>
     );
}
 
export default CreateCourse;