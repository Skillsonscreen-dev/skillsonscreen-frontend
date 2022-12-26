import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import { Container, Content, CourseBody, CourseContentWrapper, Video, MediaWrapper, Wrapper, Document, DocumentWrapper } from "./styles";
import { Breadcrumb } from "../../../components/student/skillJumboContent/style";
import { Link, useParams } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import CourseContent from "../../../components/student/class/courseContent/CourseContent";
import content from './data';

const Class: React.FC = () => {
    const { lesson, course } = useParams();
    const [ chapters, setChapters ] = useState<typeof content>([]);
    const [ currLesson, setCurrLesson ] = useState<any>({});
    const [ activeChapter, setActiveChapter ] = useState<string | number | null>(null);

    useEffect(() => {
        if(lesson) {
            let lessonObj: any;
            let activeChapterObj = content.find(c => lessonObj = c.lessons.find(l => String(l.id) == lesson));
            if(activeChapterObj) setActiveChapter(activeChapterObj.id);
            if(lessonObj) {
                setCurrLesson(lessonObj);
            }
        }
    }, [lesson, course]);

    useEffect(() => {
        setChapters(content);
    }, [])
    
    return (
        <Wrapper>
            <Header />
            <Jumbotron size="sm"
                content={ 
                    <Breadcrumb mb={0}>
                        <span><Link to={"/categories"}>{course}</Link></span><BiChevronRight />
                        <span><Link to={"/categories/Baking/skills"}>Chapter </Link></span><BiChevronRight />
                        <span className="current">introduction</span>
                    </Breadcrumb>
                }
            />
            <Container>
                <Content>
                    <CourseContentWrapper>
                        <CourseContent content={chapters} lesson={lesson} activeChapter={activeChapter} />
                    </CourseContentWrapper>
                    <CourseBody>
                        <MediaWrapper>
                            {
                                currLesson.type === 'video'? (
                                    <Video controls>
                                        <source src={currLesson.url} />
                                    </Video>
                                ): (
                                    <DocumentWrapper>
                                        <Document dangerouslySetInnerHTML={{__html: currLesson.content}}/>
                                    </DocumentWrapper>
                                )
                            }
                        </MediaWrapper>
                    </CourseBody>                    
                </Content>                
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Class;