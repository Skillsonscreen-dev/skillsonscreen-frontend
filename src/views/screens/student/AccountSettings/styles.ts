import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 90px;    
`;
export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
    h1 {
        text-align: center;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 28px;
        letter-spacing: -1px;
        color: ${ props => props.theme.primaryColor };
        width: 100%;
    }

`;

export const TopNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .hamburger {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    @media screen and (min-width: 720px) {
        justify-content: center;
        .hamburger {
            display: none;
        }
    }
`

export const Layout = styled.div`
    display: flex;
    gap: 50px;
    padding: 40px 0;
    .mobile-nav {
        display: block;
    }

    .desktop-nav {
        display: none;
    }

    @media screen and (min-width: 720px) {
        .mobile-nav {
            display: none !important;
        }
    
        .desktop-nav {
            display: block;
        }
    }
`

export const Content = styled.div`
    width: 100%;
    .account-settings {
        margin-bottom: 40px;
    }

    .notifications {
        .box {
            padding: 20px 16px;
            border: 0.5px solid #898B8D;
            border-radius: 4px;
            min-height: 64px;
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 12px;
            .text {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 14px;
                color: #1C1D1F;
            }
        }
    }

    h2 {
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -1px;
        color: #1C1D1F;
    }

    .label {
        font-family: 'Lato';
        font-weight: 800;
        font-size: 12px;
        color: #1C1D1F;
        margin-bottom: 6px;
    }

    .input-group {
        margin-bottom: 20px;
        .input-subgroup {
            svg {
                position: absolute;
                margin-left: -30px;
                margin-top: 11px;
                cursor: pointer;
            }
        }
        input {
            padding: 12px 16px;
            width: 420px;
            height: 42px;
            background: #FFFFFF;
            border: 0.5px solid #898B8D;
            border-radius: 4px;
            width: 100%;
            margin-bottom: 8px;
        }
    }

    .save-cover {
        button {
            padding-left: 32px;
            padding-right: 32px;
        }
    }
`

export const Flex = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 840px) {
        flex-direction: row;
        gap: 32px;
        > * {
            width: 50%;
        }
    }
`