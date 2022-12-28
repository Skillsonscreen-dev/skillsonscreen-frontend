import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 40px 20px;
    border: 1px solid #D1D7DC;
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 20px;
    }
    .content {
        border-left: 1px dashed #898B8D;
        display: flex;
        flex-direction: column;
        gap: 22px;
        .item {
            .inner {
                display: flex;
                gap: 16px;
                align-items: flex-start;
                font-family: 'Lato';
                font-size: 14px;
                line-height: 22px;
                color: #1C1D1F;
                .icon {
                    display: flex;
                    align-items: center;
                    height: 22px;
                    width: 10px;
                    background: #FFF;
                    margin-left: -5px;
                }
                .text {
                    width: 95%;
                }
            }
        }
    }
`;