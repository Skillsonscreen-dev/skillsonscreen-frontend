import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 90px;    
`;
export const Container = styled.div`
    max-width: 1340px;
    margin: 0px auto;
    padding: 40px 20px;
`;

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

export const CategoryContent = styled.div`
    display: flex;
    gap: 35px;
    flex-wrap: wrap;
    margin-top: -40px;
`