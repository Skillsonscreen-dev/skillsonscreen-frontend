import styled from 'styled-components'

export const CategoryCardItem = styled.div`
    width: 100%;
    background: #F7F9FA;
    @media screen and (min-width: 720px) {
        flex-direction: row;
        width: calc(50% - 17.5px);
    }
    .category-link {
        min-height: 150px;
        display: flex;
        .img-wrapper {
            flex: 6;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            img {
                object-fit: cover;
                min-height: 86px;
                height: 100%;
            }
        }
        .content {
            flex: 7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            padding: 20px 25px;
            h3 {
                font-size: 17px;
                color: ${props => props.theme.primaryColor};
                margin-bottom: 5px;
                font-family: 'Raleway';
                font-weight: 700;
                font-size: 22px;
                @media screen and (min-width: 480px) {
                    font-size: 28px;
                }
                @media screen and (min-width: 991px) {                    
                    font-size: 32px;
                }
            }
            p {
                font-size: 14px;
                color: #5C5C5C;
                .seperator {
                    margin-left: 8px;
                    margin-right: 8px;
                }
            }
        }
    }
`;