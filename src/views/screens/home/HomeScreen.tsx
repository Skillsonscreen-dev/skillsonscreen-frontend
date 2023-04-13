import react, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'
import { CategoryCard, CategoryCardWrapper, Container, CourseCard, CourseWrapper, ExploreSection, ExploreSectionContainer, HeroContainer, HeroWrapper, ImageContent, MainSection, ReviewCard, ReviewCardWrapper, ReviewContent, ReviewSection, Section, SectionContainer, TextContent, TrustItem, TrustItemWrapper, TrustSection, TrustSectionContainer, Wrapper } from './styles'
import Footer from '../../components/footer/Footer'
import AxiosCall from '../../../utils/axios'
import Message from '../../components/message/Message'
import Loader from '../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import { CourseInterface, setCart } from '../../../slices/cartSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { CategoryInterface } from '../../../slices/categorySlice'

const HomeScreen: React.FC = () => {
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

    return (
        <Wrapper>
            <Header />
            <Container>
                <Hero />
                <MainSection>
                    <Section>
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
                    </Section>
                    <TrustSection>
                        <TrustSectionContainer>
                            <h3>Trusted by 100+ Universities and Companies</h3>
                            <h4>We  are in partership with top universities and vocational companies across the globe</h4>

                            <TrustItemWrapper>
                                {[1,2,3,4,5].map((item, index) => {
                                    return <TrustItem key={index}>
                                    <img src={`assets/img/trust-${item}.png`} alt="" />
                                </TrustItem>
                                })}
                            </TrustItemWrapper>
                        </TrustSectionContainer>
                    </TrustSection>
                    <Section>
                        <SectionContainer>
                            <h3 className="sec-title">Kickstart your learning</h3>
                            <h4 className="sec-sub-title">Beginner courses to help begining your journey to your desired skill </h4>
                            <CourseWrapper>
                                
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
                            </CourseWrapper>
                        </SectionContainer>
                    </Section>
                    <Section>
                        <SectionContainer>
                            <h3 className="sec-title">Free Courses just for you</h3>
                            <h4 className="sec-sub-title">Learn different crafts from credible vocational experts for free</h4>
                            <CourseWrapper>
                                
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
                            </CourseWrapper>
                        </SectionContainer>
                    </Section>
                    <ExploreSection>
                        <ExploreSectionContainer>
                            <h3 className="sec-title">Explore Categories</h3>

                            <CategoryCardWrapper>
                                {categories.isLoading ? <Loader styleTwo /> : categories.items.map((item, index) => {
                                    return <CategoryCard to={"/categories/" + item.slug} key={index}>
                                    <div className="img-wrapper">
                                        <img src={item.img} alt="category image" />
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <span>{item.title}</span>
                                            <span>{item.courses} courses</span>
                                        </div>
                                        <span className="student-count">{item.students} Students</span>
                                    </div>
                                </CategoryCard>
                                })}
                            </CategoryCardWrapper>
                        </ExploreSectionContainer>
                    </ExploreSection>

                    <ReviewSection>
                        <ReviewContent>
                            <h3 className="sec-title">Reviews from our students</h3>
                            <ReviewCardWrapper>
                                {[1,2,3,4,5].map((item, index) => {
                                    return <ReviewCard key={"review-"+index}>
                                    <div className="img-wrapper">
                                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="review image" />
                                    </div>
                                    <div className="content">
                                        <h4>Tinuke Okon</h4>
                                        <span>Nigeria</span>
                                        <p>Skills on Screen have helped me learn alot within a very short period of time, and it's paying off.  Further talks</p>
                                    </div>
                                </ReviewCard>
                                })}
                            </ReviewCardWrapper>
                        </ReviewContent>
                    </ReviewSection>


                    <HeroWrapper>
                        <HeroContainer>
                            <TextContent>
                                <h2>Become a Vocational Tutor</h2>
                                <h6>We have the right tools and skills for you to teach your skills to thousands of students on our platform.</h6>

                                <div className="link-sec">
                                    <Link to="/signup?user-type=teacher">Start teaching</Link>
                                </div>
                            </TextContent>

                            <ImageContent>
                                <img src="/assets/img/become-tutor-img.png" alt="lady" />
                            </ImageContent>
                        </HeroContainer>
                    </HeroWrapper>
                </MainSection>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default HomeScreen