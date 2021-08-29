import styled from 'styled-components';

export const FormRow = styled.div`
    display: flex;
    > .form-input {
        width: 100%;
        margin-right: 24px;
        &:last-child {
            margin-right: 0;
        }
    }
`;
