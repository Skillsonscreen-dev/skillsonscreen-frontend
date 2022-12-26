import { useEffect, useState } from 'react';
import { BsDot, BsFillCheckCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import formatNumber from '../../../../../utils/numberFormatter';
import { Chapter as Wrapper, Content, ContentItem, Header } from './styles';

interface ChapterProps {
    num: number;
    title: string;
    completed: boolean;
    content: {
        id: number;
        length: number;
        title: string;
        type: string;
        seen?: boolean;
        current?: boolean;
    }[];
    active: boolean;
}

const Chapter: React.FC<ChapterProps> = (props) => {
    const { course } = useParams();
    const [ showContent, setShowContent ] = useState(props.active);

    const toggleShowContent = () => {
        setShowContent(!showContent);
    }

    useEffect(() => {
        setShowContent(props.active)
    }, [props.active]);
    
    return (
        <Wrapper>
            <Header onClick={toggleShowContent} active={props.active}>
                <div className="info">
                    <div className="icon">
                        {
                            showContent? <img src='/assets/icons/chevron-up-circle.svg' />:
                            <img src='/assets/icons/chevron-down-circle.svg' />
                        }
                        
                    </div>
                    <div className="title">
                        <span>Chapter {formatNumber(props.num).pad(2)}:</span>
                        <h4>{props.title}</h4>
                    </div>
                </div>             
            </Header>
            {
                showContent && (
                    <Content>
                        {
                            props.content.map((c, i) => (
                                <Link to={`/mycourses/${course}/class/lessons/${c.id}`}>
                                    <ContentItem key={i}>
                                        <div className="icon">
                                            {
                                                c.seen? 
                                                <BsFillCheckCircleFill color='#23AC00' />:
                                                c.type == 'reading'?
                                                <img src='/assets/icons/file.svg' />:
                                                <img src='/assets/icons/video.svg' />
                                            }                                        
                                        </div>
                                        <div className="title">
                                            <h5>{c.title}</h5>
                                            <span>
                                                <span className='cap'>{c.type}</span> 
                                                <BsDot /> 
                                                {c.length} min
                                            </span>
                                        </div>
                                    </ContentItem>
                                </Link>
                            ))
                        }
                    </Content>
                )
            }            
        </Wrapper>
    )
}

export default Chapter;