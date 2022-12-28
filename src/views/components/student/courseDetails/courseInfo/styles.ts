import styled from 'styled-components'

export const InfoCard = styled.div`
    width: 100%;
    border: 1px solid #D1D7DC;
    padding: 20px 30px;
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 30px;
        overflow-x: auto;
        scrollbar-width: none;  
        .vertical-rule {
            font-size: 28px;
            font-weight: lighter;
        }      
        .card-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
            span {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 8px;
                color: #5C5C5C;
                white-space: nowrap;
            }
            p {
                font-family: 'Raleway';
                font-weight: 600;
                font-size: 12px;
                color: #1C1D1F;
                white-space: nowrap;
            }
        }
    }
`;