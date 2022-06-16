import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';


import './Poster.scss'

type Props = {
    list: {
        totalResults: number,
        page: number,
        pageChange: (event: React.ChangeEvent<unknown>, value: number) => void
    },
}

export const PosterPagination = ({ list }: Props) => {
    const [page, setPage] = useState(list.page);
    const [total, setTotal] = useState(list.totalResults);

    useEffect(() => {
        setPage(list.page);
    }, [list.page]);
    useEffect(() => {
        setTotal(list.totalResults);
    }, [list.totalResults]);

    const calculatePages = () => {
        return Math.floor(total / 10)
    }

    return (
        <Stack spacing={2} sx={{ p: 2 }}>
            <Pagination role={"pagination"} count={calculatePages()} color="primary" page={page} onChange={list.pageChange} />
        </Stack>
    )
}

