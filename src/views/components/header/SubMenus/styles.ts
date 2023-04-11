import styled from 'styled-components'

export const Wrapper = styled.div`
    .menu-backdrop::before {
        content: "";
        position: fixed;
        top: 90px;
        left: 0px;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2;
        display: flex;

    }
    .categories-menu{
        position: absolute;
        top: 90px;
        z-index: 30;
        display: flex;
        align-items: start;
    }
    .category-menu {
        width: 200px;
        height: auto;
        background-color: #0D2D53;
        display: flex;
        flex-direction: column;
        .category {
            a{
                color: #FFFFFF;
            }
            padding: 16px 10px;
            color: #FFFFFF;
            display: flex;
            justify-content: space-between;

        }
        .view-categories{
            background: #1C1D1F;
            color: #FFFFFF;
            padding: 16px 10px;
            border: none;
            text-align:left;
            font-size: 15px;
        }
        .category:hover{
            background: #3186C6;
        }
    }

    .topic-menu {
        width: 250px;
        height: auto;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 16px;
            .topic{
            display: flex;
            gap: 10px;
            align-items: center;
            .topic-img{
                width: 70px;
              img{
                width: 100%;
              }
            }
            .topic-name{
                h6{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    margin-bottom: 4px;
                    color: #58586B;
                }
                p{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    color: #969696;
                }
            }
        }
    }
    

    .toggle-menu {
        margin-left: 20px;
        display: block;
        cursor: pointer;

        svg {
            font-size: 18px;
            color: #5C5C5C;
        }
    }

    @media screen and (min-width: 990px) {
        .categories {
            display: block;
        }
        .toggle-menu {
            display: none;
        }
    }
    @media screen and (min-width: 1240px) {
        .site-logo {
            height: 40px;
            .logo-image {
                display: block;
            }
            .icon-image {
                display: none;
            }
        }

        .categories {
            margin: 0px 10px 0px 40px;
        }
    }
`;
export const Container = styled.div`
   
`;