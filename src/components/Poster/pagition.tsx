import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { filterAction } from '../../services/actions/movies/filterAction';
import { useAppDispatch, useAppSelector } from '../../services';
import { selectFilter, selectSearch } from '../../services/selectors';


import './Poster.scss'


const PosterPagination = () => {
    const filter = useAppSelector(selectFilter);
    const search = useAppSelector(selectSearch);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(filter.page);
    }, [filter.page]);


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(filterAction({ page: value }))
    };

    const calculatePages = () => {
        return Math.floor(search.data.totalResults / 10)
    }

    return (
        <Stack spacing={2} sx={{ p: 2 }}>
            <Pagination count={calculatePages()} color="primary" page={page} onChange={handleChange} />
        </Stack>
    )
}

export default PosterPagination;
