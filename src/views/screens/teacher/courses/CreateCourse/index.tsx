import THeader from '../../../../components/Teacher/TeacherHeader'
import Footer from '../../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import { useEffect, useState } from 'react';
import CourseOverview from '../../../../components/Teacher/CreateCourse/CourseOverview';
import CourseDescription from '../../../../components/Teacher/CreateCourse/CourseDescription';
import CoursePricing from '../../../../components/Teacher/CreateCourse/CoursePricing';
import {IoChevronForward} from 'react-icons/io5'
import CourseUpload from '../../../../components/Teacher/CreateCourse/CourseUpload';
import useQuery from '../../../../../hooks/useQuery';
import { set } from 'immer/dist/internal';
import { useLocation, useNavigate } from 'react-router';
import AxiosCall from '../../../../../utils/axios';
import Message from '../../../../components/message/Message';
import Loader from '../../../../components/Loader/Loader';
// import TeacherBackgroundInfo from '../../../components/Teacher/BackgroundInfo';

const CreateCourse: React.FC = () => {
    const [page, setPage] = useState<any>(null);
    const [formData, setFormData] = useState<any>({
        title: "",
        description: "",
        img: "",
        category: "fishery",
        level: "Beginner",
        about: "",
        whoCourse: [],
        whatLearn: [],
        requirements: [],
        price: '',
        chapters: [
            {
                id: "",
                title: '',
                lectures: [],
            }
        ],
    })
    const componentList = [
        <CourseOverview 
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <CourseDescription 
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <CourseUpload
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
        <CoursePricing
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
        />,
                
    ]
    const query = useQuery();
    const location = useLocation()
    const navigate = useNavigate()

    const setPageTab = () => {
        if (query.get('tab') == 'overview') {
            setPage(0)
        } else if (query.get('tab') == 'description') {
            setPage(1)
        } else if (query.get('tab') == 'upload') {
            setPage(2)
        } else if (query.get('tab') == 'pricing') {
            setPage(3)
        } else {
            setPage(0)
            navigate({ pathname: location.pathname, search: '?tab=overview'});
        }
    }

    useEffect(() => {
        setPageTab()
    }, [])


    const [isFetchingCourse, setIsFetchngCourse] = useState<any>(true)
    const getCourse = async () => {
        const courseId = query.get('course-id')
        if (courseId == null) {
            setIsFetchngCourse(false)
            return;
        }
        setIsFetchngCourse(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/course/fetch/"+courseId
            });

            console.log("response:",res);
    
            if (res.status == 1) {

                const course = res.data

                const chapterList = []

                for (let index = 0; index < course.chapters.length; index++) {
                    const chapter = course.chapters[index];

                    // const lectureList: any = []

                    // for (let index = 0; index < chapter.lectures.length; index++) {
                    //     const lecture = chapter.lectures[index];
                    //     lectureList.push({
                    //         lecture
                    //     })
                    // }
            
                    chapterList.push({
                        id: chapter._id,
                        title: chapter.title,
                        lectures: chapter.lectures
                    })
                }

                setFormData({...formData,
                    title: course.title,
                    description: course.description,
                    img: course.courseImg,
                    category: course.category,
                    level: course.level.toLowerCase(),
                    about: course.about,
                    whoCourse: course.isFor,
                    whatLearn: course.wouldLearn,
                    requirements: course.requirements,
                    price: course.price,
                    chapters: chapterList,
                })

                setIsFetchngCourse(false)
                Message.success(res.message);
            } else {
                setIsFetchngCourse(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchngCourse(false)
            Message.error(err?.response.data.message)
        }
    }


    useEffect(() => {
        getCourse()
    }, [])

    return ( 
        <Wrapper>
            <THeader />
                {page != null && <div className="course-content-header">
                    <ul>
                        <li style={ page === 0 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => { navigate({ pathname: location.pathname, search: '?tab=overview&course-id='+query.get('course-id')}); setPage(0)}}>Overview <IoChevronForward/> </li>
                        <li style={ page === 1 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => { navigate({ pathname: location.pathname, search: '?tab=description&course-id='+query.get('course-id')}); setPage(1)}}>Description <IoChevronForward/> </li>
                        <li style={ page === 2 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => { navigate({ pathname: location.pathname, search: '?tab=upload&course-id='+query.get('course-id')}); setPage(2)}}>Upload <IoChevronForward/> </li>
                        <li style={ page === 3 ? { fontWeight: 600, color: '#fff'} : {}} onClick={() => { navigate({ pathname: location.pathname, search: '?tab=pricing&course-id='+query.get('course-id')}); setPage(3)}}>Pricing <IoChevronForward/> </li>
                    </ul>
                </div>}
                <Container>

               <form onSubmit={(e) => { e.preventDefault()}}>
               {page == null || isFetchingCourse ? <Loader styleTwo /> : <div>{componentList[page]}</div>}
               </form>
                </Container>
                <Footer />
        </Wrapper>
     );
}
 
export default CreateCourse;