import styled from 'styled-components'

export const ButtonBordered = styled.button<{color?: string}>`
    font-family: 'Lato';
    background: transparent;
    border: 0.8px solid ${
        props => props.color === 'info'? '#D1D7DC':
        props => props.color === 'dark'? '#0D2D53':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };
    color: #5C5C5C;
    padding: 6px 16px;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
`;

export const ButtonFilled = styled.button<{color?: string}>`
    font-family: 'Lato';
    background: ${
        props => props.color === 'info'? '#D1D7DC':
        props => props.color === 'dark'? '#0D2D53':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };
    border: 0.8px solid ${
        props => props.color === 'info'? '#D1D7DC':
        props => props.color === 'dark'? '#0D2D53':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };
    color: #FFF;
    padding: 6px 16px;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
`;