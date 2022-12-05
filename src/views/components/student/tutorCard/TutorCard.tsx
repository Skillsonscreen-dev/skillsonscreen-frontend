import React from "react"
import { BiBadgeCheck, BiHeart, BiHeartCircle } from "react-icons/bi"
import { BsFillHeartFill, BsFillStarFill, BsHeartFill, BsStarHalf } from "react-icons/bs"
import { TbHeart } from "react-icons/tb"
import formatNumber from "../../../../utils/numberFormatter"
import { TutorCardItem } from "./style"

const TutorCard: React.FC<{ featured?: boolean }> = (props) => {
    return (
        <TutorCardItem featured={!!props.featured}>
            <div className="img-wrapper">
                <img src="https://media.istockphoto.com/id/1127816715/photo/portrait-of-cheerful-young-businessman.jpg?s=612x612&w=0&k=20&c=7rIw06LoLpUVqQpoQkc2IiQZ4Edahfkqt3elc_KOPN8=" alt="course image" />
            </div>
            <div className="content">
                <h3>Rowan Atkinson</h3>
                <p>Pig Farmer</p>

                <div className="foot-col">
                    <div className="stats-col">
                        <div className="rat-sec">
                            <span>4.5</span>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStarHalf />
                        </div>
                        <span className='students'>
                            <strong>50</strong> Courses &nbsp; 
                            | &nbsp;
                            <strong>{formatNumber(5000).toPrice()}</strong> Students
                        </span>
                    </div>
                </div>
            </div>            
        </TutorCardItem>
    )
}

export default TutorCard;