import { BsThreeDotsVertical } from "react-icons/bs";
import useDisclosure from "../../../../hooks/useDisclosure";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ProfileNav from "../../../components/student/profileNav/profileNav";
import ProfileNavContent from "../../../components/student/profileNav/profileNaveContent";
import Button from "../../../components/ui/button/Button";
import { Container, Content, Flex, Layout, SavedPaymentMethod, TopNav, Wrapper } from "./styles";
import { BiEdit, BiPlusCircle, BiTrash } from "react-icons/bi";
import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const PaymentMethod: React.FC = () => {
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
                            <div className="payment-method-header">
                                <h3>Edit payout method</h3>
                            </div>
                            <div className="payment-method-box">
                                <div className="payment-method-subtext">
                                    <p>You can only  add one payout method at a time. Connecting to a new payout method may take a few days. You won’t receive payments to the new linked account until its status is approved.</p>
                                </div>
                                
                                <div className="input-group">
                                    <div className="label">Saved Payment Method</div>
                                    
                                    <SavedPaymentMethod>
                                        <Flex spaceBetween autoWidth noPadding stretch break={560}>
                                            <Flex alwaysRow autoWidth noPadding gap={20} align>
                                                <RiBankFill size={32} />
                                                <div className="bank-info">
                                                    <span className="bank-name">Access Bank</span>
                                                    <h5>
                                                        <Flex alwaysRow autoWidth noPadding gap={8}>
                                                            <span>Adekunle Ciroma</span>
                                                            |
                                                            <span>0568631256</span>
                                                        </Flex> 
                                                    </h5>
                                                                                                       
                                                </div>
                                            </Flex>
                                            <Flex alwaysRow autoWidth noPadding gap={8}>
                                                <Button variant="filled" color="white" br={8}><BiEdit size={18} /></Button>
                                                <Button variant="filled" color="primary" br={8}><BiTrash size={18} /></Button>
                                            </Flex>
                                        </Flex>
                                    </SavedPaymentMethod>
                                </div>
                            </div>
                            <div className="add-payment">
                                <Button br={8} color="black" size="md" onClick={() => navigate('/myaccount/payment/new')}>
                                    <Flex alwaysRow align autoWidth noPadding gap={8}>
                                        <BiPlusCircle size={16} />
                                        Add Payout Method
                                    </Flex>
                                </Button>
                            </div>
                            <div className="save-cover">
                                <Button size="md" br={4}>Save</Button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default PaymentMethod;