import styled from 'styled-components'

export const Wrapper = styled.div`
    .students{
        margin-top: 1rem;
        margin-left: 1rem;
        .title{
            margin: 1rem 0;
            h4 {
            font-size: 20px;
        }
        p{
            margin-top: 0.3rem;
            margin-bottom: 0.5rem;
        }
        }
        .table {
        width: 100%;
        overflow: scroll;
        margin-bottom: 1rem;

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
        .student{
            display: flex;
            gap: 15px;
            width: 220px;
            a{
                color: #5C5C5C;
                font-weight: 400;
                font-size: 15px;
                padding-top: 6px;
            }
            .student-details{
                display: flex;
                flex-direction: column;
            }
            h5{
                font-size: 15px;
            }
        }
        .progress{
            display: flex;
            gap: 15px;
            align-items: center;
            .progress-bar {
                background: rgba(49, 134, 198, 0.1);
                border-radius: 4px;
                width: 142px;
                height: 8px;
                .bar {
                    background: #3186C6;
                    border-radius: 4px; 
                    /* width: 25%; */
                    z-index: 99;
                    height: 8px;
                }
            }
        }
        .course{
            width: 150px;
        }
        .date{
            width: 120px;
        }
        .enrolled {
            background: #9BC53D;
            color: #ffffff;
            border: 0.5px solid #9BC53D;
            border-radius: 8px;
            padding: 0.5rem;
        }
        .view-detail{
            width: 100px;
            background: #3186C6;
            color: #ffffff;
            padding: 0.5rem;
            border: 1px solid #3186C6;
            border-radius: 5px;
        }
        .img-wrapper{
            width: 50px;
        }
        img {
            border-radius: 50%;
            width: 50px;
            height: 50px;
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
`;