import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 90px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99999999;
    filter: drop-shadow(0px 4px 8px rgba(137, 139, 141, 0.1));
`;
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px 4%;
    flex: 1;

    .site-logo {
        height: 40px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
        .logo-image {
            display: none;
        }
        .icon-image {
            display: block;
        }
    }

    .cart-sec {
        position: relative;
        margin: 8px 10px 0px 20px;
        svg {
            font-size: 20px;
            color: #1C1D1F;
        }
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            right: -9px;
            top: -9px;
            font-size: 11px;
            color: #fff;
            background-color: ${props => props.theme.primaryColor};
        }
    }

    .first-nav-sec {
        display: flex;
        flex: 1;
        align-items: center;

        .search-wrapper {
            margin-left: 20px;
            display: flex;
            flex: 1;
            max-width: 600px;
            align-items: center;
            background: #F7F9FA;
            border: 1px solid #5C5C5C;
            border-radius: 12px;
            height: 40px;
            padding: 0px 10px;

            input {
                height: 100%;
                flex: 1;
                background-color: transparent;
                border: none;
                padding-left: 10px;
            }

            svg {
                font-size: 18px;
                color: #898B8D;
            }
        }
    }
    
    .categories {
        display: none;
        margin: 0px 10px 0px 20px;
        color: #1C1D1F;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
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

export const NavWrapper = styled.nav<{navigationState: boolean}>`
    visibility: ${props => props.navigationState ? "visible" : "hidden"};
    position: fixed;
    top: 0px;
    left: 0px;
    /* background: #0006; */
    /* height: 100vh;
    width: 100%; */

    ::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        z-index: 999;

        @media screen and (min-width: 990px) {
            background-color: transparent;
            width: 0px;
            height: unset;
        }
    }

    .nav-wrapper {
        width: 240px;
        height: 100vh;
        background: #fff;
        padding: 20px 0px;
        position: relative;
        z-index: 9999;
        left: ${props => props.navigationState ? "0px" : "-240px"};
        top: 0px;
        transition: all 0.2s ease-in-out;

        .nav-logo {
            margin-bottom: 10px;
            padding: 0px 20px 20px 20px;
            border-bottom: 1px solid #ccc;

            img {
                width: 160px;
                margin: 0px auto;
            }
        }

        nav {
            ul {
                display: flex;
                flex-direction: column;

                li {
                    a {
                        display: block;
                        padding: 10px 20px;
                        color: #1C1D1F;
                        white-space: nowrap;
                        font-size: 14px;
                        font-weight: 400;
                        font-family: 'Lato', sans-serif;
                    }
                }
            }
        }

        .auth-nav {
            padding: 0px 20px;
            ul {
                display: flex;
                flex-direction: column;

                li {
                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 50px;
                        padding: 0px 20px;
                        border-radius: 4px;
                        color: #fff;
                        letter-spacing: 0.1px;
                        font-weight: 600;
                        font-family: 'Lato', sans-serif;
                        white-space: nowrap;
                        background: ${props => props.theme.primaryColor};


                        border: 1px solid ${props => props.theme.primaryColor};

                        margin-top: 20px;
                    }

                    :first-child {
                        a {
                            color: ${props => props.theme.primaryColor};
                            background: #fff;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 990px) {
        display: flex;
        visibility: visible;
        align-items: center;
        justify-content: flex-end;
        position: unset;
        top: 0px;
        left: 0px;
        background: unset;
        height: unset;
        width: auto;

        .nav-wrapper {
            display: flex;
            align-items: center;
            position: unset;
            width: unset;
            height: unset;
            background: unset;
            padding: 0px;

            .nav-logo {
                display: none;
            }

            nav {
                margin-right: 20px;
                ul {
                    flex-direction: row;

                    li a {
                        margin-left: 20px;
                        padding: 0px;
                    }
                }
            }

            .auth-nav {
                padding: 0px;
                ul {
                    flex-direction: row;

                    li {
                        a {
                            height: 40px;
                            margin-top: 0px;
                            border: none;
                        }
                        :last-child {
                            margin-left: 20px;
                        }
                    }
                }
            }
        }
    }
`;