import React, { FC, FormEvent, useEffect, useState } from 'react';

import { Validator } from '../managers/validator.manager';
import { FormContext } from './form.context';

interface IFormProps<G extends object> {
    initialValues: G;
    onSubmit: (data: G) => void;
    validations?: Partial<{ [Option in keyof G]: Validator }>;
}
const Form: FC<IFormProps<any>> = ({
    initialValues,
    onSubmit,
    children,
    validations,
}) => {
    type G = typeof initialValues;
    const [values, setValues] = useState<G>(initialValues);
    const [errors, setErrors] = useState<
        Partial<{ [Option in keyof G]: string | null }>
    >({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (validations) {
            for (const [name, validator] of Object.entries(validations)) {
                errors[name] = validator?.validate(values[name]);
            }
        }
        setErrors({ ...errors });
        if (Object.values(errors).some((err) => !!err)) return;
        onSubmit(values);
    };
    const update = (name: keyof G, value: string) => {
        setValues((oldValues: G) => ({
            ...oldValues,
            [name]: value,
        }));
        if (validations && validations[name as string]) {
            setErrors((oldErrors) => ({
                ...oldErrors,
                [name]: validations[name as string]?.validate(value),
            }));
        }
    };
    return (
        <FormContext.Provider value={{ values, errors, isSubmitted, update }}>
            <form onSubmit={handleSubmit}>{children}</form>
        </FormContext.Provider>
    );
};
export default Form;
