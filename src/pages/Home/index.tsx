import { searchAction, useAppDispatch, useAppSelector } from '../../services';
import { selectFilter, selectSearch } from '../../services/selectors';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Layout } from '../../components';
import Poster from '../../components/Poster';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import filterAction from '../../services/actions/movies/filterAction';

const Home = () => {
    const search = useAppSelector(selectSearch);
    const filter = useAppSelector(selectFilter);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(filter.page);
    }, [filter.page]);
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(filterAction({ page: value }))
    };
    const isLoading = () => {
        return !search.isLoading && search.data.Search.length !== 0;
    }
    const calculatePages = () => {
        return Math.floor(search.data.totalResults / 10)
    }
    //const dispatch = useAppDispatch();
    return (
        <Layout>

            <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} sx={{ bgcolor: '#EDE4E3' }}>
                    <Grid container justifyContent="center" spacing={3}>
                        {isLoading() ? (search.data.Search.map((value: any, index: number) => (
                            <Poster movie={{ ...value, key: index }} />
                        ))) : (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={2} ></Grid>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} container justifyContent="center" sx={{ bgcolor: '#EDE4E3' }}>
                    <Stack spacing={2} sx={{ p: 2 }}>
                        <Pagination count={calculatePages()} color="primary" page={page} onChange={handleChange} />
                    </Stack>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Home