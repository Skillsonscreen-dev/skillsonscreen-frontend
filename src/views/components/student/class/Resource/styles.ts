import styled from 'styled-components'

export const Wrapper = styled.div`
    h4 {
        padding-bottom: 20px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        border-bottom: 1px solid #000000;
    }
    .chapters {
        .chapter {
            padding-top: 20px;
            padding-bottom: 20px;
            h6 {
                font-family: 'Raleway';
                font-weight: 700;
                font-size: 12px;
                color: #5C5C5C;
                margin-bottom: 8px;
            }
            .resources-cards {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
        }
    }
`;

export const Resource = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    background: #F2F3F5;
    border-radius: 8px;
    .details {
        display: flex;
        align-items: center;
        gap: 25px;
        .info {
            font-family: 'Lato';
            p {
                font-weight: 700;
                font-size: 14px;
                color: #1C1D1F;
                margin-bottom: 4px;
            }
            span {
                font-weight: 400;
                font-size: 14px;
                color: #898B8D;
            }
        }
    }
`;