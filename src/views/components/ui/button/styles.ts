import styled from 'styled-components'

export const ButtonBordered = styled.button<{color?: string; size?: string; br?: number}>`
    cursor: pointer;
    font-weight: 700;
    font-family: 'Lato';
    white-space: nowrap;
    ${
        props => props.br? 'border-radius: ' + props.br + 'px;': ''
    }
    background: transparent;
    border: 0.8px solid ${
        props => props.color === 'info'? '#3186C6':
        props => props.color === 'light'? '#D1D7DC':
        props => props.color === 'white'? '#FFFFFF':
        props => props.color === 'dark'? '#0D2D53':
        props => props.color === 'black'? '#1C1D1F':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };
    color: ${
        props => props.color === 'info'? '#3186C6':
        props => props.color === 'light'? '#5C5C5C':
        props => props.color === 'white'? '#FFFFFF':
        props => props.color === 'dark'? '#0D2D53':
        props => props.color === 'black'? '#FFFFFF':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };
    padding: ${
        props => props.size === 'md'? '12px 20px':
        props.size === 'lg'? '18px 24px':
        '6px 16px'
    };
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
`;

export const ButtonFilled = styled.button<{color?: string; size?: string; br?: number}>`
    cursor: pointer;
    font-weight: 700;
    font-family: 'Lato';
    white-space: nowrap;
    ${
        props => props.br? 'border-radius: ' + props.br + 'px;': ''
    }
    background: ${
        props => props.color === 'info'? '#D1D7DC':
        props => props.color === 'light'? '#D1D7DC':
        props => props.color === 'white'? '#FFFFFF':
        props => props.color === 'dark'? '#0D2D53':
        props => props.color === 'black'? '#1C1D1F':
        props => props.color === 'grey'? '#F2F3F5':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };
    border: 0.8px solid ${
        props => props.color === 'info'? '#D1D7DC':
        props => props.color === 'light'? '#D1D7DC':
        props => props.color === 'white'? '#FFFFFF':
        props => props.color === 'dark'? '#0D2D53':
        props => props.color === 'black'? '#1C1D1F':
        props => props.color === 'grey'? '#D1D7DC':
        props.color === 'secondary'? props.theme.secondaryColor:
        props.theme.primaryColor
    };

    color: ${
        props => props.color === 'white'? props.theme.primaryColor:
        props.color === 'grey'? '#5C5C5C':
        '#FFF'
    };
    padding: ${
        props => props.size === 'md'? '12px 20px':
        props.size === 'lg'? '18px 24px':
        '6px 16px'
    };
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
`;