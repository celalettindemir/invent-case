
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type Props = {
    selectValue: {
        title: string,
        selected?: string,
        selectList: { value: string, label: string }[]
        handleChange: (event: SelectChangeEvent) => void
    }
    // children: JSX.Element,
};

export const FilterElement = ({ selectValue }: Props) => {

    return (
        <MenuItem>
            <Box sx={{ minWidth: 120, }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tür</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue.selected}
                        label="Tür"
                        onChange={selectValue.handleChange}
                    >
                        {selectValue.selectList.map((element, index) => (
                            <MenuItem key={index} value={element.value}>{element.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </MenuItem>
    )
}
