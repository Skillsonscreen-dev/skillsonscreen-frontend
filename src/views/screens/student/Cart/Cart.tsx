import Header from "../../../components/header/Header";
import Footer from '../../../components/footer/Footer';
import { CartTable, Checkout, Container, CourseCard, CourseWrapper, SectionContainer, Wrapper } from './styles';
import { BsFillHeartFill, BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { BiBadgeCheck } from "react-icons/bi";
import { CourseInterface } from "../../../../slices/cartSlice";
import { useAppSelector } from "../../../../hooks/hooks";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";
import PaystackPayment from "../../../components/paystackPayment/PaystackPayment";
import { ProfileSliceInterface } from "../../../../slices/profileSlice";
import Loader from "../../../components/Loader/Loader";
const CartScreen: React.FC = () => {
    const userProfile: ProfileSliceInterface = useAppSelector(state => state.profile.state);
    const cartItems: CourseInterface[]  = useAppSelector(state => state.cart.state);
    const [showModal, setshowModal] = useState(false)
    const openModal = () => {
        setshowModal(true)
    }

    const [totalCost, setTotalCost] = useState(0)

    const getTotalCost = () => {
        let price = 0;
        for (let index = 0; index < cartItems.length; index++) {
            const cartItem = cartItems[index];
            price = price +cartItem.price
        }

        setTotalCost(price)
    }

    useEffect(() => {
        getTotalCost()
    }, [])

    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutData, setCheckoutData] = useState({
        email: "",
        amount: 0,
        reference: "",
        orderId: ""
    });
    const [hasCheckedOut, setHasCheckedOut] = useState(false);

    const checkout = async () => {
        setIsCheckingOut(true)

        const courseOrder = []

        for (let index = 0; index < cartItems.length; index++) {
            const cartItem = cartItems[index];
            courseOrder.push({
                courseId: cartItem.courseId
            })
        }
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/student/course/order/add",
                data: {
                    orderItems: courseOrder
                }
            });

            console.log("response:",res);
            if (res.status == 1) {
                setIsCheckingOut(false)
                setCheckoutData({
                    amount: res.data.order.totalPrice,
                    reference: res.data.order.reference,
                    email: userProfile.email,
                    orderId: res.data.order._id
                })
                setHasCheckedOut(true)
                Message.success("Courses fetched");
            } else {
                setIsCheckingOut(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsCheckingOut(false)
            Message.error(err?.response.data.message)
        }
    }

    return ( 
        <Wrapper>
            <Container>
                <h4>Cart</h4>

                <div className="cart-content">
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
                        {cartItems.map((item, idx) => <tr key={"cart-"+idx}>
                            <td>
                                <div className="course">
                                    <div className="img-wrapper">
                                    <img src={item.courseImg} className='course-img' alt="Course" />
                                    </div>
                                    <div className="course-details">
                                        <div className="">
                                            <h3>{item.title}</h3>
                                            <p>{item.category}</p>
                                        </div>
                                        <div className="sub-details">
                                            <div>
                                                <p>Level:</p> <strong>{item.level}</strong>
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
                                <p className="sell-price">N{item.price}</p>
                                <p className="discount-price">N{item.price}</p>
                            </td>
                        </tr>)}
                        </tbody>
                        </table>
                    </div>
                    </CartTable>
                    <Checkout>
                    <div className="summary">
                        <p>Purchase summary</p>
                        <span>{cartItems.length} courses</span>
                    </div>
                    <div className="total">
                        <p>Total</p>
                        <span>N{totalCost}</span>
                    </div>
                    
                        {!hasCheckedOut ? <button className="checkout-btn" onClick={checkout}>{isCheckingOut ? <Loader /> :  "Checkout"}</button> : <PaystackPayment orderId={checkoutData.orderId} amount={checkoutData.amount} email={checkoutData.email} reference={checkoutData.reference} />}
                    </Checkout>
                </div>
                <SectionContainer>
                    <h3 className="">Courses you might like</h3>
                    <CourseWrapper>
                        {[1,2,3,4].map((item, index) => {
                            return (
                                <CourseCard key={index}>
                                    <div className="img-wrapper">
                                        <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?k=20&m=1353356088&s=612x612&w=0&h=-qG52wPo67pC7bcMAUKiYgl3BTbYdGNEfAsSmTl4tN8=" alt="course image" />
                                        <div className="label">
                                            <BiBadgeCheck />
                                            <span>Beginner</span>
                                        </div>
                                    </div>
                                    <div className="head-col">
                                        <span>Carpentry</span>
                                        <span>N25,000</span>
                                    </div>
                                    <h3>CPT 101: Introduction to Carpenter</h3>
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
                                            </div>
                                            <span className='stutents'>(10,000 Students)</span>
                                        </div>

                                        <div className="action-col">
                                            <div className="fav-box">
                                                <BsFillHeartFill />
                                            </div>
                                            <a href="#">Add to cart</a>
                                        </div>
                                    </div>
                                </CourseCard>
                            )
                        })}
                    </CourseWrapper>
                </SectionContainer>
            </Container>
        </Wrapper>
     );
}
 
export default CartScreen;