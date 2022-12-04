import styled from 'styled-components'

export const Wrapper = styled.div`
    
`;
export const Navigation = styled.div`
    ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 0.8rem;
   
    @media screen and (max-width: 1080px) {
        width: 100%;
        overflow: scroll;
        li:last-child {
        .link{
            width: 200px;
        }
    }
    }
    
    }
    .link{
        color: #5c5c5c;
        display: flex;
        align-items: center;
        flex: 1;
        gap: 10px;
        padding: 0.6rem 1rem;
        span{
            align-self: center;
            font-size: 22px;
            padding-top: 5px;
        }
        p{
            font-size: 16px;
        }
    }
    .link:hover{
        background: #3186C6;
        border-radius: 12px;
        color: #FFFFFF;
    }

    
`;