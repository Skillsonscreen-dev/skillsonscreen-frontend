import React from "react"
import { BiBadgeCheck, BiHeart, BiHeartCircle } from "react-icons/bi"
import { BsFillHeartFill, BsFillStarFill, BsHeartFill, BsStarHalf } from "react-icons/bs"
import { TbHeart } from "react-icons/tb"
import { Link } from "react-router-dom"
import { SkillCardItem } from "./style"
import { CourseInterface } from "../../../../slices/cartSlice"

const SkillCard: React.FC<{ featured?: boolean, course?: CourseInterface }> = ({course = null, featured = false}) => {
    return (
        <SkillCardItem featured={featured}>
            <div className="img-wrapper">
                <img src={course?.courseImg} alt="course image" />
            </div>
            <div className="content">
                <div className="head-col">
                    <span>{course?.category}</span>
                    <span>N{course?.price}</span>
                </div>
                
                <div>
                    <h3>
                        <Link to={"/skills/" + 'baking topic'}>
                            {course?.title}
                        </Link>                    
                    </h3>
                    <p>Cindy Coker</p>
                </div>
                

                <div className="foot-col">
                    <div className="stats-col">
                        <div className="rat-sec">
                            <span>4.5</span>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStarHalf />
                            <span className='students'>(10,000 Students)</span>
                        </div>
                    </div>
                    <div className={"action-col" + (featured? ' featured': '')}>
                        <div className="fav-box">
                            <img src="/assets/icons/wishlist.svg" alt="" />
                        </div>
                        <a href="#">Add to cart</a>
                    </div>
                </div>
            </div>            
        </SkillCardItem>
    )
}

export default SkillCard;