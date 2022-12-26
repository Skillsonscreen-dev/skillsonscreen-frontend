import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import { Container, Content, CourseBody, CourseContentWrapper, Video, MediaWrapper, Wrapper, Document, DocumentWrapper, ClassLinks, ClassLinksWrapper, ClassTabs, HideTab } from "./styles";
import { Breadcrumb } from "../../../components/student/skillJumboContent/style";
import { Link, useParams, useLocation } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import CourseContent from "../../../components/student/class/courseContent/CourseContent";
import content from './data';
import Transcript from "../../../components/student/class/Transcript/Transcript";
import Notes from "../../../components/student/class/Notes/Notes";

const Class: React.FC = () => {
    const { lesson, course } = useParams();
    const { hash } = useLocation();
    const [ chapters, setChapters ] = useState<typeof content>([]);
    const [ currLesson, setCurrLesson ] = useState<any>({});
    const [ activeChapter, setActiveChapter ] = useState<string | number | null>(null);
    const [ classTab, setClassTab ] = useState('');

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
        if(!hash) window.location.hash = '#transcript';
        else setClassTab(hash);
    }, [hash]);

    useEffect(() => {
        setChapters(content);
    }, []);
    
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

                        <ClassLinksWrapper>
                            <ClassLinks>
                                <Link to={'./#content'} className={`${classTab === '#content'?'active': ''} hide`}>Course content</Link>
                                <Link to={'./#transcript'} className={classTab === '#transcript'?'active': ''}>Transcript</Link>
                                <Link to={'./#notes'} className={classTab === '#notes'?'active': ''}>Notes</Link>
                                <Link to={'./#resources'} className={classTab === '#resources'?'active': ''}>Resources</Link>
                                <Link to={'./#discussions'} className={classTab === '#discussions'?'active': ''}>Discussions</Link>
                                <Link to={'./#announcements'} className={classTab === '#announcements'?'active': ''}>Announcements</Link>
                            </ClassLinks>
                        </ClassLinksWrapper>

                        <ClassTabs>
                            {
                                classTab === '#content'?(
                                    <HideTab>
                                        <CourseContent content={chapters} lesson={lesson} activeChapter={activeChapter} />
                                    </HideTab>                              
                                ):
                                classTab === '#transcript'?(
                                    <Transcript />
                                ):
                                classTab === '#notes'?(
                                    <Notes />
                                ):
                                classTab === '#resources'?(
                                    <>Hello</>
                                ):
                                classTab === '#discussions'?(
                                    <>Hello</>
                                ):
                                classTab === '#announcements'?(
                                    <>Hello</>
                                ):
                                null
                            }
                        </ClassTabs>                        
                    </CourseBody>                    
                </Content>                
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default Class;