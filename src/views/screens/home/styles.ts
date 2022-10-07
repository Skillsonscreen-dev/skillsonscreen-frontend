import styled from 'styled-components'

export const Wrapper = styled.div`
    
`;
export const Container = styled.div`
    margin-top: 90px;
`;
export const MainSection = styled.main`
    .sec-title {
        font-size: 30px;
        font-weight: 600;
        color: ${props => props.theme.primaryColor};
        margin-bottom: 5px;
    }
    .sec-sub-title {
        font-size: 14px;
        font-weight: 400;
        color: #5C5C5C;
    }
`;
export const Section = styled.section`
    :nth-child(odd) {
        background-color: #f9f9f9;
    }
`;
export const SectionContainer = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 0px;
    .sec-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        a {
            font-size: 14px;
            font-weight: 600;
        }
    }
`;
export const CourseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;
export const CourseCard = styled.div`
    width: 100%;
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