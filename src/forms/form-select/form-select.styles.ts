import styled from 'styled-components';

import { FormInputWrapper } from '../from-input/form-input.styles';

export const FormSelectWrapper = styled(FormInputWrapper)`
    .form-input {
        &__options {
            position: absolute;
            top: 100%;
            width: 100%;
            margin: 10px 0 0 0;
            padding: 0 14px;
            list-style-type: none;
            transform: scaleY(0);
            opacity: 0;
            transform-origin: top center;
            transition: all 0.3s ease;
            border-radius: 8px;
            background-color: white;
            overflow: hidden;
            z-index: 2;
            border: 1px solid ${(p) => p.theme.colors.secondary};
            &__open {
                transform: scaleY(1);
                opacity: 1;
            }
        }
        &__option {
            color: blue;
            display: block;
            padding: 14px 0;
            border-bottom: 1px solid ${(p) => p.theme.colors.secondary};
            ${(p) => p.theme.fonts.paragraph}
            cursor: pointer;
            &:last-child {
                border-bottom: none;
            }
            &__selected {
                color: ${(p) => p.theme.colors.primary};
                font-weight: 600;
            }
            &__disabled {
                opacity: 0.4;
            }
        }
    }
`;
