import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 90px;    
`;

export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 30px 20px;
    h3 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        color: #000000;
        margin-bottom: 30px;
    }
`;

export const MediaWrapper = styled.div`
    min-height: 350px;
    max-height: calc(100vh - 300px);
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (min-width: 991px) {
        gap: 30px;
    }
`;

export const CourseContentWrapper = styled.div`
    display: none;
    width: 100%;
    min-width: 240px;
    @media screen and (min-width: 720px) {
        display: block;
        max-width: 300px;
    }
`;

export const CourseBody = styled.div`
    width: 100%;
`;

export const Video = styled.video`
    width: 100%;
`;

export const DocumentWrapper = styled.div`
    overflow: scroll;
    padding: 10px;
`

export const Document = styled.div`
    width: 100%;
    height: 100%;
    font-size: 18px;
    line-height: 32px;
`;