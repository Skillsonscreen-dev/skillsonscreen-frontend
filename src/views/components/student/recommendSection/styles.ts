import styled from 'styled-components'

export const SectionContainer = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
    .sec-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h3 {
            color: #000000;
        }
        a {
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            margin-left: 10px;
            color: #5C5C5C;
            text-decoration: underline;
        }
        margin-bottom: 20px;
    }
    
`;
export const RecommendWrapper = styled.div`
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
export const RecommendCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #F2F3F5;
    @media screen and (min-width: 720px) {
        flex-direction: row;
    }
    .img-wrapper {
        flex: 2;
        min-width: 360px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        @media screen and (min-width: 720px) {
            width: 35%;
        }
        img {
            object-fit: cover;
            min-height: 86px;
            height: 100%;
        }
    }
    .content {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 20px 25px;
        h3 {
            font-size: 17px;
            color: #1C1D1F;
            margin-bottom: 5px;
            font-family: 'Raleway';
            @media screen and (min-width: 991px) {                    
                font-size: 28px;
            }
        }
        .progress {
            display: flex;
            align-items: center;
            span {
                font-size: 10px;
                font-weight: 600;
                color: #1C1D1F;
                margin-left: 9px;
            }
        }
        
        p {
            font-size: 14px;
            color: #5C5C5C;
        }
        .foot-col {
            .course-info {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 14px;
                color: #5C5C5C;
                margin-top: 35px;
                margin-bottom: 25px;
                margin-left: -10px;
                @media screen and (min-width: 991px) {                    
                    margin-left: -17px;
                }
                span {
                    padding-right: 10px;
                    padding-left: 10px;
                    @media screen and (min-width: 991px) {                    
                        padding-right: 17px;
                        padding-left: 17px;
                    }
                }
            }
            .stats-col {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                .rat-sec {
                    display: flex;
                    align-items: center;
                    color: #FDB813;
                    margin-bottom: 4px;
                    margin-left: 37px;
                    gap: 6px;
                    span {
                        font-size: 15px;
                        font-weight: 600;
                        margin-right: 4px;
                        color: #000;
                    }
                    .rat-vol {
                        color: #5C5C5C;
                        font-weight: 400;
                    }
                
                    svg {
                        font-size: 15px;
                    }
                }
                .students {
                    color: #898B8D;
                    font-size: 13px;
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                    gap: 3px;
                }
            }
            hr {
                border: 0;
                border-top: 1px solid #898B8D;
                width: 60%;
                display: none;
                @media screen and (min-width: 720px) {
                    display: block;
                }
                @media screen and (min-width: 991px) {
                    width: 40%;
                }
            }
    
            .action-col {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 400px;
                gap: 15px;
                margin-top: 15px;
                h3 {
                    font-family: 'Lato';
                    font-weight: 600;
                    font-size: 20px;
                }
                .price-box {
                    width: 130px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                   .fav-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background-color: #F16108;
        
                        svg {
                            color: #fff;
                        }
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
                    float: right;
                }
            }

            .foot-info {
                font-family: 'Lato';
                font-weight: 400;
                font-size: 12px;
                color: #5C5C5C;
                margin-top: 20px;
            }
        }
    }
`;