import styled from 'styled-components'

export const Wrapper = styled.div`
    .title{
        text-align: center;
        margin: 1rem 0;
        h4 {
            color: #3186C6;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            padding: 0.5rem 0;
        }
        p{
            font-weight: 300;
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
        font-size: 14px;
        line-height: 18px; 
        color: #1C1D1F;
    }
    .img-container{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin: 1.5rem 0;
        .img-wrapper{
            /* width: 100%; */
            position: relative;
            width: 200px;
            height: 200px;
            display: flex;
            align-items: center;
            text-align: center;
            img{
                width: 200px;
                height: 200px;
                border-radius: 50%;
            }
        }
        input[type="file"] {
            display: none;
        }
        .uploading-profile-img {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            background-color: #0006;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .actions{
            margin: 0.5rem 0;
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 2.2rem;
            align-items: start;
            input, select, textarea{
            padding: 0.8rem  0.5rem;
            background: #FFFFFF;
            border: 0.8px solid #898B8D;
            border-radius: 4px;
            resize: none;
            }
            >div{
                display: flex;
                flex-direction: column;
                gap: 0.7rem;
                margin-top: 2rem;
                .gender{
                display: flex;
                gap: 20px;
                }
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
            padding: 1rem 1.5rem;
            border-radius: 5px;
            margin: 2.5rem 0;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
        }
    }
    .note-text{
        margin-top: 1rem;
        padding: 1.5rem 0;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        p{
            margin-top: 8px;
        }
    }
    .check {
        display: flex;
        align-items: start;
        input {
            margin-top: 0.3rem;
        }
        gap: 8px;
        padding-bottom: 1rem;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
    .payout {
        h4{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px; 
        color: #1C1D1F;
        margin-top: 1.5rem;
        padding-bottom: 8px;
        }
        .account-detail {
            width: 100%;
            background: #F2F3F5;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 0.8rem;
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
    }
    .account-form {
        display: flex;
        gap: 1.5rem;
        flex-direction: column;
        margin-top: 1rem;
        input{
            padding: 0.8rem  0.5rem;
            background: #FFFFFF;
            border: 0.8px solid #898B8D;
            border-radius: 4px;
            display: block;
            width: 50%;
            margin-top: 8px;
            }
       
    }
    .acct-action {
            background: #1C1D1F;
            border-radius: 8px;
            color: #FFFFFF;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            padding: 0.8rem 1rem;
            margin-top: 16px;
            border: none;
            display: flex;
            align-items: center;
            gap: 4px;
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
            }
`;
export const Container = styled.div`
    margin-top: 90px;
    padding: 32px 8%;
    /* position: relative; */
`;