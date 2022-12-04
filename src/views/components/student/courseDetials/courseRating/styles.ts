import styled from 'styled-components'

export const Wrapper = styled.div`
    
`;

export const Summary = styled.div`
    margin-bottom: 40px;
    @media screen and (min-width: 720px) {
        margin-bottom: 80px;
    }
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    border: 1px solid #5C5C5C;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    padding: 20px;
    width: 100%;
    max-width: 530px;
    @media screen and (min-width: 480px) {
        padding: 20px 60px;
    }
    span {
        font-family: 'Raleway';
    }
    .rat-sec {
        display: flex;
        align-items: center;
        svg {
            color: #FDB813;
            font-size: 16px;
            margin-right: 2px;
            display: none;
            @media screen and (min-width: 480px) {
                display: inline;
            }
        }
        .rat-txt {
            margin-left: 5px;
        }
    }
`;

export const Ratings = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media screen and (min-width: 480px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const RatingCard = styled.div`
    width: 100%;
    border: 0.4px solid #5C5C5C;
    padding: 20px;
    .header {
        display: flex;
        gap: 16px;
        align-items: stretch;
        margin-bottom: 20px;
        .image {
            display: flex;
            align-items: center;
            height: 56px;
            width: 56px;
            img {
                border-radius: 50%;
                object-fit: cover;
                height: 100%;
            }
        }
        .title {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h6 {
                font-family: 'Raleway';
                font-weight: 700;
                font-size: 16px;
                color: #1C1D1F;
            }
            .rat-sec {
                color: #FDB813;
                font-size: 8px;
                display: flex;
                align-items: center;
                gap: 3px;
                svg {
                    font-size: 12px;
                }
            }
            .dash {
                width: 37px;
                border-bottom: 0.8px solid #5C5C5C;
            }
        }
    }
    .body {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 12px;
        color: #1C1D1F;
        margin-bottom: 20px;
    }
    .footer {
        display: flex;
        align-items: center;
        gap: 12px;
        span {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 8px;
            color: #5C5C5C;
        }
    }

    @media screen and (min-width: 720px) {
        width: calc(50% - (25px/2));
    }

    @media screen and (min-width: 1080px) {
        width: calc(33.33% - (50px/3));
    }
`