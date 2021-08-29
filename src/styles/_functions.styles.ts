import { css } from 'styled-components';

import { media } from './_media.styles';

export const darken = (color: string, percent: number) => {
    const darker = (color: string) =>
        Math.round(parseInt(color, 16) * percent)
            .toString(16)
            .padStart(2, '0');
    return `#${darker(color.substring(1, 3))}${darker(
        color.substring(3, 5)
    )}${darker(color.substring(5, 7))}`;
};
export const mobile = (content: TemplateStringsArray) => css`
    @media all and (max-width: ${media.mobile}px) {
        ${content}
    }
`;
