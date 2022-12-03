import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import CategoryCard from "../../../components/student/categoryCard/CategoryCard";
import SkillCard from "../../../components/student/skillCard/SkillCard";
import TutorCard from "../../../components/student/tutorCard/TutorCard";
import Button from "../../../components/ui/button/Button";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import Select, { Option } from "../../../components/ui/select/Select";
import { SkillsContent, Container, Wrapper, PopularContent, FilterContent } from "./styles";

const Skills: React.FC = () => {
    const { category } = useParams();
    const [popularTopics, setPopularTopics] = useState<string[]>([]);
    useEffect(() => {
        setPopularTopics([
            'cakes', 'pie', 'baking equipment', 'kitchen safety', 'vagan pastries'
        ]);
    });
    return (
        <Wrapper>
            <Header />
            <Jumbotron title={category || 'Skills'} />

            <Container>
                <h4>Popular topics</h4>
                <PopularContent>
                    <div className="topics">
                        {
                            popularTopics.map((topic) => (
                                <Button variant="outline" color="primary" size="md" br={4}>
                                    {topic.toUpperCase()}
                                </Button>
                            ))
                        }
                    </div>
                </PopularContent>
                <br /><br />
                <FilterContent>
                    <div className="filter">
                        <Select title="Filter">
                            <Option value="">Below 5hrs</Option>
                        </Select>
                    </div>
                    <div className="sort">
                        <div className="sort-buttons">
                            <span className="sort-item">Sort By:</span>
                            <Button className="sort-item" variant="outline" color="light">Highest Rated</Button>
                            <Button className="sort-item" variant="outline" color="light">Most Popular</Button>
                            <Button className="sort-item" variant="filled" color="dark">Newest</Button>
                        </div>
                        <div className="sort-dropdown">
                            <Select title="Sort By">
                                <Option value="">Highest Rated</Option>
                                <Option value="">Most Popular</Option>
                                <Option value="">Newest</Option>
                            </Select>
                        </div>
                    </div>
                </FilterContent>
                <SkillsContent>
                    {

                        [1,2,3,4,5,6,7,8,9,10].map((num: number) => (
                            <SkillCard key={num} />
                        ))   
                    }
                    
                </SkillsContent>

                <h4>Featured courses</h4>
                <SkillsContent nowrap>
                    {
                        [1,2].map((num: number) => (
                            <SkillCard key={num} featured />
                        ))   
                    }
                    
                </SkillsContent>

                <h4>Top Tutors</h4>
                <SkillsContent nowrap>
                    {
                        [1,2,3,4,5].map((num: number) => (
                            <TutorCard key={num} featured />
                        ))   
                    }
                    
                </SkillsContent>
            </Container>         
            <Footer />
        </Wrapper>
    )
}

export default Skills;