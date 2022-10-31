import { Button, Container, Form, FormMeta, InputSec, MainSection, PasswordInput, Wrapper } from './styles'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'


const SignupScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Wrapper>
            <Header />
            <Container>
                <MainSection>
                    <h1>Create an account for free</h1>
                    <div className="has-acct-tow">
                        <span>Already have an account? </span>
                        <Link to="/signin">Log in</Link>
                    </div>

                    <Form>
                        <InputSec>
                            <label htmlFor="first-name">First Name</label>
                            <input id="first-name" type="text" placeholder="Enter your first name" />
                        </InputSec>
                        <InputSec>
                            <label htmlFor="last-name">Last Name</label>
                            <input id="last-name" type="text" placeholder="Enter your last name" />
                        </InputSec>
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
                        <Button>Sign up</Button>
                        <FormMeta>
                            <span>By signing up, you agree to our </span>
                            <a href="#">Terms of Use </a>
                            <span>and </span>
                            <a href="#">Privacy Policy.</a>
                        </FormMeta>
                    </Form>
                </MainSection>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default SignupScreen