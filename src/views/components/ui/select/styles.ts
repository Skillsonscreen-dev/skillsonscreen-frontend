import styled from 'styled-components'

export const SelectElement = styled.select<{br?: number; size?: any; w?: string;}>`
    font-family: 'Raleway';
    background: transparent;
    background-image: url("/assets/icons/carret-down.svg");
    background-repeat: no-repeat;
    background-position-x: calc(100% - 16px);
    background-position-y: 50%;
    border: 0.8px solid #1C1D1F;
    ${props => props.br? `border-radius: ${props.br}px;`: ''}
    padding: ${
        props => props.size === 'md'? '12px 30px 12px 16px' : '6px 30px 6px 16px'
    };
    ${props => props.w? `width: ${props.w};`: ''}
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
`;

export const OptionElement = styled.option`
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 12px;
`;