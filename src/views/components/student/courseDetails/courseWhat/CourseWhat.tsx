import { CourseInterface } from '../../../../../slices/cartSlice';
import { Wrapper } from './styles';

interface CourseAboutSectionInterface {
    course: CourseInterface | null
}

const CourseFor: React.FC<CourseAboutSectionInterface> = ({course}) => {
    const content = course?.wouldLearn
    return (
        <Wrapper>
            <h3>Who is this course for:</h3>
            <div className="content">
                {
                    content?.map((item, i) => (
                        <div className={"item"} key={i}>
                            <div className={'inner'}>
                                <span className={'icon'}>
                                    <img src="/assets/icons/dot.svg" />
                                </span>                            
                                <span className={'text'}>{item}</span>
                            </div>                            
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default CourseFor;