import react from 'react'
import { BottomSection, Container, Logo, Nav, SocialItem, TopSection, Wrapper } from './styles'
import { TbSearch } from 'react-icons/tb'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { VscMenu } from 'react-icons/vsc'

const Footer: React.FC = () => (
    <Wrapper>
        <Container>
            <TopSection>
                <Logo>
                        <img src="assets/img/logo-alt.png" />
                    </Logo>
                    <Nav>
                        <ul>
                            <li><a href="#">Become a Tutor</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Accessibility Commitment</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Terms & Policy</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Help & Support</a></li>
                        </ul>
                    </Nav>
            </TopSection>
            <BottomSection>
                <div className="credits">
                    <span>&copy;</span>
                    <span>2022 Skills On Screen. All rights reserved.</span>
                </div>
                <div className="social">
                    <SocialItem target="_blank" href="#">
                        <AiOutlineInstagram />
                    </SocialItem>
                    <SocialItem target="_blank" href="#">
                        <AiFillYoutube />
                    </SocialItem>
                    <SocialItem target="_blank" href="#">
                        <AiFillLinkedin />
                    </SocialItem>
                    <SocialItem target="_blank" href="#">
                        <AiFillFacebook />
                    </SocialItem>
                    <SocialItem target="_blank" href="#">
                        <AiOutlineGoogle />
                    </SocialItem>
                    <SocialItem target="_blank" href="#">
                        <AiOutlineTwitter />
                    </SocialItem>
                </div>
            </BottomSection>
        </Container>
    </Wrapper>
)

export default Footer