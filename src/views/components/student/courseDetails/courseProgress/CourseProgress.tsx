import { BiInfoCircle, BiPlayCircle } from 'react-icons/bi';
import InfoPill from '../../../ui/infoPill/InfoPill';
import { Wrapper } from './styles';

const CourseProgress: React.FC = () => {
    return (
        <Wrapper>
            <h3>Your Progress</h3>
            <div className="content">
                <div className='body'>
                    <InfoPill color="secondary" size="md" br={8} className={"progress-pill"}>
                        <div className="progress-content">
                            <BiPlayCircle size={30} />
                            <span><strong>5 of 25</strong>  classes completed</span>|
                            <span><strong>6h 30min</strong>  to completion</span>
                        </div>  
                    </InfoPill>
                    <div className='foot'><BiInfoCircle size={20} /> Finish course to get your certificate</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CourseProgress;