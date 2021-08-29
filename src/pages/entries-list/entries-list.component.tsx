import React, { FC } from 'react';

import DataTable from '../../components/data-table/data-table.components';
import { Routes } from '../../enums/routes.enum';
import { excerpt, toTime } from '../../helpers';
import { useData } from '../../store/data.context';
import { IFilledTime } from '../../types/entry.type';
import { EntriesEmptyWrapper, EntriesListWrapper } from './entries-list.styles';

const EntriesListComponent: FC = () => {
    const { notes } = useData();
    return (
        <EntriesListWrapper>
            <h1 className={'list-title'}>Entries List</h1>
            {notes.length ? (
                <DataTable<IFilledTime>
                    labels={['ID', 'User', 'Time', 'Note']}
                    keys={['id', 'user', 'time', 'note']}
                    data={notes}
                    link={({ id }) => `${Routes.LIST}/${id}`}
                    render={{
                        note: ({ note }) => excerpt(note, 30),
                        user: ({ user }) => user?.name,
                        time: ({ time }) => toTime(+time),
                    }}
                />
            ) : (
                <EntriesEmptyWrapper>No data yet</EntriesEmptyWrapper>
            )}
        </EntriesListWrapper>
    );
};

export default EntriesListComponent;
