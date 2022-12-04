
import { BsFillStarFill, BsFlag, BsStarHalf } from 'react-icons/bs';
import { Wrapper, StudentModalContainer } from './styles';
import { MdOutlineCancel } from 'react-icons/md'
const StudentModal: React.FC<{close: any}> = (props) => {
    return ( 
        <Wrapper>
            <StudentModalContainer onClick={() => props.close()}>
            <div className="close-btn" onClick={() => props.close()}>
                    <MdOutlineCancel />
                </div>
                <div className="">
                
                    <div className="modal">
                        <div className="course-title">
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='student-img' alt="Course" />
                            </div>
                            <span>
                                <h5>Damilola Akinde</h5>
                                <p>Baking</p>
                            </span>
                        </div>
                        <div className="course-content">
                            <div className="intro">
                                <strong>BIO</strong>
                                <p>
                                Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.
                                </p>
                            </div>
                            <div className="more-details">
                                <div>
                                    <strong>COURSE</strong>
                                    <p>Baking for beginners</p>
                                </div>
                                <div>
                                    <strong>DATE ENROLLED</strong>
                                    <p>December 3, 2022</p>
                                </div>
                                <div>
                                    <strong>PROGRESS</strong>
                                    <div className="progress">                      
                                    <div className="progress-bar">
                                        <div className="bar" style={{width: '25%'}}></div>
                                    </div>
                                    <label>25%</label>
                                    </div>
                                </div>
                                <div>
                                    <strong>RATING</strong>
                                    <div className="rat-sec">
                                    <span>4.5</span>
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsStarHalf />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="actions">
                                <button className='report'><BsFlag/> Report Student</button>
                            </div>
                    </div>
                </div>
            </StudentModalContainer>           
        </Wrapper>
     );
}
 
export default StudentModal;