import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 35px;
        height: 35px;
        font-size: 14px;
        padding: 0;
        margin: 24px 6px 0 6px;
        &.pagination {
            &__button {
                cursor: pointer;
                color: ${(p) => p.theme.colors.dark};
                border: 1px solid ${(p) => p.theme.colors.light};
                border-radius: 8px;
                &__active {
                    border: 1px solid ${(p) => p.theme.colors.primary};
                    background-color: ${(p) => p.theme.colors.primary};
                    color: white;
                }
            }
            &__dots {
                color: ${(p) => p.theme.colors.secondary};
            }
        }
    }
`;
