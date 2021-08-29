import styled from 'styled-components';

import { mobile } from '../styles/_functions.styles';

export const WindowView = styled.div`
    margin: 40px auto;
    max-width: 500px;
    border-radius: 10px;
    border: 1px solid ${(p) => p.theme.colors.secondary};
    padding: 40px;
    position: relative;
    box-shadow: 4px 10px 20px #e1e1e1, 0 0 10px #f1f1f1;
    ${mobile`
        box-shadow: none;
        border: none;
        border-radius:0;
        padding: 40px 0; 
   `}
    .window-view__title {
        ${(p) => p.theme.fonts.title}
        position: absolute;
        width: auto;
        top: -30px;
        text-align: center;
        left: 0;
        right: 0;
        span {
            padding: 10px 20px;
            background-color: white;
        }
    }
`;
