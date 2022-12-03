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
export const ContinueWrapper = styled.div`
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
    width: 100%;
    min-width: 350px;
    max-width: 480px;
    display: flex;
    .img-wrapper {
        flex: 2;
        max-width: 200px;
        min-width: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
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
        justify-content: space-between;
        width: 100%;
        padding: 5px 16px;
        h3 {
            font-size: 17px;
            color: #1C1D1F;
            margin-top: 8px;
            margin-bottom: calc(8px + 1%);
            font-family: 'Raleway';
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
            display: flex;
            font-size: 12px;
    
            .foot-lead {
                font-weight: 600;
                color: ${props => props.theme.primaryColor};
                margin-right: 13px;
            }
        }
    }
`;