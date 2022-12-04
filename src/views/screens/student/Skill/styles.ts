import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 90px;    
`;

export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
`;

export const Mb = styled.div`
    margin-bottom: 40px;
`;


export const Banner = styled.div`
    background: ${props => props.theme.primaryColor};
    .banner-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 1340px;
        margin: 0px auto;
        padding: 18px 20px;
        .action {
            align-items: center; 
            display: flex;
            gap: 24px;
            width: 100%;
            order: 2;
            .fav-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 42px;
                height: 42px;
                cursor: pointer;
            }
        }
        .info {
            display: flex;
            gap: 20px;
            align-items: center;
            width: 100%;
            order: 1;
            span {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 14px;
                color: #F7F9FA;
            }
        }
        @media screen and (min-width: 720px) {
            flex-direction: row;
            .action { 
                width: 50%;
                order: 1;
            }
            .info {
                justify-content: space-between;  
                width: 50%;
                order: 2;
            }
        }
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    > * {
        width: 100%;
    }
    @media screen and (min-width: 880px) {
        flex-direction: row;
        > * {
            width: 50%;
        }
    }
`;