import InfoPill from '../../../ui/infoPill/InfoPill';
import Chapter from './Chapter';
import { Chapters, Header, Wrapper } from './styles';

const CourseContent: React.FC = () => {
    const content = [
        { num: 1, title: 'Types of Pastries ', completed: true},
        { num: 2, title: 'How to make Meat Pie', completed: true},
        { num: 3, title: 'How to make Sausage ', completed: true},
        { num: 4, title: 'How to make Puff-puff', completed: true},
        { num: 5, title: 'How to make Doughnuts', completed: false}
    ]
    return (
        <Wrapper>
            <h3>Course content</h3>
            <div className="content">
                <InfoPill size='md' br={8} className={"info-pill"}>
                    <div className="info-content">
                        <span><strong>6</strong> Chapters</span>|
                        <span><strong>25</strong> Classes</span>|
                        <span><strong>11h 45m</strong> Total Duration</span>
                    </div>                    
                </InfoPill>

                <Chapters>
                    {
                        content.map(c => (
                            <Chapter key={c.num} title={c.title} num={c.num} completed={c.completed} />
                        ))
                    }
                </Chapters>
            </div>
        </Wrapper>
    )
}

export default CourseContent;