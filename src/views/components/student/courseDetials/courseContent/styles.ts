import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 40px 20px;
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 12px;
    }
    .content {
        .info-pill {
            width: 100%;
            max-width: 400px;
            display: inline-flex;
            margin-bottom: 20px;
            .info-content {
                display: inline-flex;
                align-items: center;
                gap: 16px;
                justify-content: space-between;
                font-size: 18px;
                overflow-x: auto;
                scrollbar-width: none;
            }            
            span {
                font-family: 'Lato';
                font-style: normal;
                font-size: 14px;
            }
        }
    }
`;

export const Chapters = styled.div`
    
`;

export const Chapter = styled.div`
    
`;

export const Header = styled.div`
    border-bottom: 0.8px solid #898B8D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
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
                color: #000000;
            }
            h4 {
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                color: #000000;
            }
        }
        .length {
            display: none;
            @media screen and (min-width: 720px) {
                display: flex;
                align-items: flex-end;
                font-family: 'Lato';
                font-weight: 400;
                font-size: 12px;
                letter-spacing: -0.02em;
                color: #1C1D1F;
                padding-left: 20px;
            }            
        }
    }
    .complete-status {
        .complete-button {
            align-items: center;
            gap: 8px;
        }
        .big {
            display: none;
        }
        .small {
            display: inline-flex;
        }
        @media screen and (min-width: 720px) {
            .big {
                display: inline-flex;
            }
            .small {
                display: none;
            }
        }   
    }
`;

export const Content = styled.div`
    border-bottom: 0.8px solid #898B8D;
    padding: 18px 0;
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