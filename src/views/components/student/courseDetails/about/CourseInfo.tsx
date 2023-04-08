import { CourseInterface } from '../../../../../slices/cartSlice';
import { Wrapper } from './styles';

interface CourseAboutSectionInterface {
    course: CourseInterface | null
}

const CourseAboutSection: React.FC<CourseAboutSectionInterface> = ({course}) => {
    return (
        <Wrapper>
            <h3>About this course</h3>
            <div className="content" dangerouslySetInnerHTML={{__html: course?.description ?? ""}}>
            </div>
        </Wrapper>
    )
}

export default CourseAboutSection;