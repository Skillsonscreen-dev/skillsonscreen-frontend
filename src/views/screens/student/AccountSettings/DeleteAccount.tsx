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
import DeleteModal from "./DeleteModal";

const DeleteAccount: React.FC = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

    return (
        <Wrapper>
            <Header />
            <Container>
                <TopNav>
                    <div className="hamburger" onClick={onOpen}>
                        <BsThreeDotsVertical size={20} />
                    </div>
                    <h1>Delete account</h1>
                </TopNav>
                <div className="mobile-nav">
                    <ProfileNav onClose={onClose} isOpen={isOpen} />
                </div>
                <Layout>
                    <div className="desktop-nav">
                        <ProfileNavContent />
                    </div>

                    {
                        isDeleteOpen && <DeleteModal onClose={onDeleteClose} />
                    }

                    <Content>
                        <div className="account-settings">
                            <div className="delete-account-header">
                                <h3>Warning</h3>
                            </div>
                            <div className="delete-account-box">
                                <div className="delete-account-subtext">
                                    <p>If you delete your account, your personal information will be wiped from Skillsonscreen's servers, all of your course activity will be erased and any certificates earned will be deleted. </p>
                                    <br />
                                    <strong>This action cannot be undone!</strong>
                                    <p>Cancel any active subscriptions before you delete your account.</p>
                                </div>
                            </div>
                            <div className="save-cover">
                                <Button variant="outline" size="md" br={4} onClick={onDeleteOpen}>Delete my account</Button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default DeleteAccount;