import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #1C1D1F;
`;
export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 60px 20px 20px 20px;
`;
export const TopSection = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 20px;

    @media screen and (min-width: 720px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;
export const Logo = styled.div`
    width: 150px;
    margin-right: 20%;
    margin-bottom: 40px;
`;
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 200px;
    width: 100%;
    flex: 1;

    ul {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        li {
            display: block;
            margin-bottom: 20px;
            a {
                display: block;
                color: #fff;
                font-size: 13px;
                font-weight: 400;
            }
        }

        @media screen and (min-width: 480px) {
            width: 50%;
        }

        @media screen and (min-width: 960px) {
            width: unset;
        }
    }

    @media screen and (min-width: 480px) {
        flex-direction: row;
    }
    @media screen and (min-width: 720px) {
        width: unset;
        justify-content: space-between;
    }
`;
export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #5C5C5C;
    padding: 40px 0px 20px 0px;

    .credits {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        span {
            color: #fff;

            :first-child {
                font-size: 20px;
                margin-right: 10px;
            }
            :last-child {
                font-size: 14px;
                font-weight: 400;
            }
        }
        @media screen and (min-width: 720px) {
            margin-bottom: 0px;
        }
    }

    .social {
        display: flex;
        gap: 10px;
    }

    @media screen and (min-width: 720px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const SocialItem = styled.a`
    display: block;
    color: #898B8D;
    font-size: 30px;
    cursor: pointer;
`