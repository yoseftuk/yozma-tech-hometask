import styled from 'styled-components';

import { mobile } from '../../styles/_functions.styles';
export const PageNotFoundWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    .not-found {
        &__image {
            width: 500px;
            max-width: 100%;
            height: auto;
        }
        &__title {
            ${({ theme }) => theme.fonts.subtitle}
            margin-top: 20px;
        }
        &__link {
            ${({ theme }) => theme.fonts.link}
            ${mobile`
                display: block;
                text-align: center;
                margin-top: 10px;
            `}
        }
    }
`;
