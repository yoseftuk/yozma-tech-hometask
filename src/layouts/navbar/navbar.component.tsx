import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/media/logo.svg';
import { classes } from '../../helpers';
import { useIsMobile } from '../../hooks/is-mobile.hook';
import { navbarMenu } from './navbar.data';
import { NavbarWrapper } from './navbar.styles';

const Navbar: FC = () => {
    const { pathname } = useLocation();
    const isMobile = useIsMobile();
    return (
        <NavbarWrapper>
            <Logo className={'navbar__logo'} />
            <h2 className={'navbar__title'}>Time Tracker</h2>
            <nav className={'navbar__nav'}>
                <ul className={'navbar__menu'}>
                    {navbarMenu.map(({ name, route, icon: Icon }) => (
                        <li
                            key={route}
                            className={classes(
                                'navbar__item',
                                pathname === route && 'navbar__item__active'
                            )}
                        >
                            <Link to={route}>{isMobile ? <Icon /> : name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </NavbarWrapper>
    );
};
export default Navbar;
