import React from "react"
import { BiBadgeCheck, BiHeart, BiHeartCircle } from "react-icons/bi"
import { BsFillHeartFill, BsFillStarFill, BsHeartFill, BsStarHalf } from "react-icons/bs"
import { TbHeart } from "react-icons/tb"
import { SkillCardItem } from "./style"

const SkillCard: React.FC<{ featured?: boolean }> = (props) => {
    return (
        <SkillCardItem>
            <div className="img-wrapper">
                <img src="https://media.istockphoto.com/id/1186345105/photo/female-hairdresser-is-cutting-woman-hair-close-up.jpg?s=612x612&w=0&k=20&c=QnMkLcnuLXt31kGtk9oEVxoKp3GA6VMzmtmFOo0wc5M=" alt="course image" />
            </div>
            <div className="content">
                <div className="head-col">
                    <span>Carpentry</span>
                    <span>N25,000</span>
                </div>
                <h3>CPT 101: Introduction to Carpentery</h3>
                <p>Kola Adisa, The Kafinta </p>

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
                    <div className={"action-col" + props.featured && ' featured'}>
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