import styled from 'styled-components';

export const TutorCardItem = styled.div<{featured: boolean}>`
    min-width: 300px;
    height: 96px;
    display: flex;
    gap: 12px;
    .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        width: 35%;
        
        img {
            object-fit: cover;
            min-height: 100%;
        }
    }

    .content {
        width: 60%;
        padding-top: 4px;
        padding-bottom: 4px;
        h3 {
            font-size: 14px;
            color: #1C1D1F;
            font-weight: 600;
            margin-bottom: 4px;
            font-family: 'Raleway';
        }
        p {
            font-size: 12px;
            color: #898B8D;
        }
        .foot-col {
            margin-top: 20px;
            margin-bottom: 20px;
             display: flex;
            justify-content: space-between;
            align-items: center;

            .stats-col {
                .rat-sec {
                    display: flex;
                    align-items: center;
                    color: #FDB813;
                    span {
                        color: #5C5C5C;
                        font-size: 12px;
                        font-weight: 600;
                        margin-right: 9px;
                    }
                
                    svg {
                        font-size: 12px;
                    }
                }
                .students {
                    color: #5C5C5C;
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
    }

`;