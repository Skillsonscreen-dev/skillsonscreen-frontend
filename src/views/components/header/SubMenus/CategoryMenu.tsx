import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";
const categories = [
    {
        name: "Hair Styling",
        topics: [
            {
                title: "Needles",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Comestics Making",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Tailoring",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Perfume making",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Interior Design",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Fishery",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Baking",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "POP Design",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Piggery",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
    {
        name: "Paint Production",
        topics: [
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
            {
                title: "Needles and Threads",
                author: "Wunmi Bright"
            },
        ]
    },
]


const CategoryMenu: React.FC<{close: any}> = (props) => {
const [topics, setTopics] = useState<Array<{}>>([])
const showTopic = (topics: Array<{}>) => {
    setTopics(topics)
}

    return ( 
            <Wrapper>
               <div className="menu-backdrop">
                <div className="categories-menu">
                <div className="category-menu">
               { categories.map((item, index) => {
               return(      
                        <div className="category" key={index}>
                            <Link to={`/categories/${item.name}/skills`}>{item.name}</Link>
                            <div onClick={() => showTopic(item.topics)}>
                            <FaAngleRight />
                            </div>
                        </div>
               )})}
               <Link to="/categories" className="view-categories">View all categories</Link>
               </div>     
               {
                topics.length ? <div className="topic-menu">
                <h5>Popular topics</h5>
                {
                    topics.map((topic: any, index) =>  {
                        return (
                            <div className="topic" key={index}>
                                <div className="topic-img">
                                    <img src="/assets/img/topic.png" alt="" />
                                </div>
                                <div className="topic-name">
                                    <h6>{topic.title}</h6>
                                    <p>By {topic.author}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
            : <></> }
               </div>
                </div>
            </Wrapper>
     );
  };
  
  export default CategoryMenu;