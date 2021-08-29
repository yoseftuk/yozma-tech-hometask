import React, { Dispatch, FC } from 'react';

import { classes } from '../../helpers';
import { PaginationWrapper } from './pagination.styles';
interface PaginationProps {
    page: number;
    setPage: Dispatch<number>;
    lastPage: number;
}
const Pagination: FC<PaginationProps> = ({ page, setPage, lastPage }) => {
    if (lastPage <= 1) return null;
    return (
        <PaginationWrapper>
            {page > 2 ? (
                <li
                    className={classes(
                        'pagination__button',
                        page === 0 && 'pagination__button__active'
                    )}
                    onClick={() => setPage(1)}
                >
                    1
                </li>
            ) : null}
            {page > 3 ? <li className={'pagination__dots'}>...</li> : null}
            {[-2, -1, 0, 1, 2].map((i) =>
                page + i > lastPage || page + i < 0 ? null : (
                    <li
                        key={i}
                        onClick={() => setPage(page + i)}
                        className={classes(
                            'pagination__button',
                            page === page + i && 'pagination__button__active'
                        )}
                    >
                        {page + i + 1}
                    </li>
                )
            )}
            {lastPage - page > 3 ? (
                <li className={'pagination__dots'}>...</li>
            ) : null}
            {lastPage - page > 2 ? (
                <li
                    className={classes(
                        'pagination__button',
                        page === lastPage && 'pagination__button__active'
                    )}
                    onClick={() => setPage(lastPage)}
                >
                    {lastPage + 1}
                </li>
            ) : null}
        </PaginationWrapper>
    );
};
export default Pagination;
