import { BsThreeDotsVertical } from "react-icons/bs";
import useDisclosure from "../../../../hooks/useDisclosure";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ProfileNav from "../../../components/student/profileNav/profileNav";
import ProfileNavContent from "../../../components/student/profileNav/profileNaveContent";
import Button from "../../../components/ui/button/Button";
import { Container, Content, Flex, Layout, TopNav, Wrapper } from "./styles";
import { useNavigate } from "react-router";

const AddPaymentMethod: React.FC = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Wrapper>
            <Header />
            <Container>
                <TopNav>
                    <div className="hamburger" onClick={onOpen}>
                        <BsThreeDotsVertical size={20} />
                    </div>
                    <h1>Payment Method</h1>
                </TopNav>
                <div className="mobile-nav">
                    <ProfileNav onClose={onClose} isOpen={isOpen} />
                </div>
                <Layout>
                    <div className="desktop-nav">
                        <ProfileNavContent />
                    </div>

                    <Content>
                        <div className="account-settings">
                            <div className="account-settings-box">
                                <div className="input-group input-row">
                                    <div className="label right-label">Name on card</div>
                                    <input type={'email'} placeholder="Enter the name on your card" />
                                </div>
                                <div className="input-group input-row">
                                    <div className="label right-label">Card Number</div>
                                    <input type={'email'} placeholder="Enter your card number" />
                                </div>
                                <Flex alwaysRow spaceBetween>
                                    <div className="input-group input-row">
                                        <div className="label right-label">Expiration Date</div>
                                        <input type={'email'} placeholder="MM/YY" />
                                    </div>
                                    <div className="input-group input-row">
                                        <div className="label">CVV</div>
                                        <input type={'email'} placeholder="123" />
                                    </div>
                                </Flex>
                                <div className="input-group input-row">
                                    <div className="label right-label">Country</div>
                                    <input type={'email'} placeholder="Select your country" />
                                </div>
                            </div>
                        </div>
                        <div className="save-cover">
                            <Button size="md" br={4} onClick={() => navigate('/myaccount/payment/new')}>Save</Button>
                        </div>
                    </Content>
                </Layout>
            </Container>         
            <Footer />
        </Wrapper>
    )
}

export default AddPaymentMethod;