import { Container, JumboContent, JumboImage, JumboTitle, Wrapper } from "./styles"

interface JumboProps {
    title: string;
    image?: string;
}

const Jumbotron: React.FC<JumboProps> = (props) => {
    return (
        <Wrapper>
            <Container>
                <JumboContent>
                    <JumboTitle>
                        { props.title }
                    </JumboTitle>
                    {
                        props.image? (
                            <JumboImage>
                                <img src={props.image} alt="" />
                            </JumboImage>
                        ): null
                    }                    
                </JumboContent>
            </Container>
        </Wrapper>
    )
}

export default Jumbotron;