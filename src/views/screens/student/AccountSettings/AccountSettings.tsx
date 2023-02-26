import { BsEye, BsEyeSlash, BsMenuButton, BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import useDisclosure from "../../../../hooks/useDisclosure";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ProfileNav from "../../../components/student/profileNav/profileNav";
import ProfileNavContent from "../../../components/student/profileNav/profileNaveContent";
import Button from "../../../components/ui/button/Button";
import Switch from "../../../components/ui/switch";
import { Container, Content, Flex, Layout, TopNav, Wrapper } from "./styles";

const AccountSettings: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: showPassword, onOpen: onShowPassword, onClose: onHidePassword } = useDisclosure();

    return (
        <Wrapper>
            <Header />
            <Container>
                <TopNav>
                    <div className="hamburger" onClick={onOpen}>
                        <BsThreeDotsVertical size={20} />
                    </div>
                    <h1>My Account</h1>
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
                            <h2>Account Settings</h2>
                            <Flex>
                                <div className="input-group">
                                    <div className="label">Email Address</div>
                                    <input type={'email'} placeholder="johndoe@gmail.com" />
                                </div>
                                <div className="input-group">
                                    <div className="label">Password</div>
                                    <div className="input-subgroup">
                                        <input type={showPassword? 'text': 'password'} placeholder="* * * * * * *" />
                                        {
                                            showPassword?
                                            <BsEyeSlash size={20} color="#898B8D" onClick={onHidePassword} />:
                                            <BsEye size={20} color="#898B8D" onClick={onShowPassword} />
                                        }
                                    </div>                                    
                                    <Button br={5} size="md" variant="outline">Reset Password</Button>
                                </div>
                            </Flex>
                        </div>
                        <div className="notifications">
                            <h2>Notifications</h2>
                            <Flex>
                                <div className="promotions box">
                                    <Switch />
                                    <div className="text">
                                    I wish to receive promotions, course recommendations and articles from Skillsonscreen
                                    </div>
                                </div>
                                <div className="announcements box">
                                    <Switch />
                                    <div className="text">
                                    I wish to receive announcements from Tutors whose course(s) I am enrolled in
                                    </div>
                                </div>
                            </Flex>
                        </div>
                        <div className="save-cover">
                            <Button size="md" br={4}>Save</Button>
                        </div>
                    </Content>
                </Layout>
            </Container>         
            <Footer />
        </Wrapper>
    )
}

export default AccountSettings;