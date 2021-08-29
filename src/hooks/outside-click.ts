import { RefObject } from 'react';

import { useEvent } from './event.hook';

export const useOutsideClick = (
    ref: RefObject<HTMLElement>,
    callBack: () => void
): void => {
    const handleClick = (e: Event) => {
        if (ref.current?.contains(e.target as Node)) {
            return;
        }
        callBack();
    };
    useEvent('click', handleClick);
};
