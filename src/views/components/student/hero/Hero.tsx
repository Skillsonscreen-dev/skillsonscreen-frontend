import react, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Container, ImageContent, TextContent, Wrapper } from './styles'

interface HeroProps {
    title: string;
    content: string;
    image: string;
    action: ReactElement
}
const Hero: React.FC<HeroProps> = (props) => {
    return (
        <Wrapper>
            <Container>
                <TextContent>
                    <h2>{props.title}</h2>
                    <h6>{props.content}</h6>

                    <>
                        { props.action }
                    </>                    
                </TextContent>

                <ImageContent>
                    <img src={props.image} alt="lady" />
                </ImageContent>
            </Container>
        </Wrapper>
    )
}

export default Hero