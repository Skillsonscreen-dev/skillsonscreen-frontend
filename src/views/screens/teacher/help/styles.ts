import styled from 'styled-components'

export const Wrapper = styled.div`
h4 {
            font-family: 'Raleway';
            font-style: normal;
            font-size: 20px;
            margin-top: 2rem;
        }
    .start-banner{
        background: #1C1D1F;
        border-radius: 20px;
        width: 100%;
        height: 240px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        padding: 0 2.5rem;
        margin: 1.5rem 0;
        span{
            font-size: 24px;
            b{
                font-weight: 900;
            }
        }
        button{
            cursor: pointer;
            display: block;
            background: #3186C6;
            padding: 0.8rem;
            font-size: 14px;
            margin: 1rem 0;
            border: none;
            color: #FFFFFF;
            border-radius: 2px;
        }
    }
    .faq-container {
        margin-bottom: 4rem;
        
        .faqs {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .faq{
                background: #F7F9FA;
                padding: 1rem;
                border: 1px solid #D1D7DC;
                border-radius: 8px;
                .info {
                    display: flex;
                justify-content: space-between;
                }
                .title {
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                }
                .ans{
                    padding-top: 5px;
                    font-size: 15px;
                }
            }
        }
    }
    .contact {
        .half{
            display: flex;
            width: 100%;
            gap: 1rem ;
            margin: 1rem 0;
            @media screen and (max-width: 768px) {
               display:block ;
            }
        }
        .email{
            flex: 1;
        }
        .subject{
            flex: 1;
        }
        label {
            color: #1C1D1F;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 20px;
        }
        input {
            margin-top: 5px;
            width: 100%;
            height: 2.5rem;
            display: block;
            background: #F7F9FA;
            border: 1px solid #D1D7DC;
            border-radius: 4px;
            padding: 4px;
            font-size: 16px;
        }
        textarea {
            margin-top: 5px;
            width: 100%;
            height: 6rem;
            display: block;
            background: #F7F9FA;
            border: 1px solid #D1D7DC;
            border-radius: 4px;
            padding: 4px;
            font-size: 16px;
        }
        button {
            background: #3186C6;
            border-radius: 4px;
            border: none;
            padding: 0.5rem 1rem;
            color: #FFFFFF;
            margin: 1.5rem 0;
            font-size: 16px;
        }
    }
`;
export const Container = styled.div`
    margin-top: 90px;
    padding: 32px 6%;
    /* position: relative; */
`;