import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 90px;    
`;
export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
    h4 {
        margin-bottom: 20px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 24px;
    }
`;

export const PopularContent = styled.div`
    overflow: auto;
    scrollbar-width: none;
    .topics {
        display: flex;
        gap: 13px;
    }
`

export const FilterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sort {
        .sort-buttons {
            display: none;
            margin-right: -12px;
            .sort-item {
                margin-right: 12px;
            }
            span {
                display: none;
                align-items: center;
                @media screen and (min-width: 720px) {
                    display: flex;
                }
            }
            @media screen and (min-width: 480px) {
                display: flex;
            }
        }
        .sort-dropdown {
            display: block;
            @media screen and (min-width: 480px) {
                display: none;
            }
        }
    }
`

export const SkillsContent = styled.div<{nowrap?: boolean}>`    
    gap: 35px;
    display: flex;
    ${
        props => props.nowrap? 
        `            
            overflow-x: auto;
            scrollbar-width: none;
        `:
        `
            flex-wrap: wrap;
        `
    }    
    margin-top: 40px;
    margin-bottom: 60px;
`