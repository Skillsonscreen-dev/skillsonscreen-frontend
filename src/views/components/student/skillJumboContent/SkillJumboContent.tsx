import React from "react"
import { BiBadgeCheck, BiChevronRight, BiHeart, BiHeartCircle } from "react-icons/bi"
import { BsFillHeartFill, BsFillStarFill, BsHeartFill, BsStarHalf } from "react-icons/bs"
import { TbHeart } from "react-icons/tb"
import { Link } from "react-router-dom"
import formatNumber from "../../../../utils/numberFormatter"
import { Breadcrumb, SubText, SubTitle, Title, Wrapper } from "./style"

const SkillJumboContent: React.FC = (props) => {
    return (
        <Wrapper>
            <Breadcrumb>
                <span><Link to={"/categories"}>Explore</Link></span><BiChevronRight />
                <span><Link to={"/categories/Baking/skills"}>Baking</Link></span><BiChevronRight />
                <span className="current">Making Pastries</span>
            </Breadcrumb>
            <Title>
                Making Pastries
            </Title>
            <SubTitle>
                Here is a brief introductory text into the topic itself. Here the turtor gives a two 
                line pitch to sell the course to the potential student. 
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