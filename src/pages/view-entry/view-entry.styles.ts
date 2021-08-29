import styled from 'styled-components';

import { WindowView } from '../../components/window-view.styles';
import { mobile } from '../../styles/_functions.styles';
export const ViewEntryWrapper = styled(WindowView)`
    color: ${(p) => p.theme.colors.dark};
    .view-entry {
        &__title {
            ${(p) => p.theme.fonts.title}
        }
        &__data {
            display: flex;
            flex-wrap: wrap;
        }
        &__detail {
            ${(p) => p.theme.fonts.paragraph}
            width: calc(50% - 12px);
            margin-right: 24px;
            margin-bottom: 24px;
            &:nth-child(even) {
                margin-right: 0;
            }
            &__large {
                width: 100%;
                display: block;
            }
            &__label {
                margin-bottom: 12px;
                font-weight: 600;
            }
            &__value {
                color: ${(p) => p.theme.colors.primary};
            }
        }
    }
    ${mobile`
        .view-entry {
            &__detail {
                width: 100%;
                margin-right:0;
                display: flex;
                justify-content: space-between;
                &__large {
                 display: block;
                 white-space: pre-line;
                }
            }
        }
    `}
`;
