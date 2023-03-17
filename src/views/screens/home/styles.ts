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
            min-width: 100%;
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
    display: flex;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #D1D7DC;
    overflow: hidden;

    .img-wrapper {
        width: 100px;
        height: 80px;
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
        padding: 20px 20px;
        flex: 1;

        .info {
            display: flex;
            flex-direction: column;
            flex: 1;
            span {
                font-size: 13px;
                font-weight: 400;
                color: #898B8D;
                :first-child {
                    color: ${props => props.theme.primaryColor};
                    font-weight: 800;
                    font-size: 17px;
                    margin-bottom: 4px;
                }
            }
        }

        span.student-count {
            color: #898B8D;
            font-size: 14px;
            font-weight: 400;
        }
    }

    @media screen and (min-width: 720px) {
        display: block;
        width: 100%;
        min-width: 320px;
        max-width: 480px;
        border: 1px solid none;
        border-radius: 0px;
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
                        color: #fff;
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
        width: calc(50% - 10px);
    }
    @media screen and (min-width: 1080px) {
        min-width: unset;
        width: calc(25% - 20px);

        .img-wrapper {
            height: 200px;
        }
    }
`;


export const ReviewSection = styled.div`
    display: flex;
    margin-top: 20px;


    @media screen and (min-width: 720px) {
        
    }
`;
export const ReviewContent = styled.div`
    width: 100%;
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;

    h3 {
        margin-bottom: 30px !important;
        color: #000 !important;
    }

    @media screen and (min-width: 720px) {
        
    }
`;

export const ReviewCardWrapper = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    max-width: 100%;

     /* Hide scrollbar for Chrome, Safari and Opera */
     -ms-overflow-style: none;  /* 
    IE and Edge */
    scrollbar-width: none; 
     ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (min-width: 720px) {
        
    }
`;

export const ReviewCard = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    min-width: 480px;
    max-width: 480px;


    .img-wrapper {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        overflow: hidden;

        img {
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
        }
    }

   .content {
        flex: 1;
        h4 {
            color: #0D2D53;
            font-weight: 00;
            font-size: 15px;
        }

        span {
            display: inline-block;
            color: #5C5C5C;
            font-size: 13px;
            font-weight: 600;
            border-bottom: 1px solid #5C5C5C;
            padding: 10px 20px 10px 0px;
            margin-bottom: 10px;
        }

        p {
            color: #5C5C5C;
            font-size: 14px;
            line-height: 24px;
        }
   }


    @media screen and (min-width: 720px) {
        
    }
`;




export const HeroWrapper = styled.div`
    background-color: #fff;
`;
export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
    padding: 20px 4%;
    max-width: 1080px;
    margin: 0px auto;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: center;
        gap: 4%;
    }
`;

export const TextContent = styled.div`
    width: 100%;
    max-width: 640px;

    @media screen and (min-width: 880px) {
        margin-top: 120px;
    }
    
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: ${props => props.theme.primaryColor};
        text-align: center;

        @media screen and (min-width: 880px) {
            font-size: 45px;
            max-width: 480px;
            text-align: unset;
        }
    }

    h6 {
        color: #5C5C5C;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin-top: 20px;
        line-height: 25px;
        text-align: center;

        @media screen and (min-width: 880px) {
            text-align: unset;
        }
    }

    .link-sec {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        flex-direction: column;
        justify-content: center;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 100%;
            color: #fff;
            padding: 0px 40px;
            font-weight: 500;
            border-radius: 5px;
            background-color: ${props => props.theme.primaryColor};
            border: 1px solid ${props => props.theme.primaryColor};

            @media screen and (min-width: 880px) {
                width: unset;
            }
        }


        @media screen and (min-width: 480px) {
            flex-direction: row;
        }

        @media screen and (min-width: 880px) {
            justify-content: start;
        }
    }
    
`;
export const ImageContent = styled.div`
    width: 100%;
    max-width: 480px;
`;