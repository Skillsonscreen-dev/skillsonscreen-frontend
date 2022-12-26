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
    .transcriptions {
        padding-top: 20px;
        .section {
            cursor: pointer;
            .content,.time {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #898B8D;
            }
            .time {
                font-weight: 800;
                margin-bottom: 8px;
            }
            margin-bottom: 40px;
        }
        .section.active {
            .content,.time {
                color: #1C1D1F;
            }
        }
    }
`;