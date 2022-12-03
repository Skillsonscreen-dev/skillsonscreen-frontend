import styled from 'styled-components';

export const ProgressBar = styled.div`
    width: 100%;
    height: 7px;    
    background: #ADCFE8;
    display: block;
    border-radius: 2px;
    position: relative;
`;

export const ProgressCount = styled.div<{progress: number}>`
    border-radius: 2px;
    height: 100%;
    background: ${props => props.theme.primaryColor};
    width: ${props => props.progress}%;
`;