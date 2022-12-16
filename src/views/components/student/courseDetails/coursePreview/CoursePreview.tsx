import { BsPlayCircleFill } from 'react-icons/bs';
import Button from '../../../ui/button/Button';
import { Wrapper } from './styles';

const CoursePreview: React.FC = () => {
    return (
        <Wrapper>
            <div className="img-wrapper">
                <img src="https://media.istockphoto.com/id/1223138449/photo/woman-preparing-fruit-pie-dough-with-flour-and-butter.jpg?s=612x612&w=0&k=20&c=vEzZfv_-gfUh7IsBojx4-NjhhtqhOyalhSIamg1XOgY=" alt="course image" />
                <div className='overlay'>
                    <BsPlayCircleFill />
                </div>
            </div>
            <div className="content">
                <div>
                    <h3>
                        Making Pastries
                    </h3>
                    <p>By <strong> Rowan Atkinson</strong></p>
                    <p>
                        Here is a brief introductory text into the topic itself. Here the turtor gives a two 
                        line pitch to sell the course to the potential student. 
                    </p>
                </div>     
                <div className="foot-col">
                    <Button size='md' br={4}>Continue</Button>
                </div>
            </div> 
        </Wrapper>
    )
}

export default CoursePreview;