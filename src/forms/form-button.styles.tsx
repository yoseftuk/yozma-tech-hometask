import styled from 'styled-components';

import { darken } from '../styles/_functions.styles';

export const FormButton = styled.button`
    padding: 14px 14px;
    ${(p) => p.theme.fonts.paragraph}
    background-color: ${(p) => p.theme.colors.primary};
    color: white;
    border-radius: 8px;
    border: none;
    appearance: none;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${(p) => darken(p.theme.colors.primary, 0.8)};
    }
`;
