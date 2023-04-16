import { BiMessageAdd, BiPlayCircle } from 'react-icons/bi';
import { BsFillStarFill, BsPeople } from 'react-icons/bs';
import Button from '../../../ui/button/Button';
import { Content, Wrapper } from './styles';
import Loader from '../../../Loader/Loader';

export interface TutorProfileInterface {
    userId:     string;
    email:      string;
    firstName:  string;
    lastName:   string;
    phone:      string;
    profileImg: string;
    userType:   string;
    isVerified: boolean;
    teacher:    Teacher;
}

export interface Teacher {
    rating:        number;
    totalRating:   number;
    numRates:      number;
    _id:           string;
    dateOfBirth:   string;
    skill:         string;
    userId:        string;
    about:         string;
    gender:        string;
    location:      string;
    headline:      string;
    degree:        string;
    occupation:    string;
    institution:   string;
    experience:    string;
    bank:          string;
    accountNumber: string;
    accountName:   string;
    createdAt:     Date;
    updatedAt:     Date;
    __v:           number;
}


const CourseInstructor: React.FC<{isLoading: boolean, tutor?: TutorProfileInterface}> = ({isLoading= true, tutor}) => {
    return (
        <Wrapper>
            <h3>Instructor</h3>
            {isLoading ? <Loader styleTwo center /> : <Content>
                <div className="header">
                    <div className="image">
                        <img src={tutor?.profileImg} alt="instructor image" />
                    </div>
                    <div className="title">
                        <div className="title-lead">
                            <h3 style={{textTransform: 'capitalize'}}>{tutor?.firstName} {tutor?.lastName}</h3>
                            <span>{tutor?.teacher.skill}</span>
                        </div>
                        <div className="title-foot">
                            <span><BsFillStarFill color='#FDB813' />4.8  <div className="hide">Instructor Rating</div></span>
                            <span><BiMessageAdd /> 5,000  <div className="hide">Rating</div></span>
                            <span><BsPeople /> 21,000  <div className="hide">students</div></span>
                            <span><BiPlayCircle /> 50  <div className="hide">Courses</div></span>
                        </div>
                    </div>
                </div>
                <div className="body">{tutor?.teacher.about}</div>
                <div className="footer">
                    <Button br={4} size={'md'}>
                        View instructor's profile
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
            </Content>}
        </Wrapper>
    )
}

export default CourseInstructor;