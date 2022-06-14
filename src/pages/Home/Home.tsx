import { useAppSelector } from '../../services';
import { selectFilter, selectSearch } from '../../services/selectors';
import Grid from '@mui/material/Grid';
import { Layout } from '../../components';
import { Poster, PosterPagination } from '../../components/Poster';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const Home = () => {
    const search = useAppSelector(selectSearch);
    const filter = useAppSelector(selectFilter);

    const renderPosters = () => {
        if (!search.isLoading) {
            if (!search.errorMessage)
                return (
                    search.data.Search.map((value: any, index: number) => (
                        <Grid key={index.toString()} item>
                            <Poster movie={value} />
                        </Grid >
                    ))
                )
            else
                return (
                    <div>Film Bulunamadı</div>);
        }
        else
            return (<LoadingSpinner />);
    }
    //const dispatch = useAppDispatch();
    return (
        <Layout>

            <Grid sx={{ flexGrow: 1 }} container spacing={1}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} sx={{ bgcolor: '#EDE4E3' }}>
                    <Grid container justifyContent="center" spacing={1}>
                        {renderPosters()}
                    </Grid>
                </Grid>
                <Grid item xs={2} ></Grid>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} container justifyContent="center" sx={{ bgcolor: '#EDE4E3' }}>
                    <PosterPagination list={{ totalResults: search.data.totalResults, page: filter.page }} />
                </Grid>
            </Grid>
        </Layout>
    )
}