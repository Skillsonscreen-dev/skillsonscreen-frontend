import styled from 'styled-components'

export const Wrapper = styled.div`
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 20px;
    }
    .content {
        .body {
            .progress-pill {
                width: 100%;
                max-width: 426px;
                display: inline-flex;
                margin-bottom: 10px;
                .progress-content {
                    display: inline-flex;
                    align-items: center;
                    gap: 16px;
                    justify-content: space-between;
                    font-size: 18px;
                    overflow-x: auto;
                    scrollbar-width: none;
                    svg {
                        min-width: 30px;
                        margin-right: -5px;
                    }          
                    span {
                        font-family: 'Lato';
                        font-style: normal;
                        font-size: 14px;
                    }
                }
            }
            span {
                font-family: 'Lato';
                font-style: normal;
                font-size: 14px;
            }
            .foot {
                display: flex;
                align-items: center;
                font-family: 'Lato';
                font-size: 12px;
                color: #1C1D1F;
                svg {
                    margin-right: 5px;
                    color: #898B8D;
                }
            }
        }
    }
`;