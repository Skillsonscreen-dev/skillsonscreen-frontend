import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
`;
export const Container = styled.div`
    margin-top: 90px;
`;
export const MainSection = styled.main`
    h1 {
        font-size: 30px;
        font-weight: 400;
        color: ${props => props.theme.primaryColor};
        margin: 40px 0px 20px 0px;
    }
    .has-acct-tow {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    
        span {
            font-size: 13px;
            margin-right: 4px;
            font-weight: 400;
            color: #5C5C5C;
        }
         a {
            font-size: 13px;
            color: #5C5C5C;
            font-weight: 600;
            text-decoration: underline;
         }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 480px;
    /* padding: 20px; */
`;

export const InputSec = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: 600;
        color: #1C1D1F;
    }

    input {
        width: 100%;
        height: 44px;
        padding: 0px 15px;
        font-size: 13px;
        color: #1C1D1F;
        border: 0.5px solid #898B8D;
        border-radius: 0px;
        background: #fff;
        ::placeholder {
            color: #1C1D1F;
        }
    }
`;
export const PasswordInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: 600;
        color: #1C1D1F;
    }
    .input-row {
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
        padding: 0px 15px;
        border: 0.5px solid #898B8D;
        border-radius: 0px;
        background: #fff;

        input {
            flex: 1;
            font-size: 13px;
            color: #1C1D1F;
            border: none;
            border-radius: 0px;
            background: #fff;
            ::placeholder {
                color: #1C1D1F;
            }
        }

        svg {
            fill: #898B8D;
            font-size: 18px;
            cursor: pointer;
        }
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 4px;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    background-color: ${props => props.theme.primaryColor};
    margin-top: 10px;
    border: none;
    cursor: pointer;
`;

export const FormMeta = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: center;

    span {
        font-size: 13px;
        color: #5C5C5C;
    }
    a {
        font-size: 13px;
        color: #5C5C5C;
        margin: 0px 4px;
        text-decoration: underline;
    }
`;