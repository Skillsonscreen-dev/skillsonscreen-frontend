import styled from 'styled-components'

export const Wrapper = styled.div`
    .start-banner{
        background: #1C1D1F;
        border-radius: 20px;
        width: 100%;
        height: 240px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        padding: 0 2.5rem;
        margin: 1.5rem 0;
        span{
            font-size: 24px;
            b{
                font-weight: 900;
            }
        }
        button{
            cursor: pointer;
            display: block;
            background: #3186C6;
            padding: 0.8rem;
            font-size: 14px;
            margin: 1rem 0;
            border: none;
            color: #FFFFFF;
            border-radius: 2px;
        }
    }
    .title {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        margin-left: 1rem;

        .search-wrapper {
            margin-left: 20px;
            display: flex;
            flex: 1;
            max-width: 280px;
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
        h4 {
            font-size: 20px;
        }
    }
`;
export const Container = styled.div`
    margin-top: 90px;
    padding: 32px 6%;
    /* position: relative; */
`;