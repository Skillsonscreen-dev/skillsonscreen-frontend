import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { RatingCard, Ratings, Summary, Wrapper } from './styles';

const CourseRating: React.FC = () => {
    return (
        <Wrapper>
            <Summary>
                <div className="rat-sec">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsStarHalf />
                    <span className='rat-txt'>4.5 course rating</span>
                </div>
                <img src="/assets/icons/grey-dot.svg" />
                <span >10k ratings</span>
            </Summary>
            
            <Ratings>
                {
                    [1,2,3,4,5,6,7,8,9].map(n => (
                        <RatingCard key={n}>
                            <div className="header">
                                <div className="image">
                                    <img src="https://media.istockphoto.com/id/1407084419/photo/portrait-of-happy-mature-women.jpg?s=612x612&w=0&k=20&c=TVjNbHyrSVJ7XcTZN6-lHmItHIF0vVzcIvOYyXAPp8k=" alt="" />
                                </div>
                                <div className="title">
                                    <h6>Tinuke Okon</h6>
                                    <div className="rat-sec">
                                        <span className='rat-txt'>4.2</span>
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsStarHalf />
                                    </div>
                                    <span className='dash'></span>
                                </div>
                            </div>
                            <div className="body">
                                An excellent introduction to what Baking is and what it consists of — kind of a good starter before going deeper into the Baking world.
                            </div>
                            <div className="footer">
                                <span>Was this helpful?</span>
                                <img src="/assets/icons/thumbs-up.svg" />
                                <img src="/assets/icons/thumbs-down.svg" />
                            </div>
                        </RatingCard>
                    ))
                }
            </Ratings>
        </Wrapper>
    )
}

export default CourseRating;