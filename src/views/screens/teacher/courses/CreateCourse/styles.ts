import styled from 'styled-components'

export const Wrapper = styled.div`
.course-content-header{
    margin-top: 90px;
    width: 100%;
    background-color: #3186C6;
    display: flex;
    /* justify-content: center; */
    padding: 1.8rem 7%;
    ul{
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        gap: 16px;
        li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 300;
            font-size: 16px;
            color: #ADCFE8;
            cursor: pointer;
        }
    }
}
    h5{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        padding-top: 1rem;
        margin-bottom: 1rem;
    }
    label {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px; 
        color: #1C1D1F;
    }
    .img-container{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 2rem 0;
        .img-wrapper{
            display: flex;
            align-items: center;
            text-align: center;
            
            img{
                width: 250px;
            }
        }
        input[type="file"] {
        display: none;
        }
        .actions{
            margin: 0.8rem 0;
        }
        .btn-primary {
            cursor: pointer;
            background-color: #3186C6;
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin-right: 1rem;
        }
        .btn-secondary {
            background-color: #F2F3F5;
            color:#5C5C5C;
            border: 1px solid #D1D7DC;
            padding: 0.5rem 1rem; 
            border-radius: 5px;
        }
        p{
            font-weight: 400;
            color: #898B8D;
        }
        
    }
    .form-container{
            display: grid;
            column-gap: 2.2rem;
            align-items: start;
            input, select, textarea{
            padding: 0.8rem  0.5rem;
            background: #FFFFFF;
            border: 0.8px solid #898B8D;
            border-radius: 4px;
            }
            .answer{
            padding: 0.8rem  0.5rem;
            background: #FFFFFF;
            border: 0.8px solid #898B8D;
            border-radius: 4px;
            font-size: 14px;
            color: #1C1D1F;
            
            }
            .add {
                background: #F2F3F5;
                border-radius: 8px;
                width: 64px;
                padding: 0.5rem;
                border: none;
                font-size: 14px;
                font-weight: 500;
                color: #1C1D1F;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            section {
                display: flex;
                justify-content: space-between;
                gap: 15%;
                
                div{
                    margin-top: 1.5rem;
                    width: 100%;
                }
                select {
                    display: block;
                    width: 100%;
                    margin-top: 0.3rem;
                }
            }
            >div{
                display: flex;
                flex-direction: column;
                gap: 0.7rem;
                margin-top: 2rem;
                .about{
                    margin-top: 0.5rem;
                    display: flex;
                    justify-content: space-between;
                    .about-length{
                        color: #898B8D;
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }
            }
            
        }

    .save {
        display: flex;
        justify-content: space-between;
        button {
            cursor: pointer;
            background-color: #3186C6;
            color: #fff;
            border: none;
            padding: 0.8rem 1rem;
            border-radius: 5px;
            margin: 2.5rem 0;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
        }
        .add-chapter {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            color: #3186C6;
            border: 1px solid #3186C6;
            background-color: #FFFFFF;
        }
    }
    .price {
        p {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
        >p {
            margin: 1.2rem 0;
        }
        .money{
            display: flex;
            align-items: center;
            gap: 1rem;
            div, input{
            padding: 0.8rem  1rem;
            background: #FFFFFF;
            border: 1px solid #898B8D;
            border-radius: 4px;
            font-size: 18px;
            }
            input{
                width: 150px;
            }
        }
    }

    .course-upload {
        background: #F7F9FA;
        border-radius: 16px;
        margin-top: 1rem;
        .chapter-head {
            background: #1C1D1F;
            border-radius: 8px;
            color: #fff;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1rem;
            .icon {
                display: flex;
                justify-content: center;
                font-size: 20px;
            }
            div {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
                button {
                    background: #FFFFFF;
                    border-radius: 8px;
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    color: #1C1D1F;
                    border: none;
                    padding: 0.7rem;
                    cursor: pointer;
                }
                .delete{
                    background: #FC2E2E;
                    border-radius: 8px;
                    color: #FFFFFF;
                }
            }
            p {
                font-size: 16px;
                font-weight: 300;
            }
            .chapter-title {
                font-weight: 600;
            }
        }
        .chapter-details {
            padding: 1rem 2rem;
            input{
            padding: 0.8rem  0.5rem;
            background: #FFFFFF;
            border: 1px solid #898B8D;
            border-radius: 4px;
            display: block;
            width: 100%;
            color: #1C1D1F;
            margin: 0.5rem 0;
            }
            >div{
                margin-top: 2rem;
            }
            .lecture-detail {
            width: 100%;
            background: #F2F3F5;
            border-radius: 8px;
            margin: 1rem 0;
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 1rem;
            align-items: center;
            div{
                display: flex;
                gap: 8px;
                align-items: center;
                strong{
                    font-size: 14px;
                }
            }
            .bank {
                font-size: 24px;
                font-weight: 700;
                height: 100%;
                color: #000000;
            }
            .edit {
                background: #FFFFFF;
                border-radius: 8px;
                color: #3186C6;
                font-size: 18px;
                padding: 0.3rem 0.5rem;
                border: none;
                cursor: pointer;
            }
            .delete {
                background: #3186C6;
                border-radius: 8px;
                color:  #FFFFFF;
                font-size: 18px;
                padding: 0.3rem 0.5rem;
                border: none;
                cursor: pointer;
            }

        }
        .btn-dark{
            border: none;
            background: #1C1D1F;
            color: #fff;
            font-size: 16px;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
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
 
        @media screen and (max-width:1018px){
                .form-container{
                    display: block;
                }
                .title {
                    h4{
                    font-size: 20px;
                     }
                }
                .account-form {
                    input{
                        width: 100%;
                    }
                }
                section {
                    flex-direction: column;
                }
            }
`;
export const Container = styled.div`
    margin-top: 10px;
    padding: 32px 7%;
    /* position: relative; */
`;