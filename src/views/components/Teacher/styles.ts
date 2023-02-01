import styled from 'styled-components'

export const Wrapper = styled.div`
    .container {
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 90px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99999999;
    filter: drop-shadow(0px 4px 8px rgba(137, 139, 141, 0.1));
    }
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
    overflow-y: scroll;
    padding-top: 160px;
    .close-btn {
        display: flex;
        justify-content: end;
        margin: 1rem 0;
        width: 90%;
        color: #FFFFFF;
        cursor: pointer;
        svg{
            font-size: 24px;
        }
    }
    .modal{
        width: 80%;
        margin:0 auto;
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
            word-spacing: 0.2rem;
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
    @media screen and (max-width: 1020px) {
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
export const StudentModalContainer = styled.div`
   position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
    overflow-y: scroll;
    padding-top: 160px;
    .close-btn {
        display: flex;
        justify-content: end;
        margin: 1rem 0;
        width: 90%;
        color: #FFFFFF;
        cursor: pointer;
        svg{
            font-size: 24px;
        }
    }
    .modal{
        width: 80%;
        margin:0 auto;
        background: #FFFFFF;
        border-radius: 40px;
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
            width: 80px;
        }
        img {
            width: 100%;
            border-radius: 50%;
            height: 80px;
        }
        }
       
    }
    .course-content{
            display: flex;
            gap: 20px;
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
                border-radius: 8px;
                
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
            .report{
                margin-left: auto;
                background: #1C1D1F;
                color: #FC2E2E;
                color: #FFFFFF;
            }
        }
        p{
            font-weight: 300;
            word-spacing: 0.2rem;
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
    @media screen and (max-width: 1020px) {
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
export const AddLectureModalContainer = styled.div`
   position: fixed;
   list-style-type: inherit !important;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
    overflow-y: scroll;
    padding-top: 160px;
    .close-btn {
        display: flex;
        justify-content: end;
        margin: 1rem 0;
        width: 90%;
        color: #FFFFFF;
        cursor: pointer;
        svg{
            font-size: 24px;
        }
    }
    .ck-editor__editable_inline {
    padding: 0 30px !important;
}

    h5{
        font-size: 20px;
        font-weight: 500;
    }
    label {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px; 
        color: #1C1D1F;
        display: block;
    }
    .modal{
        width: 80%;
        margin:0 auto;
        background: #FFFFFF;
        border-radius: 20px;
        color: #1C1D1F;
        padding: 1rem;
        .lecture-details {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            margin-bottom: 1rem;
            input, select{
            padding: 0.5rem  0.5rem;
            background: #FFFFFF;
            border: 0.8px solid #898B8D;
            border-radius: 4px;
            margin-right: 10px;
            margin-top: 8px !important;
            }
            .duration{
                display: flex;
                align-items: center;
                gap: 10px;
                select{
                margin-top: -2px !important;
                }
            }
            
        }
        .editor{
            margin: 2rem 0;
        }
        .upload {
            margin: 2rem 0;
            display: flex;
            justify-content: space-between;
            button{
                background: #3186C6;
                color: #FFFFFF;
                padding: 0.6rem 0.8rem;
                border: none;
                border-radius: 8px;
            }
        }
        .img-container{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        /* margin: 2rem 0; */
        .img-wrapper{
            display: flex;
            align-items: center;
            text-align: center;
            
            video{
                width: 350px;
            }
        }
        .btn-dark{
            border: none;
            background: #1C1D1F;
            color: #fff;
            font-size: 16px;
            padding: 1rem;
            border-radius: 8px;
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 700;
        }
        input[type="file"] {
        display: none;
        }
        .actions{
            display: flex;
            align-items: center;
            gap: 8px;
        }
        p{
            font-weight: 400;
            color: #898B8D;
        }
        
    }
       
    }

    @media screen and (max-width: 1020px) {

    }
    @media screen and (max-width: 400px) {
        padding-top: 500px;
    }
    
`;
export const THeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0px 4%;
    flex: 1;

    .site-logo {
        height: 40px;
        img {
            max-width: 100%;
            max-height: 100%;
        }
        .icon-image {
            display: none;
        }
    }

    .toggle-menu {
        margin-left: 20px;
        display: block;
        cursor: pointer;

        svg {
            font-size: 18px;
            color: #5C5C5C;
        }
    }

    @media screen and (min-width: 990px) {
        .toggle-menu {
            display: none;
        }
    }
    @media screen and (min-width: 1240px) {
        .site-logo {
            height: 40px;
            .logo-image {
                display: block;
            }
            .icon-image {
                display: none;
            }
        }

        .categories {
            margin: 0px 10px 0px 40px;
        }
    }
`;
export const NavWrapper = styled.nav<{navigationState: boolean}>`
    visibility: ${props => props.navigationState ? "visible" : "hidden"};
    position: fixed;
    top: 0px;
    left: 0px;
    /* background: #0006; */
    /* height: 100vh;
    width: 100%; */

    ::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        z-index: 999;

        @media screen and (min-width: 990px) {
            background-color: transparent;
            width: 0px;
            height: unset;
        }
    }

    .nav-wrapper {
        width: 240px;
        height: 100vh;
        background: #fff;
        padding: 20px 0px;
        position: relative;
        z-index: 9999;
        left: ${props => props.navigationState ? "0px" : "-240px"};
        top: 0px;
        transition: all 0.2s ease-in-out;

        .nav-logo {
            margin-bottom: 10px;
            padding: 0px 20px 20px 20px;
            border-bottom: 1px solid #ccc;

            img {
                width: 160px;
                margin: 0px auto;
            }
        }

        nav {
            ul {
                display: flex;
                flex-direction: column;
                align-items: center;

                li {
                    
                    a {
                        display: block;
                        padding: 10px 20px;
                        color: #1C1D1F;
                        white-space: nowrap;
                        font-size: 14px;
                        font-weight: 400;
                        font-family: 'Lato', sans-serif;
                        svg{
                            font-size: 18px;
                            font-weight: 400;
                        }
                        span{
                            display: none;
                        }
                        @media screen and (max-width: 990px) {
                           svg{
                            display: none;
                           }
                        }
                    }
                    .teacher{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                            img{ 
                                width: 35px;
                                height: 35px;
                                border-radius: 50%;
                            }
                    }
                }
            }
        }

    }

    @media screen and (min-width: 990px) {
        display: flex;
        visibility: visible;
        align-items: center;
        justify-content: flex-end;
        position: unset;
        top: 0px;
        left: 0px;
        background: unset;
        height: unset;
        width: auto;

        .nav-wrapper {
            display: flex;
            align-items: center;
            position: unset;
            width: unset;
            height: unset;
            background: unset;
            padding: 0px;

            .nav-logo {
                display: none;
            }

            nav {
                margin-right: 20px;
                ul {
                    flex-direction: row;

                    li a {
                        margin-left: 20px;
                        padding: 0px;
                    }
                }
            }

        }
    }
`;