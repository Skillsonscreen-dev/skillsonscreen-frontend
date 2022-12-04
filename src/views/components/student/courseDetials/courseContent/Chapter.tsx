import { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import formatNumber from '../../../../../utils/numberFormatter';
import Button from '../../../ui/button/Button';
import InfoPill from '../../../ui/infoPill/InfoPill';
import { Chapter as Wrapper, Content, ContentItem, Header } from './styles';

interface ChapterProps {
    num: number;
    title: string;
    completed: boolean;
}

const Chapter: React.FC<ChapterProps> = (props) => {

    const content = [
        { length: 2, title: 'Types of Pastries ', type: 'reading'},
        { length: 5, title: 'How to make Meat Pie', type: 'video'},
        { length: 10, title: 'How to make Sausage ', type: 'video'},
        { length: 5, title: 'How to make Puff-puff', type: 'video'},
        { length: 5, title: 'How to make Doughnuts', type: 'reading'}
    ]

    const [ showContent, setShowContent ] = useState(false);

    const toggleShowContent = () => {
        setShowContent(!showContent);
    }
    
    return (
        <Wrapper>
            <Header onClick={toggleShowContent}>
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
                    <div className="length">
                        (40 min Total) 6 videos, 1 readings, 1 quiz
                    </div>
                </div>
                <div className="complete-status">
                    {
                        props.completed? (
                            <>
                                <Button size='md' color='black' br={8} className='complete-button big'>
                                    <img src='/assets/icons/check-circle-green.svg' />
                                    Completed
                                </Button>
                                <Button size='sm' color='black' br={8} className='complete-button small'>
                                    <img src='/assets/icons/check-circle-green.svg' />
                                    Completed
                                </Button>
                            </>
                        ): (
                            <>
                                <Button size='md' br={4} className='complete-button big'>
                                    Continue
                                </Button>
                                <Button size='sm' br={4} className='complete-button small'>
                                    Continue
                                </Button>
                            </>
                        )
                    }
                    
                </div>
            </Header>
            {
                showContent && (
                    <Content>
                        {
                            content.map((c, i) => (
                                <ContentItem key={i}>
                                    <div className="icon">
                                        {
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
                            ))
                        }
                    </Content>
                )
            }            
        </Wrapper>
    )
}

export default Chapter;