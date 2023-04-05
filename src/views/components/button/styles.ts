import styled from "styled-components";

export const Wrapper = styled.button`
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.primaryColor};
    color: #fff;
    border: none;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;

    :disabled {
        background: ${(props) => props.theme.lightPrimaryColor};
        cursor: default;
    }
`;