
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { Wrapper, ModalContainer } from './styles';
import {FiEdit} from 'react-icons/fi'
import { MdOutlineCancel } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri'
const Modal: React.FC<{close: any}> = (props) => {
    return ( 
        <Wrapper>
            <ModalContainer onClick={() => props.close()}>
            <div className="close-btn" onClick={() => props.close()}>
                    <MdOutlineCancel />
                </div>
                <div className="">
                
                    <div className="modal">
                        <div className="course-title">
                            <div className="img-wrapper">
                            <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Course" />
                            </div>
                            <span>
                                <h5>Introduction to baking</h5>
                                <p>Baking</p>
                            </span>
                        </div>
                        <div className="course-content">
                            <div className="intro">
                                <strong>INTRODUCTION</strong>
                                <strong> Do you love baking? Do you know much about baking?</strong>
                                <p>
                                In this course I am going to show you step by step how to bake easily at home. How to make delicious recipes for your family and your friends to enjoy. Everything will be explained from the ingredients and the steps. You will learn to make the recipes with different tastes. You don't need fancy equipment to make these recipes. You will need an oven, bread loaf pans, mixing bowls, spoons and an electric mixer. So come and join me to learn how to bake together.
                                </p>
                            </div>
                            <div className="more-details">
                                <div>
                                    <strong>COURSE</strong>
                                    <p>Baking for beginners</p>
                                </div>
                                <div>
                                    <strong>DATE PUBLISHED</strong>
                                    <p>December 3, 2022</p>
                                </div>
                                <div>
                                    <strong>LEVEL</strong>
                                    <p>Beginners</p>
                                </div>
                                <div>
                                    <strong>STUDENTS</strong>
                                    <p>121</p>
                                </div>
                                <div>
                                    <strong>DURATION</strong>
                                    <p>12 hours</p>
                                </div>
                                <div>
                                    <strong>OVERALL RATING</strong>
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
                                <button><FiEdit /> Edit course</button>
                                <button><BiCommentDetail/> View comments</button>
                                <button className='del'><RiDeleteBin5Line/> Delete course</button>
                            </div>
                    </div>
                </div>
            </ModalContainer>           
        </Wrapper>
     );
}
 
export default Modal;