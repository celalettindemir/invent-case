import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { filterAction } from '../../services/actions/movies/filterAction';
import { useAppDispatch } from '../../services';


import './Poster.scss'

type Props = {
    list: {
        totalResults: number,
        page: number,
    },
}

export const PosterPagination = ({ list }: Props) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(list.page);
    const [total, setTotal] = useState(list.totalResults);

    useEffect(() => {
        setPage(list.page);
    }, [list.page]);
    useEffect(() => {
        setTotal(list.totalResults);
    }, [list.totalResults]);


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(filterAction({ page: value }))
    };

    const calculatePages = () => {
        return Math.floor(total / 10)
    }

    return (
        <Stack spacing={2} sx={{ p: 2 }}>
            <Pagination count={calculatePages()} color="primary" page={page} onChange={handleChange} />
        </Stack>
    )
}

