import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './Poster.scss'

type Props = {
    movie: {
        key: number,
        Title: string,
        Year: string,
        Poster: string,
        imdbID: string
    }
    // children: JSX.Element,
};

const Poster = ({ movie }: Props) => {
    const [spacing, setSpacing] = useState(2);
    return (
        <Grid key={movie.key} sx={{
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }} item>
            <Paper
                sx={{
                    height: 200,
                    width: 160,
                    backgroundImage: `url(${movie.Poster})`,
                    backgroundSize: '100% 100%',
                }}
            >

            </Paper>
            <div className='title'>{movie.Title}</div>
            <span className='year'>{movie.Year}</span><br />

            <span className='imdbId'>{movie.imdbID}</span>
        </Grid >
    )
}

export default Poster;
