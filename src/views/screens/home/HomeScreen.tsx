import react from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'
import { CategoryCard, CategoryCardWrapper, Container, CourseCard, CourseWrapper, ExploreSection, ExploreSectionContainer, MainSection, Section, SectionContainer, TrustItem, TrustItemWrapper, TrustSection, TrustSectionContainer, Wrapper } from './styles'
import Footer from '../../components/footer/Footer'

const HomeScreen: React.FC = () => {

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
                            <CourseWrapper>
                                {[1,2,3,4].map((item, index) => {
                                    return (
                                        <CourseCard key={index}>
                                            <div className="img-wrapper">
                                                <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" alt="course image" />
                                                <div className="label">
                                                    <BiBadgeCheck />
                                                    <span>Beginner</span>
                                                </div>
                                            </div>
                                            <div className="head-col">
                                                <span>Carpentry</span>
                                                <span>N25,000</span>
                                            </div>
                                            <h3>CPT 101: Introduction to Carpenter</h3>
                                            <p>Kola Adisa, The Kafinta </p>

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
                            </CourseWrapper>
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
                                {[1,2,3,4].map((item, index) => {
                                    return (
                                        <CourseCard key={index}>
                                            <div className="img-wrapper">
                                                <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" alt="course image" />
                                                <div className="label">
                                                    <BiBadgeCheck />
                                                    <span>Beginner</span>
                                                </div>
                                            </div>
                                            <div className="head-col">
                                                <span>Carpentry</span>
                                                <span>N25,000</span>
                                            </div>
                                            <h3>CPT 101: Introduction to Carpenter</h3>
                                            <p>Kola Adisa, The Kafinta </p>

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
                                                    <a href="#">Add to cart</a>
                                                </div>
                                            </div>
                                        </CourseCard>
                                    )
                                })}
                            </CourseWrapper>
                        </SectionContainer>
                    </Section>
                    <Section>
                        <SectionContainer>
                            <h3 className="sec-title">Free Courses just for you</h3>
                            <h4 className="sec-sub-title">Learn different crafts from credible vocational experts for free</h4>
                            <CourseWrapper>
                                {[1,2,3,4].map((item, index) => {
                                    return (
                                        <CourseCard key={index}>
                                            <div className="img-wrapper">
                                                <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" alt="course image" />
                                                <div className="label">
                                                    <BiBadgeCheck />
                                                    <span>Beginner</span>
                                                </div>
                                            </div>
                                            <div className="head-col">
                                                <span>Carpentry</span>
                                                <span>N25,000</span>
                                            </div>
                                            <h3>CPT 101: Introduction to Carpenter</h3>
                                            <p>Kola Adisa, The Kafinta </p>

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
                                                    <a href="#">Add to cart</a>
                                                </div>
                                            </div>
                                        </CourseCard>
                                    )
                                })}
                            </CourseWrapper>
                        </SectionContainer>
                    </Section>
                    <ExploreSection>
                        <ExploreSectionContainer>
                            <h3 className="sec-title">Explore Categories</h3>

                            <CategoryCardWrapper>
                                {[1,2,3,4,5,6].map((item, index) => {
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