import styled from 'styled-components';
export const EntriesListWrapper = styled.div`
    max-width: 920px;
    margin: auto;
    .list {
        &__title {
            ${(p) => p.theme.fonts.title};
        }
    }
`;
export const EntriesEmptyWrapper = styled.div`
    ${(p) => p.theme.fonts.paragraph}
    color: ${(p) => p.theme.colors.secondary};
`;
