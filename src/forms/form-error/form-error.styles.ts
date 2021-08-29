import styled from 'styled-components';

export const FormErrorWrapper = styled.div`
    color: ${(p) => p.theme.colors.error};
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    font-weight: 600;
    font-size: 10px;
`;
