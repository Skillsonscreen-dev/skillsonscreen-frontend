import { Button, Container, Form, FormMeta, InputSec, MainSection, PasswordInput, Wrapper } from './styles'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRef, useState } from 'react'
import Message from '../../../components/message/Message'
import AxiosCall from '../../../../utils/axios'
import Loader from '../../../components/Loader/Loader'
import useQuery from '../../../../hooks/useQuery'
import { log } from 'console'


const SignupScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    let navigate = useNavigate();
    const query = useQuery();

    const signup = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        console.log("email", email?.current?.value);
        console.log("password", password?.current?.value);

        try {
            if (!password?.current?.value.length) {
                setIsLoading(false)
                return Message.error("Passwords can't be empty");
            }

            let userType = query.get('user-type')
            
            const res: any = await AxiosCall({
                method: "POST",
                path: "/user/signup",
                data: {
                    email: email?.current?.value,
                    password: password?.current?.value,
                    firstname: firstName?.current?.value,
                    lastname: lastName?.current?.value,
                    userType: userType ? "TEACHER" : "STUDENT"
                }
                });

            console.log("response:",res);
            if (res.status == 1) {
                setIsLoading(false)
                Message.success("Account created successfully")

                localStorage.setItem("authToken", res.data.token)
                if (userType?.toLocaleLowerCase() == "teacher") {
                    return navigate("/become-a-tutor");
                } else {
                    return navigate("/signin");
                }
            } else {
                setIsLoading(false)
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsLoading(false)
            console.log('====================================');
            console.log(err);
            console.log('====================================');
            Message.error(err?.response.data.message)
        }
    }

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
                            <input ref={firstName} id="first-name" type="text" placeholder="Enter your first name" />
                        </InputSec>
                        <InputSec>
                            <label htmlFor="last-name">Last Name</label>
                            <input ref={lastName}  id="last-name" type="text" placeholder="Enter your last name" />
                        </InputSec>
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
                        <Button onClick={signup}>{isLoading ? <Loader /> : "Sign up"}</Button>
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