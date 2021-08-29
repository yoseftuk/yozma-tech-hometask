import { css } from 'styled-components';

import { colors } from './_colors.styles';
import { darken } from './_functions.styles';
export const fonts = {
    title: css`
        font-size: 1.5rem;
        font-weight: 700;
        color: ${colors.dark};
    `,
    subtitle: css`
        font-size: 1.25rem;
        font-weight: 500;
        color: ${colors.dark};
    `,
    paragraph: css`
        font-size: 1rem;
        color: ${colors.dark};
    `,
    link: css`
        color: ${colors.primary};
        transition: color 0.3s ease;
        will-change: color;
        cursor: pointer;
        &:hover {
            color: ${darken(colors.primary, 0.9)};
        }
    `,
};
