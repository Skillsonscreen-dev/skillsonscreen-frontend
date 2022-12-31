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
    .discussion {
        padding-top: 20px;
        padding-bottom: 20px;
        .search {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            flex-direction: column;
            gap: 10px;
            .search-input {
                display: flex;
                width: 100%;
                input {
                    padding: 13px 16px;
                    background: #F7F9FA;
                    border: 1px solid #1C1D1F;
                    border-radius: 8px;
                    width: 100%;
                }
                button {
                    padding-left: 30px;
                    padding-right: 30px;
                    margin-left: -8px;
                    display: block;
                }
            }
            @media screen and (min-width: 480px) and (max-width: 720px) {
                flex-direction: row;
                gap: 20px;
            }
            @media screen and (min-width: 840px) {
                flex-direction: row;
            }
            @media screen and (min-width: 1024px) {
                .search-input {
                    width: 60%;
                }
            }
        }
    }
    .comments {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`;

export const FilterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    .sort {
        .sort-buttons {
            display: none;
            margin-right: -12px;
            .sort-item {
                margin-right: 12px;
            }
            span {
                display: none;
                align-items: center;
                @media screen and (min-width: 480px) and (max-width: 720px) {
                    display: flex;
                }
                @media screen and (min-width: 840px) {
                    display: flex;
                }
            }
            @media screen and (min-width: 480px) {
                display: flex;
            }
        }
        .sort-dropdown {
            display: block;
            @media screen and (min-width: 480px) {
                display: none;
            }
        }
    }
`

export const Comment = styled.div`
    width: 100%;
    .chapter {
        span {
            font-family: 'Raleway';
            font-weight: 700;
            font-size: 12px;
            color: #3186C6;
            margin-bottom: 10px;
            display: block;
            white-space: nowrap;
        }
    }
    .body {
        margin-bottom: 15px;
        h6 {
            font-family: 'Lato';
            font-weight: 700;
            font-size: 18px;
            color: #3186C6;
            margin-bottom: 10px;
        }
        p {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            color: #000000;
            margin-bottom: 15px;
        }
        .footer {
            .details {
                display: flex;
                gap: 8px;
                align-items: center;
                .commenter {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                }
                span {
                    font-family: 'Lato';
                    font-weight: 400;
                    font-size: 14px;
                    color: #000000;
                }
            }
            .interactions {
                display: flex;
                gap: 15px;
                padding: 10px 0;
                span {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    font-family: 'Lato';
                    font-weight: 700;
                    font-size: 12px;
                    color: #000000;
                }
            }
        }
    }    
    @media screen and (min-width: 480px) and (max-width: 720px) {
        display: flex;
        gap: 20px;
        .footer {
            display: flex;
            justify-content: space-between;
            .caption {
                display: none !important;
            }
        }
    }
    @media screen and (min-width: 840px) {
        display: flex;
        gap: 40px;
        .footer {
            display: flex;
            justify-content: space-between;
            .caption {
                display: none !important;
            }
        }
    }
    @media screen and (min-width: 1024px) {
        .footer {
            .caption {
                display: inline !important;
            }
        }
    }
`;