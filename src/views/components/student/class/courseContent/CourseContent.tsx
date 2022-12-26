import Chapter from './Chapter';
import { Chapters, Header, Wrapper } from './styles';

interface CourseContentProps {
    content: {
        num: number;
        id: string | number;
        completed: boolean;
        title: string;
        lessons: {
            id: number;
            length: number;
            title: string;
            type: string;
            seen?: boolean;
        }[]
    }[];
    lesson: string | undefined;
    activeChapter: string | number | null;
}

const CourseContent: React.FC<CourseContentProps> = (props) => {
    return (
        <Wrapper>
            <h3>Course content</h3>
            <div className="content">
                <Chapters>
                    {
                        props.content.map(c => (
                            <Chapter
                                key={c.num}
                                title={c.title}
                                num={c.num}
                                completed={c.completed}
                                content={c.lessons}
                                active={c.id == props.activeChapter}
                            />
                        ))
                    }
                </Chapters>
            </div>
        </Wrapper>
    )
}

export default CourseContent;