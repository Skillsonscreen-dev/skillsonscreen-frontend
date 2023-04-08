import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #051221;
`;

export const Container = styled.div<{padding: number;}>`
    max-width: 1340px;
    margin: 0px auto;
    padding: ${props => props.padding}px 20px;
`;

export const JumboContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 240px;
`

export const JumboTitle = styled.h2`
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 28px;
    color: #FFFFFF;
    @media screen and (min-width: 720px) {
        font-size: 32px;
    }
    @media screen and (min-width: 991px) {
        font-size: 36px;
    }
`

export const JumboImage = styled.div`
    margin: -40px  calc((100% - 100vw)/2 - 20px) -40px 0;
    display: none;
    align-self: stretch;
    overflow: hidden;
    max-width: 640px;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 720px) {
        display: block;
    }
`