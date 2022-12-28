import styled from 'styled-components'

export const Wrapper = styled.div`
    .img-wrapper {
        overflow: hidden;
        max-height: 350px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;        
        img {
            object-fit: cover;
            width: 100%;
        }
        .overlay {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: #1C1D1F;
            opacity: 0.6;
            cursor: pointer;
            svg {
                color: #F2F3F5;
                height: 70px;
                width: 70px;
                @media screen and (min-width: 540px) and (max-width: 720px) {
                    height: 100px;
                    width: 100px;
                }

                @media screen and (min-width: 1080px) {
                    height: 100px;
                    width: 100px;
                }
            }
        }
        
    }
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        padding-bottom: 0;
        justify-content: center;
        h3 {
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 28px;
            letter-spacing: -1px;
            color: ${props => props.theme.primaryColor};
            margin-bottom: 4px;
        }
        p {
            font-size: 14px;
            color: #1C1D1F;
            margin-top: 10px;
            margin-bottom: 10px;
            line-height: 22px;
        }
    }

    @media screen and (min-width: 720px) {
        display: flex;
        align-items: stretch;
        gap: 30px;
        .img-wrapper {
            width: 50%;
            min-width: 50%;
        }
        .content {
            padding-top: 20px;
            padding-bottom: 20px;
            h3 {
                font-size: 36px;
            }
        }
    }    
`;