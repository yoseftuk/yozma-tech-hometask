import styled from 'styled-components';

import { mobile } from '../../styles/_functions.styles';

export const NavbarWrapper = styled.header`
    display: flex;
    align-items: center;
    padding: 14px 40px;
    box-shadow: -2px 0 10px ${(p) => p.theme.colors.secondary};
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
    ${mobile`
        padding: 10px 10px;
    `}
    .navbar {
        &__logo {
            height: 50px;
            width: auto;
            margin-right: 5px;
        }
        &__title {
            ${(p) => p.theme.fonts.paragraph}
            white-space: nowrap;
        }
        &__nav {
            margin-left: auto;
        }
        &__menu {
            display: flex;
            margin: 0;
            padding: 0;
            justify-content: center;
        }
        &__item {
            display: block;
            padding: 0;
            margin: -20px 20px;
            ${(p) => p.theme.fonts.paragraph}
            position: relative;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                width: 0;
                height: 2px;
                bottom: -20px;
                background-color: ${(p) => p.theme.colors.primary};
                transition: all 0.3s ease;
                ${mobile`
                    content: none;
                `}
            }
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                height: 100%;
                font-weight: 500;
                color: ${(p) => p.theme.colors.dark};
            }
            svg {
                height: 20px;
                width: auto;
            }
            &__active {
                &:before {
                    width: 100%;
                }
                a {
                    color: ${(p) => p.theme.colors.primary};
                }
            }
        }
    }
`;
