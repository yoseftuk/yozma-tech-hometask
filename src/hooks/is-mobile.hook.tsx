import { useState } from 'react';

import { media } from '../styles/_media.styles';
import { useEvent } from './event.hook';
import { useWindowSize } from './window-size.hook';
export const useIsMobile = () => {
    const { width } = useWindowSize();
    const [printMode, setPrintMode] = useState(false);
    useEvent('beforeprint', () => {
        setPrintMode(true);
    });
    useEvent('afterprint', () => setPrintMode(false));
    return !printMode && width <= media.mobile;
};
