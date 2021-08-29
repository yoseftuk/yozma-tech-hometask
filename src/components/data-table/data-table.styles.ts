import styled from 'styled-components';

import { mobile } from '../../styles/_functions.styles';

export const DataTableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    box-shadow: 4px 10px 20px #e1e1e1, 0 0 10px #f1f1f1;

    .data-table {
        &__head {
            background-color: ${(p) => p.theme.colors.primary};
            color: white;
        }
        &__th,
        &__td {
            text-align: left;
            padding: 14px;
            cursor: pointer;
        }
        &__tr {
            border-bottom: 1px solid ${(p) => p.theme.colors.light};
            transition: color 0.3s ease;
            will-change: color;
            &:hover {
                color: ${(p) => p.theme.colors.primary};
            }
        }
    }
    ${mobile`
          display: block;
          box-shadow: none;
          .data-table {
            &__head {
                display: none;
            }
            &__body {
                display: block;
            }
            &__tr {
                display: block;
                padding: 14px 0;
            }
            &__td {
                display: block;
                padding: 10px 0;
                &:before {
                     content: attr(data-label)": ";
                     font-weight: 700;
                }
            }
          }
          `}
`;
