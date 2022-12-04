import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import CategoryCard from "../../../components/student/categoryCard/CategoryCard";
import CourseAboutSection from "../../../components/student/courseDetials/about/CourseInfo";
import CourseFor from "../../../components/student/courseDetials/courseFor/CourseFor";
import CourseInfo from "../../../components/student/courseDetials/courseInfo/CourseInfo";
import CourseWhat from "../../../components/student/courseDetials/courseWhat/CourseWhat";
import Requirements from "../../../components/student/courseDetials/requirements/Requirements";
import SkillJumboContent from "../../../components/student/skillJumboContent/SkillJumboContent";
import Button from "../../../components/ui/button/Button";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import Select, { Option } from "../../../components/ui/select/Select";
import { Banner, Container, Grid, Mb, Wrapper } from "./styles";

const Skill: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Jumbotron
                content={ <SkillJumboContent /> }
                image="https://media.istockphoto.com/id/1130530775/photo/chocolate-brownie-preparation-on-kitchen-table.jpg?s=612x612&w=0&k=20&c=naVVUlyh2JFxBR5_4UQt9du7GJtu2bePAIGQZzoieaU="
            />

            <Banner>
                <div className="banner-content">
                    <div className="action">
                        <Button color="white" size="md" br={4} variant="filled">Buy course now</Button>
                        <Button color="white" size="md" br={4} variant="outline">Add to cart</Button>
                        <div className="fav-box">
                            <img src="/assets/icons/wishlist-white.svg" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <span>Students: <strong>2,345 enrolled</strong></span>
                        <span>Instructor: <strong>Rowan Atkinson</strong></span>
                    </div>
                </div>
            </Banner>
            
            <Container>
                <Mb><CourseInfo /></Mb>
                <Mb><CourseAboutSection /></Mb>
                <Mb><CourseFor /></Mb>  
                <Mb>
                    <Grid>
                        <CourseWhat />
                        <Requirements />
                    </Grid>                    
                </Mb>
            </Container>

            <Footer />
        </Wrapper>
    )
}

export default Skill;