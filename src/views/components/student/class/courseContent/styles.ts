import styled from 'styled-components'

export const Wrapper = styled.div`
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 12px;
    }
`;

export const Chapters = styled.div`
    
`;

export const Chapter = styled.div`
    cursor: pointer;
`;

export const Header = styled.div<{active: boolean;}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 8px;
    ${props => props.active? 'background: #F7F9FA;': ''}
    .info {
        display: flex;
        align-content: center;
        gap: 20px;
        .icon {
            display: flex;
            align-items: center;
        }
        .title {
            font-family: 'Raleway';
            span {
                font-weight: 400;
                font-size: 12px;
                ${props => props.active? 'color: #000000': 'color: #898B8D'};
            }
            h4 {
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                ${props => props.active? 'color: #000000': 'color: #898B8D'};
            }
        }
    }
`;

export const Content = styled.div`
    padding-left: 20px;
`;

export const ContentItem = styled.div`
    display: flex;
    gap: 22px;
    padding-top: 8px;
    padding-bottom: 8px;
    .icon {
        display: flex;
        align-items: flex-start;
    }
    .title {
        font-family: 'Lato';
        h5 {
            font-weight: 400;
            font-size: 14px;
            color: #1C1D1F;
        }
        span {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 10px;
            color: #1C1D1F;
            .cap {
                text-transform: capitalize;
            }            
        }
        svg {
            font-size: 20px;
        }
    }
`