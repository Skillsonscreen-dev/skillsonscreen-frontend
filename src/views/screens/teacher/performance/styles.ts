import styled from 'styled-components'

export const Wrapper = styled.div`
    .performance{
        margin-top: 1rem;
        margin-left: 1rem;
        h4 {
            font-family: 'Raleway';
            font-style: normal;
            font-size: 20px;
        }
    }
    .performance-cards{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        /* gap: 20px; */

        .card{
            background: #F7F9FA;
            border: 1px solid #D1D7DC;
            border-radius: 8px;
            width: 31%;
            height: 168px;
            padding: 1.5rem 1rem;
            p{
                font-weight: 300;
            }
            .good-perfomance{
                background: rgba(35, 172, 0, 0.05);
                border: 1px solid #23AC00;
                border-radius: 8px;
                color: #23AC00;
                padding: 0.5rem;
            }
            .bad-perfomance{
                background: rgba(252, 46, 46, 0.1);
                border: 1px solid #FC2E2E;
                border-radius: 8px;
                color: #FC2E2E;
                padding: 0.5rem;
            }
            h2{
                /* font-family: 'Raleway'; */
                color: #1C1D1F;
                font-weight: 900;
                padding: 0.5rem 0;
                font-size: 40px;
            }
            span{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    .performance-graph{
        margin-top: 2.5rem;
        border: 1px solid #D1D7DC;
        border-radius: 8px;
        width: 100%;
        padding: 1.5rem;
        
    }
    .graph{
        margin-top: 1.5rem;
    }
    .title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            h4 {
                font-family: 'Raleway';
                font-style: normal;
                color: #1C1D1F;
                font-size: 20px;
            }
            .view{
                margin-top: 1rem;
                display: flex;
                gap: 14px;
                align-items: center;
                flex-wrap: wrap;
                button {
                    background: #FFFFFF;
                    border: 1px solid #D1D7DC;
                    border-radius: 4px;
                    color: #5C5C5C;
                    padding: 0.5rem 1.5rem;
                }
                button:hover {
                    background: #FFFFFF;
                    color: #1C1D1F;
                    border: 1px solid #1C1D1F;
                    border-radius: 4px;
                }
            }
        }
    @media screen and (max-width: 780px) {
        .performance-cards{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .card{
            width: 100% !important;
        }
        .title{
            display: block;
        }
        
    }
`;
export const Container = styled.div`
    margin-top: 90px;
    padding: 32px 6%;
`;