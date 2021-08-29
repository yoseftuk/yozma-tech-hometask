import React, { FC, useEffect, useMemo, useRef, useState } from 'react';

import { useForm } from '../form.context';
import FormError from '../form-error/form-error.component';
import { FormTextAreaWrapper } from './form-textarea.styles';
interface Props {
    name: string;
    label: string;
}
const FormTextarea: FC<Props> = ({ name, label }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const { values, update } = useForm<any>();
    const [height, setHeight] = useState(0);
    const value = useMemo(() => values[name as keyof typeof values], [values]);
    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.style.height = '0px';
        const newHeight = inputRef.current.scrollHeight + 2;
        setHeight(newHeight);
        inputRef.current.style.height = `${newHeight}px`;
    }, [inputRef.current, value]);
    console.log('height', inputRef.current?.scrollHeight, height);
    return (
        <FormTextAreaWrapper className={'form-input'}>
            <label htmlFor={name} className={'form-input__label'}>
                {label}
            </label>
            <textarea
                ref={inputRef}
                style={{ height: `${height}px` }}
                className={'form-input__input'}
                value={value}
                onChange={(e) => update(name, e.target.value)}
            >
                {value}
            </textarea>
            <FormError name={name} />
        </FormTextAreaWrapper>
    );
};
export default FormTextarea;
