import React from "react"
import { BiBadgeCheck, BiHeart, BiHeartCircle } from "react-icons/bi"
import { BsFillHeartFill, BsFillStarFill, BsHeartFill, BsStarHalf } from "react-icons/bs"
import { TbHeart } from "react-icons/tb"
import { SkillCardItem } from "./style"

const SkillCard: React.FC<{ featured?: boolean }> = (props) => {
    return (
        <SkillCardItem featured={!!props.featured}>
            <div className="img-wrapper">
                <img src="https://media.istockphoto.com/id/157641166/photo/carpenter-measuring-a-wooden-plank.jpg?s=612x612&w=0&k=20&c=XQ2zMfWcgXb-KruXW9j00HEvxma5zBCGhjhkejeiVCw=" alt="course image" />
            </div>
            <div className="content">
                <div className="head-col">
                    <span>Carpentry</span>
                    <span>N25,000</span>
                </div>
                <h3>Baking topic</h3>
                <p>Cindy Coker</p>

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
                    <div className={"action-col" + (props.featured? ' featured': '')}>
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