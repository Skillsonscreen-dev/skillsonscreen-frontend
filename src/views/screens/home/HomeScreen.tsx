import react, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'
import { CategoryCard, CategoryCardWrapper, Container, CourseCard, CourseWrapper, ExploreSection, ExploreSectionContainer, MainSection, Section, SectionContainer, TrustItem, TrustItemWrapper, TrustSection, TrustSectionContainer, Wrapper } from './styles'
import Footer from '../../components/footer/Footer'
import AxiosCall from '../../../utils/axios'
import Message from '../../components/message/Message'
import Loader from '../../components/Loader/Loader'

const HomeScreen: React.FC = () => {
    const [isFetchingCourses, setIsFetchingCourses] = useState(false)
    const [courses, setCourses] = useState([])

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
                                {courses.map((item: any, index) => {
                                    return (
                                        <CourseCard key={index}>
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
                                                    <a href="#">Add to cart</a>
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
                                {courses.map((item: any, index) => {
                                    return (
                                        <CourseCard key={index}>
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
                                                    <a href="#">Add to cart</a>
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
                                {courses.map((item: any, index) => {
                                    return (
                                        <CourseCard key={index}>
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
                                                    <a href="#">Add to cart</a>
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
                                {[1,2,3,4,5,6,7,8].map((item, index) => {
                                    return <CategoryCard key={index}>
                                    <div className="img-wrapper">
                                        <img src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="category image" />
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <span>Hair Styling</span>
                                            <span>50 courses</span>
                                        </div>
                                        <span className="student-count">1,000 Students</span>
                                    </div>
                                </CategoryCard>
                                })}
                            </CategoryCardWrapper>
                        </ExploreSectionContainer>
                    </ExploreSection>
                </MainSection>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default HomeScreen