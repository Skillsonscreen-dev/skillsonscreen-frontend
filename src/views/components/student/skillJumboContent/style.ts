import styled from 'styled-components';

export const Wrapper = styled.div`
    @media screen and (min-width: 720px) {
        max-width: 510px;
    }
`;

export const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    span {
        a {
            font-family: 'Lato';
            font-weight: 600;
            font-size: 14px;
            color: #F7F9FA;
        }
    }
    svg {
        height: 25px;
        width: 25px;
        color: #898B8D;
    }
    .current {
        font-family: 'Lato';
        font-size: 14px;
        color: #F7F9FA;
        font-weight: 400;
    }
`;

export const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 28px;
    color: #FFFFFF;
    margin-bottom: 8px;
    @media screen and (min-width: 720px) {
        font-size: 32px;
    }
    @media screen and (min-width: 991px) {
        font-size: 36px;
    }
`;

export const SubTitle = styled.div`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #F7F9FA;
    margin-bottom: 8px;
    @media screen and (min-width: 720px) {
        width: 95%;
    }    
`;

export const SubText = styled.div`
    display: flex;
    align-items: center;
    color: #FDB813;
    margin-bottom: 8px;
    span {
        font-size: 12px;
        font-weight: 600;
        margin-right: 4px;
    }

    svg {
        font-size: 12px;
        margin-right: 1px;
    }
    .ratings {
        color: #D1D7DC;
        font-size: 12px;
        font-weight: 400;
        margin-left: 9px;
    }
`;