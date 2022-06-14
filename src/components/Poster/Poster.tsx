import Paper from '@mui/material/Paper';

import { useNavigate } from "react-router-dom";

import './Poster.scss'

type Props = {
    movie: {
        Title: string,
        Year: string,
        Poster: string,
        imdbID: string
    }
    // children: JSX.Element,
};

export const Poster = ({ movie }: Props) => {

    let navigate = useNavigate();

    const movieDetail = () => {
        navigate(`/detail/${movie.imdbID}`);
    };

    return (
        <Paper
            onClick={movieDetail}
            sx={{
                borderRadius: '10px',
                padding: '5px',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }} >
            <Paper
                sx={{
                    height: 200,
                    width: 160,
                    backgroundImage: `url(${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150'})`,
                    backgroundSize: '100% 100%',
                }}
            >

            </Paper>
            <div className='title'>{movie.Title}</div>
            <span className='year'>{movie.Year}</span><br />

            <span className='imdbId'>{movie.imdbID}</span>
        </Paper>
    )
}
