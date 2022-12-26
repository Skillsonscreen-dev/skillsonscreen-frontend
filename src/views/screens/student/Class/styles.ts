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
    overflow-x: hidden;
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
    overflow-x: hidden;
    width: 100%;
`;

export const Video = styled.video`
    background: #000000;
    width: 100%;
`;

export const DocumentWrapper = styled.div`
    overflow: scroll;
    padding: 10px;
    border-bottom: 1px solid #D1D7DC;
`

export const Document = styled.div`
    width: 100%;
    height: 100%;
    font-size: 18px;
    line-height: 32px;
`;

export const ClassLinksWrapper = styled.div`
    padding-right: 20px;
    &::after {
        content: '';
        height: 2px;
        width: 100%;
        width: calc(100% + 20px);
        background: #D1D7DC;
        display: block;
        margin-right: -20px;
        margin-top: -2px;
    }
`;

export const ClassLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    scrollbar-width: none;
    a {
        padding: 16px 20px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 12px;
        color: #1C1D1F;
        white-space: nowrap;
    }
    a.active {
        border-bottom: 2px solid #3186C6;
        color: ${props => props.theme.primaryColor};
    }
    a.hide {
        @media screen and (min-width: 720px) {
            display: none;
        }
    }
    a:hover {
        color: ${props => props.theme.primaryColor};
    }
`;

export const ClassTabs = styled.div`
    padding-top: 30px;
`;

export const HideTab = styled.div`
    @media screen and (min-width: 720px) {
        display: none;
    }
`;