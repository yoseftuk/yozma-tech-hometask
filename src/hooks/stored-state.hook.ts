import { Dispatch, useState } from 'react';

export const useStoredState: <G>(
    defaultValue: G,
    storeKey: string
) => [G, Dispatch<G>] = <G>(defaultValue: G, storeKey: string) => {
    const storedValue = JSON.parse(localStorage.getItem(storeKey) || '""');
    const [state, setState] = useState<G>(storedValue || defaultValue);
    const update: Dispatch<G> = (value) => {
        localStorage.setItem(storeKey, JSON.stringify(value));
        setState(value);
    };
    return [state, update];
};
