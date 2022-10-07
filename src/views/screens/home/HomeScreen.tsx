import react from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'
import { Container, CourseCard, CourseWrapper, MainSection, Section, SectionContainer, Wrapper } from './styles'

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
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default HomeScreen