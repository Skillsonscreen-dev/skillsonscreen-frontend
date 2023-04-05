import styled from 'styled-components'

export const Wrapper = styled.div<{ isOpen: boolean }>`
    height: 100%;
    
    ::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.isOpen ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.isOpen ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        z-index: 999;

        @media screen and (min-width: 990px) {
            background-color: transparent;
            width: 0px;
            height: unset;
        }
    }
`;

export const NavContent = styled.div<{ isOpen: boolean }>`
    height: 100%;
    width: ${props => props.isOpen ? '230px' : 0};
    padding: ${props => props.isOpen ? '60px 32px' : 0};
    position: fixed;
    z-index: 9999;
    top: 90px;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.2s;
`;

export const Nav = styled.nav`    
    a {
        padding: 3px;
        margin-bottom: 24px;
        text-decoration: none;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 14px;
        color: #898B8D;
        display: block;
        /* transition: 0.3s; */
        white-space: nowrap;
    }

    a.active {
        font-weight: 800;
        padding-left: 8px;
        border-left: 4px solid ${props => props.theme.primaryColor};
        color: #1C1D1F;
    }

    a:hover {
        color: ${props => props.theme.primaryColor};
    }

    .delete-btn {
        font-family: 'Lato';
        font-weight: 800;
        font-size: 14px;
        color: #FC2E2E;
        cursor: pointer;
    }
`;

export const NavDivider = styled.hr`
    width: 120px;
    height: 0px;
    border: 1px solid #D1D7DC;
    margin-bottom: 24px;
`;