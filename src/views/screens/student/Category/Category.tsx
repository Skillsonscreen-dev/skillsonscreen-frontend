import { useAppSelector } from "../../../../hooks/hooks";
import { CategoryInterface } from "../../../../slices/categorySlice";
import Loader from "../../../components/Loader/Loader";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import CategoryCard from "../../../components/student/categoryCard/CategoryCard";
import Button from "../../../components/ui/button/Button";
import Jumbotron from "../../../components/ui/jumbotron/Jumbotron";
import Select, { Option } from "../../../components/ui/select/Select";
import { CategoryContent, Container, FilterContent, Wrapper } from "./styles";

const Category: React.FC = () => {
    const categories: CategoryInterface  = useAppSelector(state => state.category.state);
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
                        categories.isLoading ? <Loader center styleTwo /> : categories.items.map((item, index) => (
                            <CategoryCard
                                key={index}
                                image={item.img}
                                slug={item.slug}
                                title={item.title}
                                courses={item.courses}
                                students={item.students}
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