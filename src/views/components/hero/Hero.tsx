import react from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Container, ImageContent, TextContent, Wrapper } from './styles'

const Hero: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <TextContent>
                    <h2>Bringing you closer to you desired skill</h2>
                    <h6>Learn your desired vocational skill in the most convinient way possible. With over 50 skills and over 200 courses to choose from.</h6>

                    <div className="link-sec">
                        <Link to="/signup">Create an account</Link>
                        <a href="#">Learn More</a>
                    </div>
                </TextContent>

                <ImageContent>
                    <img src="/assets/img/hero.png" alt="lady" />
                </ImageContent>
            </Container>
        </Wrapper>
    )
}

export default Hero