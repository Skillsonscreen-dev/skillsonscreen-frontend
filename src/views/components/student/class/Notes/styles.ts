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
    .notes {
        padding-top: 32px;
        .create-note {
            margin-bottom: 40px;
            .btn-wrapper {
                .button-content {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
            .text-area-wrapper {
                .header {
                    display: flex;
                    justify-content: space-between;
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    color: #1C1D1F;
                    margin-bottom: 8px;
                    .note-length {
                        color: #898B8D;
                        font-weight: 400;
                    }
                }
                textarea {
                    height: 170px;
                    width: 100%;
                    margin-bottom: 8px;border: 1px solid #5C5C5C;
                    background: #F2F3F5;
                    border-radius: 8px;
                    padding: 10px;
                }
                .footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                }
            }
        }
    }
`;

export const FilterContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
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

export const Chapter = styled.div`
    margin-bottom: 26px;
    .header {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 12px;
        color: #5C5C5C;
        margin-bottom: 16px;
        .title {
            font-size: 14px;
            color: #1C1D1F;
        }
    }
    .body {
        display: flex;
        padding: 20px;
        gap: 20px;
        background: #F2F3F5;
        border-radius: 8px;
        .time {
            .info-content {
                font-weight: 800;
                font-size: 10px;
            }
        }
        .content {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #1C1D1F;
        }
    }
`