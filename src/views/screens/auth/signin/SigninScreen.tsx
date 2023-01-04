import { Button, Container, Form, FormMeta, InputSec, MainSection, PasswordInput, Wrapper } from './styles'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRef, useState } from 'react'
import AxiosCall from '../../../../utils/axios'
import Message from '../../../components/message/Message'
import Loader from '../../../components/Loader/Loader'


const SigninScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const signin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        console.log("email", email?.current?.value);
        console.log("password", password?.current?.value);

        try {
            if (!password?.current?.value.length) {
                setIsLoading(false)
                return Message.error("Passwords can't be empty");
            }
            const res: any = await AxiosCall({
                method: "POST",
                path: "/user/signin",
                data: {
                    email: email?.current?.value,
                    password: password?.current?.value
                }
                });

            console.log("response:",res);
            if (res.status == 1) {
                setIsLoading(false)
                Message.success("Login success")
                return navigate("/home");
            } else {
                setIsLoading(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsLoading(false)
            Message.error(err?.response.data.message)
        }
    }


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
                            <input ref={email} id="user-email" type="text" placeholder="name@email.com" />
                        </InputSec>
                        <PasswordInput>
                            <label htmlFor="user-pass">Password</label>
                            <div className="input-row">
                                <input ref={password} id="user-pass" type={showPassword ? "text" : "password"} placeholder="Create password" />
                                {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                        </PasswordInput>
                        <FormMeta>
                            <a href="#">Forgot Password?</a>
                        </FormMeta>
                        <Button onClick={signin}>{isLoading ? <Loader /> : "Sign In"}</Button>
                    </Form>
                </MainSection>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default SigninScreen