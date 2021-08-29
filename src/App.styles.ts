import styled from 'styled-components';

import { mobile } from './styles/_functions.styles';

export const MainStyles = styled.div`
    color: ${({ theme }) => theme.colors.dark};
    main {
        display: block;
        padding: 40px;
        ${mobile`
            padding: 40px 26px;
        `}
    }
`;
