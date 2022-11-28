import { Button, Container, Form, FormMeta, InputSec, MainSection, PasswordInput, Wrapper } from './styles'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'


const SigninScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header />
            <Container>
                <MainSection>
                    <h1>Welcome, Log in</h1>
                    <div className="has-acct-tow">
                        <span>Don't have an account? </span>
                        <Link to="/signup">Sign up</Link>
                    </div>

                    <Form>
                        <InputSec>
                            <label htmlFor="user-email">Email</label>
                            <input id="user-email" type="text" placeholder="name@email.com" />
                        </InputSec>
                        <PasswordInput>
                            <label htmlFor="user-pass">Password</label>
                            <div className="input-row">
                                <input id="user-pass" type={showPassword ? "text" : "password"} placeholder="Create password" />
                                {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                        </PasswordInput>
                        <FormMeta>
                            <a href="#">Forgot Password?</a>
                        </FormMeta>
                        <Button onClick={() => navigate('/home')}>Sign In</Button>
                    </Form>
                </MainSection>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default SigninScreen