import Header from "../../../components/header/Header";
import Footer from '../../../components/footer/Footer';
import { CartTable, Checkout, Container, Wrapper } from './styles';
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
const CartScreen: React.FC = () => {
    const [showModal, setshowModal] = useState(false)
    const openModal = () => {
        
        setshowModal(true)
    }
    
    return ( 
        <Wrapper>
            <Header />
            
                <Container>
                    <h4>Cart</h4>

                    <div className="">
                      <CartTable>
                        <div className="table">
                            <table>
                            <thead>
                            <tr>
                                <th>Course</th>
                                <th>Rating</th>
                                <th>Action</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="course">
                                        <div className="img-wrapper">
                                        <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Course" />
                                        </div>
                                        <div className="course-details">
                                            <div className="">
                                                <h3>Pig disease and treatment</h3>
                                                <p>Chi Farm</p>
                                            </div>
                                            <div className="sub-details">
                                                <div>
                                                    <p>Level:</p> <strong>Beginner</strong>
                                                </div>
                                                <div className="divide"></div>
                                                <div>
                                                    <p>Duration:</p> <strong>12 hours</strong>
                                                </div>
                                                <div className="divide"></div>
                                                <div>
                                                    <p>Classes:</p> <strong>25</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="rat-sec">
                                <span>4.5</span>
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsStarHalf />
                                </div>
                                <p className="student-num">(10,000 Students)</p>
                                </td>
                                <td>
                                    <button className="cart-action">Move to Wishlist </button>
                                    <button className="cart-action">Remove course</button>
                                </td>
                                <td>
                                    <p className="sell-price">N25000</p>
                                    <p className="discount-price">N25000</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="course">
                                        <div className="img-wrapper">
                                        <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" className='course-img' alt="Course" />
                                        </div>
                                        <div className="course-details">
                                            <div className="">
                                            <h3>Pig disease and treatment</h3>
                                            <p>Chi Farm</p>
                                            </div>
                                            <div className="sub-details">
                                                <div>
                                                    <p>Level:</p> <strong>Beginner</strong>
                                                </div>
                                                <div className="divide"></div>
                                                <div>
                                                    <p>Duration:</p> <strong>12 hours</strong>
                                                </div>
                                                <div className="divide"></div>
                                                <div>
                                                    <p>Classes:</p> <strong>25</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="rat-sec">
                                <span>4.5</span>
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsFillStarFill />
                                    <BsStarHalf />
                                </div>
                                <p className="student-num">(10,000 Students)</p>
                                </td>
                                <td>
                                    <button className="cart-action">Move to Wishlist </button>
                                    <button className="cart-action">Remove course</button>
                                </td>
                                <td>
                                    <p className="sell-price">N25000</p>
                                    <p className="discount-price">N25000</p>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                      </CartTable>
                      <Checkout>
                        <div className="summary">
                            <p>Purchase summary</p>
                            <span>4 courses</span>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <span>N50000</span>
                        </div>
                        <button className="checkout-btn">
                        Checkout
                        </button>
                      </Checkout>
                    </div>
                </Container>
               
            <Footer />
        </Wrapper>
     );
}
 
export default CartScreen;