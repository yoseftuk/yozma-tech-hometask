import styled from 'styled-components';

export const FormInputWrapper = styled.div`
    position: relative;
    margin-bottom: 24px;
    .form-input {
        &__label {
            display: block;
            ${(p) => p.theme.fonts.paragraph}
            font-weight: 600;
            margin-bottom: 6px;
        }
        &__input {
            display: block;
            ${(p) => p.theme.fonts.paragraph}
            padding: 14px 14px;
            border-radius: 8px;
            border: 1px solid ${(p) => p.theme.colors.secondary};
            color: ${(p) => p.theme.colors.dark};
            width: 100%;
            box-sizing: border-box;
            appearance: none;
        }
    }
`;
