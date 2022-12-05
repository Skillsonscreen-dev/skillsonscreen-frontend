import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
`;

export const Wrapper = styled.div`
    background: #F2F3F5;
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 30px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    .offer-item {
        display: flex;
        gap: 10px;
        width: 100%;
        .image {
            display: flex;
            align-items: center;
            height: 32px;
            width: 32px;
            min-width: 32px;
            img {
                border-radius: 50%;
                object-fit: cover;
                height: 100%;
            }
        }
        .body {
            .title {
                font-family: 'Raleway';
                font-weight: 700;
                font-size: 16px;
                color: ${props => props.theme.primaryColor};
                margin-bottom: 3px;
            }
            .text {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 12px;
                color: #1C1D1F;
            }
        }
    }

    @media screen and (min-width: 480px) {
        flex-direction: row;
        .offer-item {
            width: calc(50% - (40px/2));
        }
    }
    @media screen and (min-width: 720px) {
        .offer-item {
            width: calc(25% - (120px/4));
        }
    }
`;