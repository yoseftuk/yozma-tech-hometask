import React, { FC, useMemo } from 'react';

import { useForm } from '../form.context';
import { FormErrorWrapper } from './form-error.styles';

interface Props {
    name: string;
}
const FormError: FC<Props> = ({ name }) => {
    const { errors, isSubmitted } = useForm<any>();
    const error = useMemo(() => errors[name], [errors]);
    return error && isSubmitted ? (
        <FormErrorWrapper>{error}</FormErrorWrapper>
    ) : null;
};
export default FormError;
