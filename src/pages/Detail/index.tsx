import { Layout } from '../../components'
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { detailAction, useAppDispatch, useAppSelector } from '../../services';
import { selectDetail } from '../../services/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
const Detail = () => {

    const detail = useAppSelector(selectDetail);

    const dispatch = useAppDispatch();
    // Get the userId param from the URL.
    let { imdbId } = useParams();
    useEffect(() => {
        if ((Object.keys(detail.data).length === 0 || imdbId !== detail.data.imdbID) && detail.isLoading === false) {
            dispatch(detailAction({ i: imdbId }));
        }
    }, [detail, imdbId, dispatch]);
    const isLoading = () => {
        return !detail.isLoading && Object.keys(detail.data).length !== 0;
    }
    return (
        <Layout>

            <Grid sx={{ flexGrow: 1 }} container spacing={1}>
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} sx={{ bgcolor: '#EDE4E3' }}>
                    <Grid container justifyContent="center" spacing={1}>
                        {(isLoading()) ? (<>
                            <Grid key={1} item xs={4} sx={{ bgcolor: '#EDE4E3' }}>
                                <img src={detail.data.Poster} alt="poster" />
                            </Grid>
                            <Grid key={2} item xs={8} sx={{ bgcolor: '#EDE4E3' }}>
                                <span>Başlık : {detail.data.Title}</span><br />
                                <span>Süre : {detail.data.Runtime}</span><br />
                                <span>Tür : {detail.data.Genre}</span><br />
                                <span>Yönetmen : {detail.data.Director}</span><br />
                                <span>Oyuncular : {detail.data.Actors}</span><br />
                                <span>IMDb puanı : {detail.data.imdbRating}</span>
                            </Grid></>
                        ) : (<Box sx={{ display: 'flex' }}><CircularProgress /></Box>)}
                    </Grid>
                </Grid>

            </Grid>
        </Layout>

    )
}

export default Detail