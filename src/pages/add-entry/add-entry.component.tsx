import React, { FC, useMemo } from 'react';
import { useHistory } from 'react-router';

import { inputTypes } from '../../enums/input-types';
import { Routes } from '../../enums/routes.enum';
import { Form, FormButton, FormInput, FormRow, FormSelect } from '../../forms';
import FormTextarea from '../../forms/form-textarea/form-textarea.component';
import validator from '../../managers/validator.manager';
import { useData } from '../../store/data.context';
import { ITime } from '../../types/entry.type';
import { IOption } from '../../types/option.type';
import { IUser } from '../../types/user.type';
import { AddEntryWrapper } from './add-entry.styles';

type FormType = ITime & { user: '' | number };
const initialValues: FormType = {
    time: '',
    note: '',
    user: '',
};
const AddEntry: FC = () => {
    const { users, setNote } = useData();
    const options: IOption[] = useMemo(
        () => users.map((u) => ({ label: u.name, value: u.id })),
        [users]
    );
    const history = useHistory();
    const handleSubmit = (values: FormType) => {
        const user = users.find((u) => u.id === +values.user) as IUser;
        const id = setNote({
            time: +values.time,
            note: values.note,
            user,
        });
        history.push(`${Routes.LIST}/${id}`);
    };
    return (
        <AddEntryWrapper>
            <h1 className={'window-view__title'}>
                <span>Add new entry</span>
            </h1>
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validations={{
                    time: validator().required().min(0.1).max(300),
                    note: validator().required().minLength(5).maxLength(300),
                    user: validator().required(),
                }}
            >
                <FormRow>
                    <FormSelect
                        name={'user'}
                        label={'Select user'}
                        options={options}
                    />
                    <FormInput
                        name={'time'}
                        label={'Time spent (h.)'}
                        type={inputTypes.NUMBER}
                    />
                </FormRow>
                <FormRow>
                    <FormTextarea name={'note'} label={'Note'} />
                </FormRow>
                <FormButton type={'submit'}>Submit</FormButton>
            </Form>
        </AddEntryWrapper>
    );
};
export default AddEntry;
