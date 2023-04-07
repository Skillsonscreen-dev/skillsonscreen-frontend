import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 90px;    
`;
export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 3%;
    h4 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        color: #3186C6;
        margin-bottom: 1rem;
    }
    @media screen and (min-width: 1028px) {
        .cart-content{
         display: flex;
        gap: 1rem;
        justify-content: space-between;
        /* flex-wrap: wrap; */
    } 
    }
`;
export const CartTable = styled.div `
    .table {
        width: 100%;
        overflow: scroll;

        table {
            width: 100%;
            border-collapse: collapse;
        }
        th {
            border-bottom: 1px solid #898B8D;
        }
        td, th {
            text-align: left;
            padding: 1rem 1rem;
            font-size: 14px;
        }
        .course{
            display: flex;
            gap: 20px;
            width: 400px;
            .course-details{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .sub-details {
                display: flex;
                gap: 14px;
                .divide{
                    width: 1px;
                    height: 32px;
                    background-color: #898B8D;
                }
                strong {
                    color: #5C5C5C;
                    font-size: 14px;
                    margin-top: 6px;
                }
            }
        }
        .img-wrapper{
            width: 200px;
        }
        img {
            width: 100%;
            height: 120px;
        }
        .rat-sec {
                display: flex;
                align-items: center;
                
                margin-bottom: 4px;
                span {
                    font-size: 15px;
                    font-weight: 600;
                    margin-right: 4px;
                    color: #5C5C5C;
                }
            
                svg {
                    color: #FDB813;
                    font-size: 15px;
                }
            }
        .student-num{
            color: #898B8D;
            font-weight: 400;
            padding-top: 10px;
        }
        .cart-action {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #3186C6;
            margin-top: 4px;
            text-align: left;
            width: 150px;
            display: block;
            border: none;
            background-color: transparent;
        }
        .sell-price {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 24px;
        }
        .discount-price {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color:  #5C5C5C;
            text-decoration-line: line-through;
            /* text-align: center; */
        }
    }
`
export const Checkout = styled.div`
width: 40%;
margin-top: 2rem;
    .summary{
        display: flex;
        justify-content: space-between;
        span {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
        }
    }
    .total{
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
        p{
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
        }
        span {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
        }
    }
    .checkout-btn{
        background: #3186C6;
        border-radius: 4px;
        width: 100%;
        border: none;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin: 1rem 0;
    }
    .complete-btn {
        background: #909;
    }
    @media screen and (min-width: 1028px) {
       width: 27%; 
    } 
`
export const SectionContainer = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
    h3{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
    }
`;
export const CourseWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 20px;
    overflow-x: auto;
    margin-top: 20px;
     /* Hide scrollbar for Chrome, Safari and Opera */
     -ms-overflow-style: none;  /* 
    IE and Edge */
    scrollbar-width: none; 
     ::-webkit-scrollbar {
        display: none;
    }
`;
export const CourseCard = styled.div`
    flex: 0;
    width: 100%;
    min-width: 320px;
    max-width: 480px;
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        position: relative;
        overflow: hidden;
        img {
            object-fit: cover;
            min-height: 100%;
        }

        .label {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.secondaryColor};
            position: absolute;
            height: 30px;
            padding: 0px 10px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            bottom: 20px;
            right: 0px;
            color: #fff;

            svg {
                margin-right: 4px;
            }
            span {
                font-size: 12px;
                font-weight: 600;
            }
        }
    }

    .head-col {
        display: flex;
        justify-content: space-between;
        padding: 20px 0px;

        span {
            :first-child {
                color: #5C5C5C;
                font-size: 14px;
                font-weight: 400;
            }
            :last-child {
                color: #1C1D1F;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

    h3 {
        font-size: 17px;
        color: #1C1D1F;
    }
    p {
        font-size: 14px;
        color: #5C5C5C;
    }
    .foot-col {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .stats-col {
            .rat-sec {
                display: flex;
                align-items: center;
                color: #FDB813;
                margin-bottom: 4px;
                span {
                    font-size: 15px;
                    font-weight: 600;
                    margin-right: 4px;
                }
            
                svg {
                    font-size: 15px;
                }
            }
            .stutents {
                color: #898B8D;
                font-size: 13px;
                font-weight: 400;
            }
        }


        .action-col {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
            .fav-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #F16108;

                svg {
                    font-size: 23px;
                    color: #fff;
                }
            }

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                border-radius: 5px;
                color: #fff;
                padding: 0px 20px;
                background-color: ${props => props.theme.primaryColor};
            }
        }
    }
`;



