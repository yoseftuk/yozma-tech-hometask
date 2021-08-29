import React, { FC, useEffect, useMemo, useRef, useState } from 'react';

import { classes } from '../../helpers';
import { useOutsideClick } from '../../hooks/outside-click';
import { IOption } from '../../types/option.type';
import { useForm } from '../form.context';
import FormError from '../form-error/form-error.component';
import { FormSelectWrapper } from './form-select.styles';

interface FormSelectProps {
    name: string;
    label: string;
    options: IOption[];
}
const FormSelect: FC<FormSelectProps> = ({ name, label, options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { values, update } = useForm<any>();
    const value = useMemo(() => values[name as keyof typeof values], [values]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const filteredOptions = useMemo(() => {
        return options
            .filter((option) =>
                option.label.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .slice(0, 10);
    }, [inputValue, options]);
    useEffect(() => {
        if (isOpen) setInputValue('');
    }, [isOpen]);
    useOutsideClick(inputRef, () => setIsOpen(false));
    return (
        <FormSelectWrapper className={'form-input'}>
            <label htmlFor={name} className={'form-input__label'}>
                {label}
            </label>
            <input
                className={'form-input__input'}
                value={
                    isOpen
                        ? inputValue
                        : options.find(
                              (option) => String(option.value) === value
                          )?.label
                }
                ref={inputRef}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <FormError name={name} />
            <ul
                className={classes(
                    'form-input__options',
                    isOpen && 'form-input__options__open'
                )}
            >
                {filteredOptions.length ? (
                    filteredOptions.map(({ label, value: optionValue }, i) => (
                        <li
                            key={i}
                            className={classes(
                                'form-input__option',
                                value === String(optionValue) &&
                                    'form-input__option__selected'
                            )}
                            onClick={() => {
                                update(name, String(optionValue));
                            }}
                        >
                            {label}
                        </li>
                    ))
                ) : (
                    <li
                        className={
                            'form-input__option form-input__option__disabled'
                        }
                    >
                        No results
                    </li>
                )}
            </ul>
        </FormSelectWrapper>
    );
};
export default FormSelect;
