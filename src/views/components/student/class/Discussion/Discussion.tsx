import { BiComment } from "react-icons/bi";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Button from "../../../ui/button/Button";
import Select, { Option } from "../../../ui/select/Select";
import { FilterContent, Comment, Wrapper } from "./styles";

const Discussion: React.FC = (props) => {
    return (
        <Wrapper>
            <h4>Discussion</h4>
            <div className="discussion">
                <div className="search">
                    <div className="search-input">
                        <input type="text" placeholder="Search all questions" />
                        <Button color="black" br={4}>Search</Button>
                    </div>
                    <Button br={4} size="md">Ask a question</Button>
                </div>
                <FilterContent>
                    <div className="filter">
                        <Select title="Filter" br={4}>
                            <Option value="">Most recent</Option>
                        </Select>
                    </div>
                    <div className="sort">
                        <div className="sort-buttons">
                            <span className="sort-item">Sort By:</span>
                            <Button className="sort-item" variant="outline" color="dark" br={4}>Current lecture</Button>
                            <Button className="sort-item" variant="outline" color="light" br={4}>All lectures</Button>
                        </div>
                        <div className="sort-dropdown">
                            <Select title="Sort By" br={4}>
                                <Option value="">Current lecture</Option>
                                <Option value="">All lectures</Option>
                            </Select>
                        </div>
                    </div>
                </FilterContent>

                <div className="comments">
                    {
                        [1,2,4,5,6,7].map(num => (
                            <Comment key={num}>
                                <div className="chapter">
                                    <span>Chapter 5</span>
                                </div>                       
                                <div className="body">
                                    <h6>What happens if the dough don’t swell?</h6>
                                    <p>I tried adding the yeast to the flour as described in the lecture but mine didnt swell as expected. how do I go about it? </p>
                                    <div className="footer">
                                        <div className="details">
                                            <div className="commenter">
                                                <img src="https://media.istockphoto.com/id/1127816715/photo/portrait-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=7rIw06LoLpUVqQpoQkc2IiQZ4Edahfkqt3elc_KOPN8=" alt="writer" />
                                                <span>Michael Scott</span>
                                            </div> |
                                            <span>last replied 25 days ago</span>
                                        </div>
                                        <div className="interactions">
                                            <span><FaThumbsUp /> 22 <span className="caption"> Likes</span></span>
                                            <span><FaThumbsDown /> 4 <span className="caption"> Dislikes</span></span>
                                            <span><BiComment /> 10 <span className="caption"> Replies</span></span>
                                        </div>
                                    </div>
                                </div>                        
                            </Comment>
                        ))
                    }
                    
                </div>
            </div>
        </Wrapper>
    )
}

export default Discussion;