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
import { CourseInterface } from "../../../../slices/cartSlice";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";
import Loader from "../../../components/Loader/Loader";

const Skills: React.FC = () => {
    const [isFetchingCourses, setIsFetchingCourses] = useState(false)
    const [courses, setCourses] = useState<CourseInterface[]>([])
    const [isFetchingFeaturedCourses, setIsFetchingFeaturedCourses] = useState(false)
    const [feturedCourses, setFearuredCourses] = useState<CourseInterface[]>([])
    const [categoryName, setCategoryName] = useState<string>("")
    const { category } = useParams();

    const [popularTopics, setPopularTopics] = useState<string[]>([]);



    const fetchCourses = async () => {
        setIsFetchingCourses(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/course/category/fetch/slug/"+category
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsFetchingCourses(false)
                setCourses(res.data.courses)
                setCategoryName(res.data.category)
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


    const fetchFeaturedCourses = async () => {
        setIsFetchingFeaturedCourses(true)
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/courses/fetch"
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsFetchingFeaturedCourses(false)
                setFearuredCourses(res.data)
                Message.success("Courses fetched");
            } else {
                setIsFetchingFeaturedCourses(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingFeaturedCourses(false)
            Message.error(err?.response.data.message)
        }
    }

    useEffect(() => {
        fetchCourses()
        fetchFeaturedCourses()
        setPopularTopics([
            'cakes', 'pie', 'baking equipment', 'kitchen safety', 'vagan pastries'
        ]);
    }, []);

    
    return (
        <Wrapper>
            <Header />
            <Jumbotron title={categoryName || 'Skills'} />

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

                        isFetchingCourses ? <Loader center styleTwo /> : courses.map((item, idx) => (
                            <SkillCard course={item} key={idx} />
                        ))   
                    }
                    
                </SkillsContent>

                <h4>Featured courses</h4>
                <SkillsContent nowrap>
                    {
                        isFetchingFeaturedCourses ? <Loader center styleTwo /> : feturedCourses.map((item, idx) => (
                            <SkillCard key={idx} course={item} featured />
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