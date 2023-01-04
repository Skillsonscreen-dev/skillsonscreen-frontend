import styled from 'styled-components'

export const Wrapper = styled.div`
    h4 {
        padding-bottom: 20px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        border-bottom: 1px solid #000000;
    }
    .announcements {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    
`;

export const Announce = styled.div<{border: boolean}>`
    ${props => props.border? 'border-bottom: 0.8px solid #000000;': ''}
    padding-bottom: 40px;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        @media screen and (min-width: 480px) {
            justify-content: flex-start;
            gap: 16px;
        }
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        span {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            color: #000000;
        }
    }
    .body {
        h6 {
            font-family: 'Lato';
            font-weight: 700;
            font-size: 20px;
            color: #5C5C5C;
            margin-bottom: 10px;
        }
        .content {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            color: #000000;
            line-height: 22px;
        }
    }
    .image {
        margin-top: 20px;
        width: 100%;
        max-height: 400px;
        display: flex;
        align-items: center;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
`;