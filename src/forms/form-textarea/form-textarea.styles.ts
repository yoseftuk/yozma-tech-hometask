import styled from 'styled-components';

import { FormInputWrapper } from '../from-input/form-input.styles';

export const FormTextAreaWrapper = styled(FormInputWrapper)`
    .form-input {
        &__input {
            resize: none;
            overflow: hidden;
        }
    }
`;
