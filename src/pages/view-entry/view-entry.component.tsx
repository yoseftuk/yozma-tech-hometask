import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { classes, toTime } from '../../helpers';
import { useData } from '../../store/data.context';
import { IFilledTime } from '../../types/entry.type';
import { IOption } from '../../types/option.type';
import PageNotFound from '../404/404.component';
import { ViewEntryWrapper } from './view-entry.styles';

type IDetail = IOption & { large?: boolean };
const EntryDetail: FC<IDetail> = ({ label, value, large }) => {
    return (
        <div
            className={classes(
                'view-entry__detail',
                large && 'view-entry__detail__large'
            )}
        >
            <div className={'view-entry__detail__label'}>{label}</div>
            <div className={'view-entry__detail__value'}>{value}</div>
        </div>
    );
};
const ViewEntry: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { notes } = useData();
    const note = useMemo<IFilledTime | undefined>(() => {
        return notes.find((n) => n.id === +id);
    }, [notes, id]);
    const details: IDetail[] = useMemo(
        () => [
            { label: 'Name', value: note?.user.name || '' },
            { label: 'Username', value: note?.user.username || '' },
            { label: 'Email', value: note?.user.email || '' },
            { label: 'Time', value: toTime(+(note?.time || 0)) },
            { label: 'Note', value: note?.note || '', large: true },
        ],
        [note]
    );
    if (!note) return <PageNotFound />;
    return (
        <ViewEntryWrapper className={'view-entry'}>
            <h1 className={'window-view__title'}>
                <span>Entry #{id}</span>
            </h1>
            <div className={'view-entry__data'}>
                {details.map((item) => (
                    <EntryDetail {...item} key={item.label} />
                ))}
            </div>
        </ViewEntryWrapper>
    );
};
export default ViewEntry;
