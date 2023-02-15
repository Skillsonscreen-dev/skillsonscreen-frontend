import THeader from '../../../components/Teacher/TeacherHeader'
import Footer from '../../../components/footer/Footer';
import { Container, Wrapper } from './styles';
import TeacherDashboardHeader from '../../../components/Teacher/dashboardHeader';
import { TbSearch } from 'react-icons/tb';
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Modal from '../../../components/Teacher/course-modal';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosCall from '../../../../utils/axios';
import Message from '../../../components/message/Message';
import Loader from '../../../components/Loader/Loader';
import dayjs from 'dayjs'

const CoursesScreen: React.FC = () => {
    const [showModal, setshowModal] = useState(false)
    const [courses, setCourses] = useState([])
    const openModal = () => {
        
        setshowModal(true)
    }
    const [isFetchingCourses, setIsFetchingCourses] = useState(false)

    const fetchCourses = async () => {
        setIsFetchingCourses(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/teacher/courses/fetch"
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsFetchingCourses(false)
                setCourses(res.data)
                Message.success("Price added to course successfuly");
            } else {
                setIsFetchingCourses(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingCourses(false)
            Message.error(err?.response.data.message)
        }
    }

    useEffect(() => {
        fetchCourses();
    }, [])
    
    return ( 
        <Wrapper>
            <div className={showModal ? 'show' : 'view-modal'}>
                    <Modal close={() => {
                        setshowModal(false)
                    }} />
                </div>
            <THeader />

                <Container>
                    <TeacherDashboardHeader/>
                    <div className="start-banner">
                        <div className="">
                            <span>Get started a <b>Tutor</b><br /> on Skillsonscreen</span>
                            <Link to="/teacher/create-a-course">Create a Course</Link>
                        </div>
                    </div>
                    <div className="title">
                        <h4>My Courses</h4>
                        <div className="search-wrapper">
                            <TbSearch />
                            <input type="text" placeholder='Search for a skill' />
                        </div>
                    </div>
                    {isFetchingCourses ? <Loader styleTwo /> : <div className="table">
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
                                {courses.map((item: any, index) => {
                                return <tr>
                                        <td>
                                            <div className="course">
                                                <div className="img-wrapper">
                                                <img src={item.courseImg} className='course-img' alt="Course" />
                                                </div>
                                                <div className="course-details">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.category}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{dayjs(item.createdAt).format("MMM DD,  YYYY")}</td>
                                        <td><button className='active'>{item.status}</button></td>
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
                            })}
                            </tbody>
                        </table>
                    </div>}
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