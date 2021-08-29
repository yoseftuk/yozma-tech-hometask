import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as NotFoundImage } from '../../assets/media/404.svg';
import { Routes } from '../../enums/routes.enum';
import { PageNotFoundWrapper } from './404.styles';

const PageNotFound = () => {
    return (
        <PageNotFoundWrapper>
            <NotFoundImage className={'not-found__image'} />
            <h1 className={'not-found__title'}>
                Requested page not found.{' '}
                <Link className={'not-found__link'} to={Routes.LIST}>
                    Back home
                </Link>
            </h1>
        </PageNotFoundWrapper>
    );
};
export default PageNotFound;
