import styled from 'styled-components'

export const Wrapper = styled.div`
    
`;
export const Navigation = styled.div`
    ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 0.8rem;
   
    @media screen and (max-width: 1080px) {
        width: 100%;
        overflow: scroll;
        li:last-child {
        .link{
            width: 200px;
        }
    }
    }
    
    }
    .link{
        color: #5c5c5c;
        display: flex;
        align-items: center;
        flex: 1;
        gap: 10px;
        padding: 0.6rem 1rem;
        span{
            align-self: center;
            font-size: 22px;
            padding-top: 5px;
        }
        p{
            font-size: 16px;
        }
    }
    .link:hover{
        background: #3186C6;
        border-radius: 12px;
        color: #FFFFFF;
    }

    
`;
export const ModalContainer = styled.div`
   position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    .modal{
        width: 80%;
        margin: 200px auto;
        background: #FFFFFF;
        border-radius: 20px;
        color: #1C1D1F;
        padding: 1rem;
        h5{
            font-size: 20px;
        }
        .course-title{
            display: flex;
            gap: 15px;
            margin: 1rem 0;
            align-items: center;
            justify-content: start;
            .img-wrapper{
            width: 100px;
        }
        img {
            width: 100%;
            height: 80px;
        }
        }
       
    }
    .course-content{
            display: flex;
            gap: 40px;
            .intro{
                width: 60%;
            }
            strong{
                display: block;
                margin: 0.5rem 0;
            }
            .more-details{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                
            }
        }
        .actions{
            margin: 1.5rem 0;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            button {
                cursor: pointer;
                background: #3186C6;
                border-radius: 8px;
                color: #FFFFFF;
                padding: 1rem;
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                border: none;
                gap: 10px;
                svg{
                    font-size: 16px;
                }
            }
            .del{
                margin-left: auto;
                background: rgba(252, 46, 46, 0.05);
                color: #FC2E2E;
            }
        }
        p{
            font-weight: 300;
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
    @media screen and (max-width: 1008px) {
        padding-top: 160px;
        .course-content{
            display: flex;
            flex-direction: column;
            .intro{
                width: 100%;
            }
        }
        .actions {
            .del{
                margin-left: 0;
            }
        }
    }
    @media screen and (max-width: 400px) {
        padding-top: 500px;
    }
    
`;