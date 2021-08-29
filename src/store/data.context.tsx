import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useState,
} from 'react';

import { EP } from '../enums/api.enum';
import { useStoredState } from '../hooks/stored-state.hook';
import api from '../managers/api.manager';
import { IFilledTime } from '../types/entry.type';
import { IUser } from '../types/user.type';

interface IDataContext {
    users: IUser[];
    notes: IFilledTime[];
    setNote: (note: IFilledTime) => number;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => useContext(DataContext) as IDataContext;

export const DataProvider: FC<{}> = ({ children }) => {
    const [notes, setNotes] = useStoredState<IFilledTime[]>([], 'notes');
    const [lastInsertId, setLastInsertId] = useStoredState(1, 'last_id');
    const [users, setUsers] = useState<IUser[]>([]);
    const setNote = (note: IFilledTime) => {
        const id = lastInsertId + 1;
        setNotes([{ id, ...note }, ...notes]);
        setLastInsertId(id);
        return id;
    };
    useEffect(() => {
        api<IUser[]>(EP.USERS)
            .then(setUsers)
            .catch((e) => alert(`cannot fetch users ${e.message}`));
    }, []);
    return (
        <DataContext.Provider value={{ users, notes, setNote }}>
            {children}
        </DataContext.Provider>
    );
};
