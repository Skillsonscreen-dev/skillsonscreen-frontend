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
            font-family: 'Raleway';
            font-style: normal;
            font-size: 20px;
        }
    }
    .table {
        width: 100%;
        overflow: scroll;

        table {
            width: 100%;
            border-collapse: collapse;
        }
        td, th{
            text-align: left;
            padding: 1.5rem 1rem;
            font-size: 14px;
            border-bottom: 1px solid #898B8D;
            
        }
        .course{
            display: flex;
            gap: 20px;
            width: 390px;
            .course-details{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            /* width: 20% ; */
        }
        .active {
            background: #9BC53D;
            color: #ffffff;
            border: 0.5px solid #9BC53D;
            border-radius: 8px;
            padding: 0.4rem;
        }
        .view-course{
            cursor: pointer;
            width: 100px;
            background: #898B8D;
            color: #ffffff;
            padding: 0.5rem;
            border: 1px solid #898B8D;
            border-radius: 5px;
        }
        .img-wrapper{
            width: 200px;
        }
        img {
            width: 100%;
            height: 140px;
        }
        .rat-sec {
                display: flex;
                align-items: center;
                
                margin-bottom: 4px;
                span {
                    font-size: 15px;
                    font-weight: 600;
                    margin-right: 4px;
                }
            
                svg {
                    color: #FDB813;
                    font-size: 15px;
                }
            }
    }
    .view-modal{
        display: none;
        position: relative;
    }
    .show{
        display: block;
    }
    .pagination{
        margin-top: 2.5rem;
        display: flex;
        align-items: center;
        font-size: 18px;
        gap: 10px;
        justify-content: center;
        svg{
            font-weight: 300;
            font-size: 16px;
            color: #1C1D1F;
        }
        svg:hover {
            color: #3186C6;
            padding: 0.2rem 0.5rem;
        }
        span{
            padding: 0.2rem 0.5rem;
        }
        span:hover{
            cursor: pointer;
            color: #ffffff;
            background: #3186C6;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
export const Container = styled.div`
    margin-top: 90px;
    padding: 32px 6%;
    /* position: relative; */
`;