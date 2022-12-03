import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import CategoryCard from "../../../components/student/categoryCard/CategoryCard";
import Button from "../../../components/ui/button/Button";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import Select, { Option } from "../../../components/ui/select/Select";
import { CategoryContent, Container, FilterContent, Wrapper } from "./styles";

const Category: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Jumbotron title="Explore Categories" image="/assets/img/category-jumbotron.png" />

            <Container>
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
            </Container>
            <Container>
                <CategoryContent>
                    {

                        [1,2,3,4,5,6,7,8,9,10].map((num: number) => (
                            <CategoryCard
                                key={num}
                                image={"https://media.istockphoto.com/id/1186345105/photo/female-hairdresser-is-cutting-woman-hair-close-up.jpg?s=612x612&w=0&k=20&c=QnMkLcnuLXt31kGtk9oEVxoKp3GA6VMzmtmFOo0wc5M="} 
                                title={"Hair Styling"}
                                courses={50}
                                students={10000}
                            />
                        ))   
                    }
                    
                </CategoryContent>
            </Container>         
            <Footer />
        </Wrapper>
    )
}

export default Category;