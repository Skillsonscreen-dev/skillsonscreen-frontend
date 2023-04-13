import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
    padding: 20px 4%;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: center;
        gap: 4%;
    }
`;

export const TextContent = styled.div`
    width: 100%;
    max-width: 640px;

    @media screen and (min-width: 880px) {
        /* max-width: 500px; */
    }
    
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: ${props => props.theme.primaryColor};
        text-align: center;

        @media screen and (min-width: 880px) {
            text-align: unset;
        }
    }

    h6 {
        color: #5C5C5C;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin-top: 20px;
        line-height: 25px;
        text-align: center;

        @media screen and (min-width: 880px) {
            text-align: unset;
        }
    }

    .link-sec {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        flex-direction: column;
        justify-content: center;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 100%;
            color: #fff;
            padding: 0px 40px;
            font-weight: 500;
            border-radius: 5px;
            background-color: ${props => props.theme.primaryColor};
            border: 1px solid ${props => props.theme.primaryColor};

            :last-child {
                color: ${props => props.theme.primaryColor};
                background-color: #fff;
            }

            @media screen and (min-width: 880px) {
                width: unset;
            }
        }


        @media screen and (min-width: 480px) {
            flex-direction: row;
        }
        @media screen and (min-width: 880px) {
            justify-content: start;
        }
    }
    
`;
export const ImageContent = styled.div`
    width: 100%;
    max-width: 480px;
`;