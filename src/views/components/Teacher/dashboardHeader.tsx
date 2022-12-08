
import { Wrapper, Navigation } from './styles';
import { GoBook } from 'react-icons/go'
import { FaUserGraduate } from 'react-icons/fa'
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { GiHistogram, GiReceiveMoney } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import { TbHelp } from 'react-icons/tb';
const TeacherDashboardHeader: React.FC = () => {
    return ( 
        <Wrapper>
            <Navigation>
                <ul className="">
                    <li>
                        <Link className='link' to="/teacher/">
                            <span><GoBook /></span>
                        <p>Courses</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/teacher/students">
                        <span><FaUserGraduate /></span>
                        <p>Students</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/teacher/communication">
                            <span><HiOutlineSpeakerphone/> </span>
                            <p>Communication</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/teacher/performance">
                            <span><GiHistogram /> </span>
                            <p>Performance</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/teacher/finance">
                            <span><GiReceiveMoney /></span>
                            <p>Finance</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to="/teacher/help-and-support">
                            <span><TbHelp /></span>
                            <p>Help and Support</p>
                        </Link>
                    </li>
                </ul>
            </Navigation>
        </Wrapper>
     );
}
 
export default TeacherDashboardHeader;