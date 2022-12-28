import { BiMessageAdd, BiPlayCircle } from 'react-icons/bi';
import { BsFillStarFill, BsPeople } from 'react-icons/bs';
import Button from '../../../ui/button/Button';
import { Content, Wrapper } from './styles';

const CourseInstructor: React.FC = () => {
    return (
        <Wrapper>
            <h3>Instructor</h3>
            <Content>
                <div className="header">
                    <div className="image">
                        <img src="https://media.istockphoto.com/id/1127816715/photo/portrait-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=7rIw06LoLpUVqQpoQkc2IiQZ4Edahfkqt3elc_KOPN8=" alt="instructor image" />
                    </div>
                    <div className="title">
                        <div className="title-lead">
                            <h3>Rowan Atkinson</h3>
                            <span>Baker</span>
                        </div>
                        <div className="title-foot">
                            <span><BsFillStarFill color='#FDB813' />4.8  <div className="hide">Instructor Rating</div></span>
                            <span><BiMessageAdd /> 5,000  <div className="hide">Rating</div></span>
                            <span><BsPeople /> 21,000  <div className="hide">students</div></span>
                            <span><BiPlayCircle /> 50  <div className="hide">Courses</div></span>
                        </div>
                    </div>
                </div>
                <div className="body">
                    Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.
                    I've spent a long time watching others learn, and teach, to refine how I work with you to be efficient, useful and, most importantly, memorable. I want you to carry what I've shown you into a bright future.
                </div>
                <div className="footer">
                    <Button br={4} size={'md'}>
                        View instructor’s profile
                    </Button>
                    <div className="social">
                        <img src="/assets/icons/Instagram.svg" />
                        <img src="/assets/icons/Youtube.svg" />
                        <img src="/assets/icons/Linkedin.svg" />
                        <img src="/assets/icons/Facebook.svg" />
                        <img src="/assets/icons/Google.svg" />
                        <img src="/assets/icons/Twitter.svg" />
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default CourseInstructor;