import { ComponentType, SVGProps } from 'react';

import { ListIcon, PencilIcon } from '../../../src/assets/media/icons';
import { Routes } from '../../enums/routes.enum';

export interface INavbarItem {
    name: string;
    route: Routes;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const navbarMenu: INavbarItem[] = [
    {
        name: 'Add Entry',
        route: Routes.ADD,
        icon: PencilIcon,
    },
    {
        name: 'View Entries',
        route: Routes.LIST,
        icon: ListIcon,
    },
];
