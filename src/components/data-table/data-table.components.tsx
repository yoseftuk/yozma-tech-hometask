import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router';

import Pagination from '../pagination/pagination.component';
import { DataTableWrapper } from './data-table.styles';

type RenderType<G> = Partial<
    { [Option in keyof G]: (item: G) => React.ReactNode }
>;
interface DataTableProps<G extends object> {
    labels: string[];
    keys: Partial<keyof G>[];
    render?: RenderType<G>;
    data: G[];
    link: (item: G) => string;
}
const PER_PAGE = 10;
function DataTable<G extends object>({
    labels,
    keys,
    render,
    data,
    link,
}: DataTableProps<G>) {
    const [page, setPage] = useState(0);
    const history = useHistory();
    const currentPage = useMemo(
        () => data.slice(page * PER_PAGE, (page + 1) * PER_PAGE),
        [page]
    );
    return (
        <>
            <DataTableWrapper className={'data-table'}>
                <thead className={'data-table__head'}>
                    <tr>
                        {labels.map((label) => (
                            <th key={label} className={'data-table__th'}>
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={'data-table__body'}>
                    {currentPage.map((item: G, i) => (
                        <tr
                            key={i}
                            className={'data-table__tr'}
                            onClick={() => history.push(link(item))}
                        >
                            {keys.map((key: keyof G, i: number) => (
                                <td
                                    key={i}
                                    data-label={labels[i]}
                                    className={'data-table__td'}
                                >
                                    {render && key in render
                                        ? (
                                              render[key] as (
                                                  item: G
                                              ) => React.ReactNode
                                          )(item)
                                        : item[key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </DataTableWrapper>
            <Pagination
                page={page}
                setPage={setPage}
                lastPage={Math.ceil(data.length / PER_PAGE - 1)}
            />
        </>
    );
}
export default DataTable;
