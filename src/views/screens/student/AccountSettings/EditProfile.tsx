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
import Select from "../../../components/ui/select/Select";

const EditProfile: React.FC = () => {
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
                        <div className="profile-picture-cover">
                            <div className="input-group">
                                <div className="label"><small>Profile picture</small></div>
                                <Flex autoWidth align>
                                    <div className="profile-picture">
                                        <img src="/assets/img/profile-avatar.png" alt="" />
                                    </div>
                                    <div className="profile-photo-btns">
                                        <Flex gap={8} alwaysRow autoWidth noPadding style={{ marginBottom: 5 }}>
                                            <Button br={5} color="primary">Upload photo</Button>
                                            <Button br={5} color="grey">Delete photo</Button>
                                        </Flex>
                                        <small className="file-size">Maximum file size <b>1MB</b>  File format <b>JPEG, PNG  </b> or <b> GIF </b></small>
                                    </div>
                                </Flex>
                            </div>
                        </div>

                        <div className="personal-info">
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">First Name</div>
                                    <input type={'text'} placeholder="Adekunle" />
                                </div>
                                <div className="input-group">
                                    <div className="label">Last Name</div>
                                    <input type={'text'} placeholder="Ciroma" />
                                </div>
                            </Flex>
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label" style={{ marginBottom: 18 }}>Date of Birth</div>
                                    <Flex autoWidth gap={10} noPadding>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <div className="label" style={{ fontWeight: 400 }}>Month</div>
                                            <Select size="md" title="January" br={3}></Select>
                                        </div>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <div className="label" style={{ fontWeight: 400 }}>Day</div>
                                            <Select size="md" title="01" br={3}></Select>
                                        </div>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <div className="label" style={{ fontWeight: 400 }}>Year</div>
                                            <Select size="md" title="1998" br={3}></Select>
                                        </div>
                                    </Flex>

                                </div>
                                <div className="input-group">
                                    <div className="label">Gender (optional)</div>
                                    <Flex autoWidth noPadding alwaysRow>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <input type={'radio'} name="gender" value={'male'} placeholder="Ciroma" />
                                            <div className="label" style={{ fontWeight: 400 }}>Male</div>
                                        </div>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <input type={'radio'} name="gender" value={'female'} placeholder="Ciroma" />
                                            <div className="label" style={{ fontWeight: 400 }}>Female</div>
                                        </div>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <input type={'radio'} name="gender" value={'none'} placeholder="Ciroma" />
                                            <div className="label" style={{ fontWeight: 400 }}>I’d rather not say </div>
                                        </div>
                                    </Flex>

                                </div>
                            </Flex>
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Skill</div>
                                    <Select size="md" title="Baking" br={3} w={'100%'}></Select>
                                </div>
                                <div className="input-group">
                                    <div className="label">Location</div>
                                    <Select size="md" title="Lagos, Nigeria" br={3} w={'100%'}></Select>
                                </div>
                            </Flex>
                            <div>
                                <div className="input-group">
                                    <div className="label">About Me</div>
                                    <textarea placeholder="Tell us about yourself, your area of specialization and your achievements" rows={4}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="background">
                            <h2>Background & Experience</h2>

                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Highest Degree</div>
                                    <Select size="md" title="University" br={3} w={'100%'}></Select>
                                </div>
                                <div className="input-group">
                                    <div className="label">Institution Attended</div>
                                    <input type={'text'} placeholder="Lagbaja University, Nigeria" />
                                </div>
                            </Flex>
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Skill Certification</div>
                                    <Select size="md" title="Yes, I have a skill certificate" br={3} w={'100%'}></Select>
                                </div>
                                <div className="input-group">
                                    <div className="label">Vocational Institution Attended</div>
                                    <input type={'text'} placeholder="Name of Institution here" />
                                </div>
                            </Flex>
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Occupation</div>
                                    <input type={'text'} placeholder="Baker" />
                                </div>
                                <div className="input-group">
                                    <div className="label">Years of Experience</div>
                                    <input type={'text'} placeholder="6 years" />
                                </div>
                            </Flex>
                        </div>

                        <div className="contact">
                            <h2>Contact Info</h2>

                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Phone Number*</div>
                                    <Flex autoWidth gap={10} noPadding style={{ alignItems: 'flex-start' }} alwaysRow>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <div className="label" style={{ fontWeight: 400 }}>Country</div>
                                            <Select size="md" title="+234" br={3}></Select>
                                        </div>
                                        <div className="input-group input-row" style={{ justifyContent: 'flex-start' }}>
                                            <input type={'text'} placeholder="8100-000-0000" />
                                        </div>
                                    </Flex>
                                </div>
                                <div className="input-group">
                                    <div className="label">Email Address*</div>
                                    <input type={'text'} placeholder="Adekunleciroma@mail.com" />
                                </div>
                            </Flex>
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Website URL</div>
                                    <input type={'text'} placeholder="www.dekunleciroma.com" />
                                </div>
                            </Flex>
                        </div>

                        <div className="social">
                            <h2>Social Profiles</h2>

                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Facebook</div>
                                    <input type={'text'} placeholder="www.facebook.com/user" />
                                </div>
                                <div className="input-group">
                                    <div className="label">Twitter</div>
                                    <input type={'text'} placeholder="Name of Institution here" />
                                </div>
                            </Flex>
                            <Flex noPadding>
                                <div className="input-group">
                                    <div className="label">Instagram</div>
                                    <input type={'text'} placeholder="www.instagram.com/user" />
                                </div>
                                <div className="input-group">
                                    <div className="label">Linkedin</div>
                                    <input type={'text'} placeholder="www.linkedin.com/user" />
                                </div>
                            </Flex>
                            <div className="save-cover">
                                <Button size="md" br={4}>Update Profile</Button>
                            </div>
                        </div>


                    </Content>
                </Layout>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default EditProfile;