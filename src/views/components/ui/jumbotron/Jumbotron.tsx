import { ReactNode } from "react";
import { Container, JumboContent, JumboImage, JumboTitle, Wrapper } from "./styles"

interface JumboProps {
    title?: string;
    content?: ReactNode;
    image?: string;
    size?: 'md' | 'sm';
}

const Jumbotron: React.FC<JumboProps> = (props) => {
    return (
        <Wrapper>
            <Container padding={props.size === 'sm'? 30: 40}>
                <JumboContent>
                    <>
                        {
                            props.content? (
                                props.content
                            ): (
                                <JumboTitle>
                                    { props.title }
                                </JumboTitle>
                            )
                        }                    
                        {
                            props.image? (
                                <JumboImage>
                                    <img src={props.image} alt="" />
                                </JumboImage>
                            ): null
                        }
                    </>                    
                </JumboContent>
            </Container>
        </Wrapper>
    )
}

export default Jumbotron;