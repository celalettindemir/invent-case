import { useAppSelector } from '../../services';
import { selectSearch } from '../../services/selectors';
import Grid from '@mui/material/Grid';
import { Layout } from '../../components';
import Poster from '../../components/Poster';
import PosterPagination from '../../components/Poster/pagition';
import LoadingSpinner from '../../components/LoadingSpinner';

const Home = () => {
    const search = useAppSelector(selectSearch);

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
                    <PosterPagination />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Home