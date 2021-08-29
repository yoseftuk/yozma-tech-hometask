import React, { FC, useMemo } from 'react';

import { inputTypes } from '../../enums/input-types';
import { useForm } from '../form.context';
import FormError from '../form-error/form-error.component';
import { FormInputWrapper } from './form-input.styles';

interface InputProps {
    name: string;
    label: string;
    type?: inputTypes;
}
const FormInput: FC<InputProps> = ({ name, label, type = inputTypes.TEXT }) => {
    const { values, update } = useForm<any>();
    const value = useMemo(() => values[name as keyof typeof values], [values]);
    return (
        <FormInputWrapper className={'form-input'}>
            <label htmlFor={name} className={'form-input__label'}>
                {label}
            </label>
            <input
                className={'form-input__input'}
                value={value}
                onChange={(e) => {
                    let val = e.target.value;
                    if (type === inputTypes.NUMBER) {
                        val = val.replace(/[^\d.]/g, '');
                        const parts = val.split('.');
                        console.log('oarts', parts);
                        if (parts.length > 1) {
                            val = `${parts.shift()}.${parts.join('')}`;
                        }
                    }
                    update(name, val);
                }}
            />
            <FormError name={name} />
        </FormInputWrapper>
    );
};
export default FormInput;
