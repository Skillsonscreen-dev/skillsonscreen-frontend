import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { BiBadgeCheck } from 'react-icons/bi';
import { Container, CourseCard, CourseWrapper, InfoCard, InfoWrapper, MainSection, SectionContainer, Wrapper } from './styles';
import Header from '../../../components/header/Header';
import Hero from '../../../components/student/hero/Hero';
import Footer from '../../../components/footer/Footer';
import ContinueSection from '../../../components/student/continueSection/ContinueSection';

const StudentHome: React.FC = () => {
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
                    
                    <SectionContainer>
                        <h3 className="sec-title">Learn a skill in 24hours</h3>
                        <h4 className="sec-sub-title">Basic courses you can learn in a short time</h4>
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

                    <SectionContainer>
                        <InfoWrapper>
                            <InfoCard>
                                <div className='info-content'>
                                    <h3 className="sec-title">Become a Tutor</h3>
                                    <h4 className="sec-sub-title">We have the right tools and skills for you to teach your skills to thousands of students on our platform.</h4>
                                    <div className="action-col">
                                        <a href="#">Learn more</a>
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