


import FilterAlt from '@mui/icons-material/FilterAlt';
import { useAppDispatch } from '../../services';
import { useState, MouseEvent } from 'react';
import { filterAction, filterClearAction } from '../../services/actions/movies/filterAction';
import { SelectChangeEvent, IconButton, Menu, MenuItem, Fade } from '@mui/material';

import './filter.scss';
import FilterElement from './filterElement';
const PostFilter = () => {


    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClear = () => {
        setAnchorEl(null);
        setType('');
        setSearchYear('');
        dispatch(filterClearAction());
    };

    const [type, setType] = useState('');
    const [searchYear, setSearchYear] = useState('');
    const getYears = () => {
        return Array.from(Array(50).keys()).map((value) => { return { "value": (2022 - value).toString(), "label": (2022 - value).toString() } });
    };

    const handleYearChange = (event: SelectChangeEvent) => {
        setSearchYear(event.target.value as string);
        //handleSearch();
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
        //handleSearch();
    };
    const handleSearch = () => {
        setAnchorEl(null);
        dispatch(filterAction({ t: type, y: searchYear }));
    };
    return (
        <>

            <IconButton
                size="large"
                id="fade-button"
                aria-label="account of current user"
                aria-haspopup="true"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
            >
                <FilterAlt />
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                sx={{ flexDirection: 'row' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <FilterElement selectValue={{
                    selected: searchYear,
                    selectList: getYears(),
                    handleChange: handleYearChange
                }} />
                <FilterElement selectValue={{
                    selected: type,
                    selectList: [{ value: "movie", label: "Film" }, { value: "series", label: "Dizi" }, { value: "episode", label: "Sezon" }],
                    handleChange: handleTypeChange
                }} />
                <MenuItem>

                </MenuItem>
                <MenuItem onClick={handleClear}>Clear</MenuItem>
                <MenuItem onClick={handleSearch}>Uygula</MenuItem>
            </Menu></>
    )
}

export default PostFilter;
