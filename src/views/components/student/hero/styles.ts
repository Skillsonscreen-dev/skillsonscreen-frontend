import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
    max-width: 1340px;
    margin: 0px auto;    
    padding: 320px 20px 40px 20px;
    @media screen and (min-width: 880px) {
        padding-top: 70px;
        padding-bottom: 70px;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 20px 4%;
    background: #F7F9FA;
        height: 360px;
    
    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: center;
        gap: 4%;
        height: 342px;
    }
`;

export const TextContent = styled.div`
    width: 100%;
    max-width: 640px;
    order: 2;

    @media screen and (min-width: 880px) {
        /* max-width: 500px; */
        order: 1;
    }
    
    h2 {
        font-size: 32px;
        font-weight: 700;
        color: ${props => props.theme.primaryColor};

        @media screen and (min-width: 880px) {
            font-size: 44px;
            max-width: 480px;
        }
    }

    h6 {
        color: #5C5C5C;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin-top: 20px;
        line-height: 25px;
    }

    .link-sec {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        flex-direction: column;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
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
        }


        @media screen and (min-width: 480px) {
                flex-direction: row;
            }
    }
    
`;
export const ImageContent = styled.div`
    width: 100%;
    max-width: 480px;
    order: 1;
    @media screen and (min-width: 880px) {
        /* max-width: 500px; */
        order: 2;
    }
`;