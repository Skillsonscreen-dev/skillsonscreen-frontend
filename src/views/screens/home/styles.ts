import styled from 'styled-components'

export const Wrapper = styled.div`
    
`;
export const Container = styled.div`
    margin-top: 90px;
`;
export const MainSection = styled.main`
    .sec-title {
        font-size: 25px;
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
    background-color: #f9f9f9;
`;
export const SectionContainer = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
    .sec-row {
        display: flex;
        justify-content: space-between;

        a {
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            margin-left: 10px;
        }
        margin-bottom: 20px;
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

export const TrustSection = styled.section`
    background-color: #fff;
`;
export const TrustSectionContainer = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 80px 20px;
    
    h3 {
        font-size: 20px;
        font-weight: 800;
        color: #000;
        text-align: center;
        margin-bottom: 15px;
    }
    h4 {
        color: #58586B;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
    }

    @media screen and (min-width: 720px) {
        h3 {
            font-size: 30px;
        }
    }
`;
export const TrustItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 20px;
    overflow-x: auto;
    /* Hide scrollbar for Chrome, Safari and Opera */
    -ms-overflow-style: none;  /* 
    IE and Edge */
    scrollbar-width: none; 
    ::-webkit-scrollbar {
        display: none;
    }
    @media screen and (min-width: 720px) {
        justify-content: space-between;
    }
`;
export const TrustItem = styled.div`
    width: 100%;
    min-width: 80px;
    max-width: 120px;
    margin-top: 20px;
    img {
        width: 100%;
    }
    @media screen and (min-width: 720px) {
        min-width: unset;
    }
`;


export const ExploreSection = styled.section`
    background-color: #f9f9f9;
`;
export const ExploreSectionContainer = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;

`;
export const CategoryCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;

    @media screen and (min-width: 720px) {
        flex-direction: row;
    }
`;
export const CategoryCard = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 480px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;

    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        position: relative;
        overflow: hidden;
        img {
            object-fit: cover;
            min-height: 100%;
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        background-color: #0D2D53;
        padding: 20px;
        .info {
            display: flex;
            flex-direction: column;
            span {
                color: #fff;
                font-size: 13px;
                font-weight: 400;
                :first-child {
                    margin-bottom: 4px;
                    font-size: 17px;
                    font-weight: 800;
                }
            }
        }

        span.student-count {
            color: #fff;
            font-size: 14px;
            font-weight: 400;
        }
    }

    @media screen and (min-width: 720px) {
        width: calc(50% - 10px);
    }
    @media screen and (min-width: 1080px) {
        width: calc(33.33% - 13.33px);
    }
`;