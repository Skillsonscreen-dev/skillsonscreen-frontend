import styled from 'styled-components';

export const SkillCardItem = styled.div<{featured: boolean}>`    
    ${
        props => props.featured?
        `
            min-width: 759px;
            display: flex;
            gap: 40px;
            height: 160px;
        `:
        `
            width: 100%;
            @media screen and (min-width: 540px) {
                display: flex;
                gap: 40px;
            }
            @media screen and (min-width: 880px) {
                width: calc(50% - 20px);
            }
        `
    }
    
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        ${
            props => props.featured?
            `
                width: 40%;
            `:
            `
                height: 200px;
                width: 100%;
                @media screen and (min-width: 540px) {
                    width: 50%;
                    height: 100%;
                }
            `
        }
        
        img {
            object-fit: cover;
            min-height: 100%;
        }
    }

    .content {
        width: 100%;
        @media screen and (min-width: 540px) {
            width: 50%;
        }
        .head-col {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0px;

            span {
                :first-child {
                    color: #5C5C5C;
                    font-size: 12px;
                    font-weight: 400;
                }
                :last-child {
                    font-family: 'Lato';
                    font-weight: 600;
                    font-size: 16px;
                }
            }
        }

        h3 {
            font-size: 18px;
            color: #1C1D1F;
            font-weight: 700;
            margin-bottom: 4px;
            font-family: 'Raleway';
        }
        p {
            font-size: 12px;
            color: #5C5C5C;
        }
        .foot-col {
            margin-top: 20px;
            margin-bottom: 20px;
            ${
                props => props.featured? 
                `   
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `:''
            }

            .stats-col {
                .rat-sec {
                    display: flex;
                    align-items: center;
                    color: #FDB813;
                    margin-bottom: 8px;
                    span {
                        color: #5C5C5C;
                        font-size: 12px;
                        font-weight: 600;
                        margin-right: 9px;
                    }
                
                    svg {
                        font-size: 12px;
                    }
                    .students {
                        color: #898B8D;
                        font-size: 12px;
                        font-weight: 400;
                        margin-left: 9px;
                    }
                }
            }


            .action-col {
                display: flex;
                gap: 15px;
                .fav-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 35px;
                    height: 35px;
                    cursor: pointer;
                }

                img {
                    width: 100%;
                }

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 35px;
                    border-radius: 5px;
                    color: #fff;
                    padding: 0px 16px;
                    background-color: ${props => props.theme.primaryColor};
                    font-size: 12px;
                }
            }
        }
    }

`;