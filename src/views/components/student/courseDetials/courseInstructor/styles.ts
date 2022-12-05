import styled from 'styled-components';

export const Wrapper = styled.div`
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 30px;
    }
`;

export const Content = styled.div`
    .header {
        display: flex;
        align-items: stretch;
        gap: 22px;
        margin-bottom: 24px;
        .image {
            display: flex;
            align-items: center;
            height: 100px;
            width: 100px;
            min-width: 100px;
            img {
                border-radius: 50%;
                object-fit: cover;
                height: 100%;
            }
        }
        .title {
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            .title-lead {
                font-family: 'Raleway';
                h3 {
                    font-weight: 700;
                    font-size: 20px;
                    letter-spacing: -1px;
                    color: #000000;
                    margin-bottom: 0;
                }
                span {
                    font-weight: 300;
                    font-size: 14px;
                    color: #000000;
                }
            }
            .title-foot {
                display: flex;
                justify-content: space-between;
                font-family: 'Lato';
                font-weight: 400;
                font-size: 12px;
                color: #1C1D1F;
                width: 100%;
                max-width: 250px;
                span {
                    display: flex;
                    align-items: stretch;
                    gap: 5px;
                    svg {
                        height: 100%;
                    }
                    .hide {
                        display: none;
                    }
                }
            }
        }
    }
    .body {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #1C1D1F;
        margin-bottom: 24px;
    }
    .footer {
        display: flex;
        gap: 10px;
        .social {
            display: flex;
            align-items: center;
            img {
                margin-right: 10px;
                cursor: pointer;
            }
        }
    }
    @media screen and (min-width: 480px) {
        .footer {
            gap: 30px;
            .social {
                img {
                    margin-right: 20px;
                }
            }
        }
    }
    @media screen and (min-width: 720px) {
        .header {
            .image {
                height: 120px;
                width: 120px;
                min-width: 120px;
            }
            .title {
                .title-lead {
                    h3 {
                        font-size: 28px;
                    }
                }
                .title-foot {
                    max-width: 500px;
                    span {
                        .hide {
                            display: unset;
                        }
                    }
                }
            }
        }        
    }
`;