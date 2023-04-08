import React from "react"
import { BiBadgeCheck, BiChevronRight, BiHeart, BiHeartCircle } from "react-icons/bi"
import { BsFillHeartFill, BsFillStarFill, BsHeartFill, BsStarHalf } from "react-icons/bs"
import { TbHeart } from "react-icons/tb"
import { Link } from "react-router-dom"
import formatNumber from "../../../../utils/numberFormatter"
import { Breadcrumb, SubText, SubTitle, Title, Wrapper } from "./style"
import { CourseInterface } from "../../../../slices/cartSlice"

interface SkillJumboContentInterface {
    course: CourseInterface
}

const SkillJumboContent: React.FC<SkillJumboContentInterface> = ({course}) => {
    return (
        <Wrapper>
            <Breadcrumb>
                <span><Link to={"/categories"}>Explore</Link></span><BiChevronRight />
                <span><Link to={"/categories/Baking/skills"}>{course.category}</Link></span><BiChevronRight />
                <span className="current">{course.title}</span>
            </Breadcrumb>
            <Title>
                {course.title}
            </Title>
            <SubTitle>
                {course.about}
            </SubTitle>
            <SubText>
                <span>4.5</span>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsStarHalf />
                <span className='ratings'>(1,000 ratings)</span>
            </SubText>        
        </Wrapper>
    )
}

export default SkillJumboContent;