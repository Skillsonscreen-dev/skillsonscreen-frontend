import THeader from '../../../components/Teacher/TeacherHeader'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import StudentModal from '../../../components/Teacher/student-modal';
import { useState } from 'react';
const StudentScreen: React.FC = () => {
    const [showModal, setshowModal] = useState(false)
    const openModal = () => {
        
        setshowModal(true)
    }
    return ( 
        <Wrapper>
            <THeader />
            
                <Container>
                <TeacherDashboardHeader/>
                <div className="students">
                    <div className="title">
                    <h4>Students</h4>
                    <p>Learn more about your students</p>
                    </div>
                    <div className="table">
                <table>
                <thead>
                <tr>
                    <th>STUDENT</th>
                    <th>STATUS</th>
                    <th>COURSE</th>
                    <th>DATE ENROLLED</th>
                    <th>PROGRESS</th>
                    <th>RATING</th>
                    <th>ACTIVITY</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className="student">
                        <input type="checkbox" name="" id="" />
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Student" />
                            </div>
                            <div className="student-details">
                                <h5>Damilola Akinde</h5>
                                <a href="mailto:">hello@gmail.com</a>
                            </div>
                        </div>
                    </td>
                    <td><button className='enrolled'>Enrolled</button></td>
                    <td><p className='course'>Baking for beginners </p></td>
                    <td><p className="date">Dec 3, 2022</p></td>
                    <td>
                        <div className="progress">                      
                        <div className="progress-bar">
                            <div className="bar" style={{width: '25%'}}></div>
                        </div>
                        <label>25%</label>
                        </div>
                    </td>
                    <td>
                    
                    <div className="rat-sec">
                    <span>4.5</span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                    </div>
                    </td>
                    <td>
                        <button className='view-detail' onClick={openModal}>
                            View Details
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="student">
                            <input type="checkbox" name="" id="" />
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Student" />
                            </div>
                            <div className="student-details">
                                <h5>Damilola Akinde</h5>
                                <a href="mailto:">hello@gmail.com</a>
                            </div>
                        </div>
                    </td>
                    <td><button className='enrolled'>Enrolled</button></td>
                    <td><p className='course'>Baking for beginners</p></td>
                    <td><p className="date">Dec 3, 2022</p></td>
                    <td>
                        <div className="progress">                      
                        <div className="progress-bar">
                            <div className="bar" style={{width: '25%'}}></div>
                        </div>
                        <label>25%</label>
                        </div>
                    </td>
                    <td>
                    
                    <div className="rat-sec">
                    <span>4.5</span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                    </div>
                    </td>
                    <td>
                        <button className='view-detail'>
                            View Details
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="student">
                        <input type="checkbox" name="" id="" />
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Student" />
                            </div>
                            <div className="student-details">
                                <h5>Damilola Akinde</h5>
                                <a href="mailto:">hello@gmail.com</a>
                            </div>
                        </div>
                    </td>
                    <td><button className='enrolled'>Enrolled</button></td>
                    <td><p className='course'>Baking for beginners</p></td>
                    <td><p className="date">Dec 3, 2022</p></td>
                    <td>
                        <div className="progress">                      
                        <div className="progress-bar">
                            <div className="bar" style={{width: '25%'}}></div>
                        </div>
                        <label>25%</label>
                        </div>
                    </td>
                    <td>
                    
                    <div className="rat-sec">
                    <span>4.5</span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                    </div>
                    </td>
                    <td>
                        <button className='view-detail'>
                            View Details
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="student">
                        <input type="checkbox" name="" id="" />
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Student" />
                            </div>
                            <div className="student-details">
                                <h5>Damilola Akinde</h5>
                                <a href="mailto:">hello@gmail.com</a>
                            </div>
                        </div>
                    </td>
                    <td><button className='enrolled'>Enrolled</button></td>
                    <td><p className='course'>Baking for beginners</p></td>
                    <td><p className="date">Dec 3, 2022</p></td>
                    <td>
                        <div className="progress">                      
                        <div className="progress-bar">
                            <div className="bar" style={{width: '25%'}}></div>
                        </div>
                        <label>25%</label>
                        </div>
                    </td>
                    <td>
                    
                    <div className="rat-sec">
                    <span>4.5</span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStarHalf />
                    </div>
                    </td>
                    <td>
                        <button className='view-detail'>
                            View Details
                        </button>
                    </td>
                </tr>
                </tbody>
                </table>
                <div className="pagination">
                    <FaAngleLeft/>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <FaAngleRight />
                </div>
                </div>
                </div>
                </Container>
                <div className={showModal ? 'show' : 'view-modal'}>
                    <StudentModal close={() => {
                        setshowModal(false)
                    }} />
                </div>
            <Footer />
        </Wrapper>
     );
}
 
export default StudentScreen;