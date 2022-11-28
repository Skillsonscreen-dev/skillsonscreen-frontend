import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { RecommendCard, RecommendWrapper, SectionContainer } from './styles';

const RecommendSection: React.FC = () => {
    return (
        <SectionContainer>        
            <div className="sec-header">
              <h2 className="sec-title">Recommended for you</h2>
            </div>
            <RecommendWrapper>
                <RecommendCard>
                    <div className="img-wrapper">
                        <img src="https://media.istockphoto.com/id/185255804/photo/inquisitive-little-pigs.jpg?s=612x612&w=is&k=20&c=aQjkPfCCaiDiJ0Yyd6aQBx2xiQS7Az6xJyyo8kFWiuQ=" alt="course image" />
                    </div>
                    <div className="content">
                        <div>
                            <h3>How to make rich and cheap Pig feed </h3>
                            <p>Ajao Farms</p>
                        </div>   
                        <div className="foot-col">
                            <div className='course-info'>
                                <span>Beginner</span>|
                                <span>4.5 Total Hours</span>|
                                <span>10 Lectures</span>
                            </div>
                            <div className="stats-col">
                                <span className='students'>
                                    <img src="/assets/img/users.svg" alt="" />
                                    (10,000 enrolled)
                                </span>
                                <div className="rat-sec">
                                    <span>4.5</span>
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsStarHalf />
                                    <span className='rat-vol'>(900)</span>
                                </div>
                            </div>
                            <hr />

                            <div className="action-col">
                                <div className='price-box'>
                                    <h3>N25,000</h3>
                                    <div className="fav-box">
                                        <BsFillHeartFill size={16} />
                                    </div>
                                </div>                                
                                <a href="#">Add to cart</a>
                            </div>

                            <div className='foot-info'>This course is for anyone instrested in learning Carpentry</div>
                        </div>
                    </div>
                    
                </RecommendCard>
            </RecommendWrapper>
        </SectionContainer>
    )
}

export default RecommendSection;