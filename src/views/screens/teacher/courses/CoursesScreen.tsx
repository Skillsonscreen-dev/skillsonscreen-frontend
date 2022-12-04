import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import { TbSearch } from 'react-icons/tb';
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Modal from '../../../components/Teacher/course-modal';
import { useState } from 'react';
const CoursesScreen: React.FC = () => {
    const [showModal, setshowModal] = useState(false)
    const openModal = () => {
        
        setshowModal(true)
    }
    
    return ( 
        <Wrapper>
            <div className={showModal ? 'show' : 'view-modal'}>
                    <Modal close={() => {
                        setshowModal(false)
                    }} />
                </div>
            <Header />
            
                <Container>
                <TeacherDashboardHeader/>
                <div className="start-banner">
                    <div className="">
                        <span>Get started a <b>Tutor</b><br /> on Skillsonscreen</span>
                        <button>Create a Course</button>
                    </div>
                </div>
                <div className="title">
                    <h4>My Courses</h4>
                    <div className="search-wrapper">
                        <TbSearch />
                        <input type="text" placeholder='Search for a skill' />
                    </div>
                </div>
                <div className="table">
                <table>
                <thead>
                <tr>
                    <th>COURSE</th>
                    <th>DATE PUBLISHED</th>
                    <th>STATUS</th>
                    <th>STUDENTS</th>
                    <th>COMMENTS</th>
                    <th>OVERALL RATING</th>
                    <th>ACTIVITY</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className="course">
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Course" />
                            </div>
                            <div className="course-details">
                                <h3>Introduction to Baking</h3>
                                <p>Baking</p>
                            </div>
                        </div>
                    </td>
                    <td>Dec 3, 2022</td>
                    <td><button className='active'>Active</button></td>
                    <td><b>59</b></td>
                    <td><b>5</b></td>
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
                        <button onClick={openModal} className='view-course'>
                            View Course
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="course">
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Course" />
                            </div>
                            <div className="course-details">
                                <h3>Introduction to Baking</h3>
                                <p>Baking</p>
                            </div>
                        </div>
                    </td>
                    <td>Dec 3, 2022</td>
                    <td><button className='active'>Active</button></td>
                    <td><b>59</b></td>
                    <td><b>5</b></td>
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
                        <button className='view-course'>
                            View Course
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="course">
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Course" />
                            </div>
                            <div className="course-details">
                                <h3>Introduction to Baking</h3>
                                <p>Baking</p>
                            </div>
                        </div>
                    </td>
                    <td>Dec 3, 2022</td>
                    <td><button className='active'>Active</button></td>
                    <td><b>59</b></td>
                    <td><b>5</b></td>
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
                        <button className='view-course'>
                            View Course
                        </button>
                    </td>
                </tr>
                </tbody>
                </table>
                </div>
                <div className="pagination">
                    <FaAngleLeft/>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <FaAngleRight />
                </div>
                
                </Container>
               
            <Footer />
        </Wrapper>
     );
}
 
export default CoursesScreen;