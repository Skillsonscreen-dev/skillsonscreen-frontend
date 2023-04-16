import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import CourseAboutSection from "../../../components/student/courseDetails/about/CourseInfo";
import CourseContent from "../../../components/student/courseDetails/courseContent/CourseContent";
import CourseInfo from "../../../components/student/courseDetails/courseInfo/CourseInfo";
import CourseInstructor, { TutorProfileInterface } from "../../../components/student/courseDetails/courseInstructor/CourseInstructor";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import { Container, Mb, Wrapper } from "./styles";
import CourseProgress from "../../../components/student/courseDetails/courseProgress/CourseProgress";
import { Breadcrumb } from "../../../components/student/skillJumboContent/style";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import CoursePreview from "../../../components/student/courseDetails/coursePreview/CoursePreview";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import content from "../Class/data";
import { CourseInterface } from "../../../../slices/cartSlice";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";

const Course: React.FC = () => {
    const { courseId } = useParams();
    const [ currLesson, setCurrLesson ] = useState<string | number | null>(null);



    const [isFetchingCourse, setIsFetchingCourse] = useState(false)
    const [isFetchingProfile, setIsFetchingProfile] = useState(false)
    const [tutorProfile, setTutorProfile] = useState<TutorProfileInterface>()
    const [course, setCourse] = useState<CourseInterface | null>(null)

    

    const fetchCourses = async () => {
        setIsFetchingCourse(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/course/fetch/"+courseId
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsFetchingCourse(false)
                setCourse(res.data)
                fetchTutorProfile(res.data.teacherId)
                Message.success("Course fetched");
            } else {
                setIsFetchingCourse(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingCourse(false)
            Message.error(err?.response.data.message)
        }
    }


    const fetchTutorProfile = async (tutorId: string) => {
        setIsFetchingProfile(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/tutor/profile/fetch/"+tutorId
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

    useEffect(() => {
        fetchCourses();
        let currentLesson;
        for(let c of content) {
            currentLesson = c.lessons.find(l => l.current);
            if(currentLesson) break;
        }
        if(currentLesson) setCurrLesson(currentLesson.id);
    }, []);

    return (
        <Wrapper>
            <Header />
            <Jumbotron size="sm"
                content={ 
                    <Breadcrumb mb={0}>
                        <span><Link to={"/categories"}>Explore</Link></span><BiChevronRight />
                        <span><Link to={"/categories/Baking/skills"}>Baking</Link></span><BiChevronRight />
                        <span className="current">{course?.title ?? ""}</span>
                    </Breadcrumb>
                }
            />
            <Container>
                <Mb><CoursePreview currLesson={currLesson} /></Mb>
                <Mb><CourseInfo /></Mb>
                <Mb><CourseProgress /></Mb>
                <Mb><CourseContent /></Mb>
                <Mb><CourseAboutSection course={null} /></Mb>
                <CourseInstructor isLoading={isFetchingProfile} tutor={tutorProfile} />
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Course;