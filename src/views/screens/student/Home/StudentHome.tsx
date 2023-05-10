import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { BiBadgeCheck } from 'react-icons/bi';
import { Container, CourseCard, CourseWrapper, InfoCard, InfoWrapper, MainSection, SectionContainer, Wrapper } from './styles';
import Header from '../../../components/header/Header';
import Hero from '../../../components/student/hero/Hero';
import Footer from '../../../components/footer/Footer';
import ContinueSection from '../../../components/student/continueSection/ContinueSection';
import RecommendSection from '../../../components/student/recommendSection/RecommendSection';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { CategoryInterface } from '../../../../slices/categorySlice';
import { CourseInterface, setCart } from '../../../../slices/cartSlice';
import AxiosCall from '../../../../utils/axios';
import Message from '../../../components/message/Message';
import Loader from '../../../components/Loader/Loader';

const StudentHome: React.FC = () => {
    const [isFetchingCourses, setIsFetchingCourses] = useState(false)
    const [courses, setCourses] = useState<CourseInterface[]>([])
    const cartItems: CourseInterface[]  = useAppSelector(state => state.cart.state);
    const categories: CategoryInterface  = useAppSelector(state => state.category.state);
    const dispatch = useAppDispatch();

    const [cartList, setCartList] = useState<CourseInterface[]>([]);

    useEffect(()=> {
        setCartList([...cartItems])
    }, [])

    const addCourseToCart = (course: any) => {
        const oldCart = [...cartItems]
        const itemInCart = oldCart.filter(item => item.courseId == course.courseId)

        if (itemInCart.length) {
            console.log("remove old item");
            const itemIndex = oldCart.indexOf(itemInCart[0]);
            oldCart.splice(itemIndex, 1);
            dispatch(setCart(oldCart))
            setCartList([...oldCart])
        } else {
            console.log("new item");
            
            oldCart.push(course)
            dispatch(setCart(oldCart))
            setCartList([...oldCart])
        }
    }

    const fetchCourses = async () => {
        setIsFetchingCourses(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/courses/fetch"
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsFetchingCourses(false)
                setCourses(res.data)
                Message.success("Courses fetched");
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


    const HeroAction = (
        <div className="link-sec">
            <a href="#">Learn More</a>
        </div>
    )

    return (
        <Wrapper>
            <Header />
            <Container>
                <Hero 
                    title='Buy bulk courses and save more'
                    content='We offer 20% discount when you buy four or more
                    courses. Save more money while you learn more skills.'
                    image='/assets/img/student-home-hero.png'
                    action={HeroAction}
                />
                <MainSection>
                    <ContinueSection />

                    <RecommendSection />
                    
                    <SectionContainer>
                        <h3 className="sec-title">Pick from a wide variety</h3>
                        <div className="sec-row">
                            <h4 className="sec-sub-title">Select from over 300 courses with qulaified and certified tutors from various fields  </h4>
                            <a href="#">View all categories</a>
                        </div>
                        {isFetchingCourses ? <Loader styleTwo /> : <CourseWrapper>
                            {courses.map((item, index) => {
                                return (
                                    <CourseCard to={"/skills/"+item.courseId} state={{ course: item }} key={index}>
                                        <div className="img-wrapper">
                                            <img src={item.courseImg} alt="course image" />
                                            <div className="label">
                                                <BiBadgeCheck />
                                                <span>{item.level}</span>
                                            </div>
                                        </div>
                                        <div className="head-col">
                                            <span>{item.category}</span>
                                            <span>N{item.price}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description} </p>

                                        <div className="foot-col">
                                            <div className="stats-col">
                                                <div className="rat-sec">
                                                    <span>4.5</span>
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsStarHalf />
                                                </div>
                                                <span className='stutents'>(10,000 Students)</span>
                                            </div>

                                            <div className="action-col">
                                                <div className="fav-box">
                                                    <BsFillHeartFill />
                                                </div>
                                                {cartList.filter(data => data.courseId == item.courseId).length ? <Link to="/cart">Checkout</Link> : <a href="#" onClick={(e) => {e.preventDefault(); addCourseToCart(item)}}>Add to cart</a>}
                                            </div>
                                        </div>
                                    </CourseCard>
                                )
                            })}
                        </CourseWrapper>}
                    </SectionContainer>
                
                
                    <SectionContainer>
                        <h3 className="sec-title">Kickstart your learning</h3>
                        <h4 className="sec-sub-title">Beginner courses to help begining your journey to your desired skill </h4>
                        {isFetchingCourses ? <Loader styleTwo /> : <CourseWrapper>
                            {courses.map((item, index) => {
                                return (
                                    <CourseCard to={"/skills/"+item.courseId} state={{ course: item }} key={index}>
                                        <div className="img-wrapper">
                                            <img src={item.courseImg} alt="course image" />
                                            <div className="label">
                                                <BiBadgeCheck />
                                                <span>{item.level}</span>
                                            </div>
                                        </div>
                                        <div className="head-col">
                                            <span>{item.category}</span>
                                            <span>N{item.price}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description} </p>

                                        <div className="foot-col">
                                            <div className="stats-col">
                                                <div className="rat-sec">
                                                    <span>4.5</span>
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsStarHalf />
                                                </div>
                                                <span className='stutents'>(10,000 Students)</span>
                                            </div>

                                            <div className="action-col">
                                                <div className="fav-box">
                                                    <BsFillHeartFill />
                                                </div>
                                                {cartList.filter(data => data.courseId == item.courseId).length ? <Link to="/cart">Checkout</Link> : <a href="#" onClick={(e) => {e.preventDefault(); addCourseToCart(item)}}>Add to cart</a>}
                                            </div>
                                        </div>
                                    </CourseCard>
                                )
                            })}
                        </CourseWrapper>}
                    </SectionContainer>
                
                
                    <SectionContainer>
                        <h3 className="sec-title">Free Courses just for you</h3>
                        <h4 className="sec-sub-title">Learn different crafts from credible vocational experts for free</h4>
                        {isFetchingCourses ? <Loader styleTwo /> : <CourseWrapper>
                            {courses.map((item, index) => {
                                return (
                                    <CourseCard to={"/skills/"+item.courseId} state={{ course: item }} key={index}>
                                        <div className="img-wrapper">
                                            <img src={item.courseImg} alt="course image" />
                                            <div className="label">
                                                <BiBadgeCheck />
                                                <span>{item.level}</span>
                                            </div>
                                        </div>
                                        <div className="head-col">
                                            <span>{item.category}</span>
                                            <span>N{item.price}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description} </p>

                                        <div className="foot-col">
                                            <div className="stats-col">
                                                <div className="rat-sec">
                                                    <span>4.5</span>
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsStarHalf />
                                                </div>
                                                <span className='stutents'>(10,000 Students)</span>
                                            </div>

                                            <div className="action-col">
                                                <div className="fav-box">
                                                    <BsFillHeartFill />
                                                </div>
                                                {cartList.filter(data => data.courseId == item.courseId).length ? <Link to="/cart">Checkout</Link> : <a href="#" onClick={(e) => {e.preventDefault(); addCourseToCart(item)}}>Add to cart</a>}
                                            </div>
                                        </div>
                                    </CourseCard>
                                )
                            })}
                        </CourseWrapper>}
                    </SectionContainer>
                    
                    <SectionContainer>
                        <h3 className="sec-title">Learn a skill in 24hours</h3>
                        <h4 className="sec-sub-title">Basic courses you can learn in a short time</h4>
                        {isFetchingCourses ? <Loader styleTwo /> : <CourseWrapper>
                            {courses.map((item, index) => {
                                return (
                                    <CourseCard to={"/skills/"+item.courseId} state={{ course: item }} key={index}>
                                        <div className="img-wrapper">
                                            <img src={item.courseImg} alt="course image" />
                                            <div className="label">
                                                <BiBadgeCheck />
                                                <span>{item.level}</span>
                                            </div>
                                        </div>
                                        <div className="head-col">
                                            <span>{item.category}</span>
                                            <span>N{item.price}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description} </p>

                                        <div className="foot-col">
                                            <div className="stats-col">
                                                <div className="rat-sec">
                                                    <span>4.5</span>
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsFillStarFill />
                                                    <BsStarHalf />
                                                </div>
                                                <span className='stutents'>(10,000 Students)</span>
                                            </div>

                                            <div className="action-col">
                                                <div className="fav-box">
                                                    <BsFillHeartFill />
                                                </div>
                                                {cartList.filter(data => data.courseId == item.courseId).length ? <Link to="/cart">Checkout</Link> : <a href="#" onClick={(e) => {e.preventDefault(); addCourseToCart(item)}}>Add to cart</a>}
                                            </div>
                                        </div>
                                    </CourseCard>
                                )
                            })}
                        </CourseWrapper>}
                    </SectionContainer>

                    <SectionContainer>
                        <InfoWrapper>
                            <InfoCard>
                                <div className='info-content'>
                                    <h3 className="sec-title">Become a Tutor</h3>
                                    <h4 className="sec-sub-title">We have the right tools and skills for you to teach your skills to thousands of students on our platform.</h4>
                                    <div className="action-col">
                                      <Link to="/become-a-tutor">Learn more</Link>
                                    </div>
                                </div>
                                <div className="img-wrapper">
                                    <img src="/assets/img/home-tutor.png" alt="course image" />
                                </div>
                            </InfoCard>
                            <InfoCard>
                                <div className='info-content'>
                                    <h3 className="sec-title">Save More</h3>
                                    <h4 className="sec-sub-title">Make the best of your learning process. Buy more courses and save more money on checkout.</h4>
                                    <div className="action-col">
                                        <a href="#">Learn more</a>
                                    </div>
                                </div>
                                <div className="img-wrapper">
                                    <img src="/assets/img/home-save.png" alt="course image" />
                                </div>
                            </InfoCard>
                        </InfoWrapper>
                    </SectionContainer>
                    
                </MainSection>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default StudentHome;