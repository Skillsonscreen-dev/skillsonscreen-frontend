import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import CourseAboutSection from "../../../components/student/courseDetails/about/CourseInfo";
import CourseContent from "../../../components/student/courseDetails/courseContent/CourseContent";
import CourseInfo from "../../../components/student/courseDetails/courseInfo/CourseInfo";
import CourseInstructor from "../../../components/student/courseDetails/courseInstructor/CourseInstructor";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import { Container, Mb, Wrapper } from "./styles";
import CourseProgress from "../../../components/student/courseDetails/courseProgress/CourseProgress";
import { Breadcrumb } from "../../../components/student/skillJumboContent/style";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import CoursePreview from "../../../components/student/courseDetails/coursePreview/CoursePreview";

const Course: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Jumbotron size="sm"
                content={ 
                    <Breadcrumb mb={0}>
                        <span><Link to={"/categories"}>Explore</Link></span><BiChevronRight />
                        <span><Link to={"/categories/Baking/skills"}>Baking</Link></span><BiChevronRight />
                        <span className="current">Making Pastries</span>
                    </Breadcrumb>
                }
            />
            <Container>
                <Mb><CoursePreview /></Mb>
                <Mb><CourseInfo /></Mb>
                <Mb><CourseProgress /></Mb>
                <Mb><CourseContent /></Mb>
                <Mb><CourseAboutSection /></Mb>
                <CourseInstructor />
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Course;