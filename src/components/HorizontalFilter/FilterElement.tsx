
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
                    <InputLabel id={selectValue.title.toLowerCase() + "-simple-select-label"}>{selectValue.title}</InputLabel>
                    <Select
                        labelId={selectValue.title.toLowerCase() + "-simple-select-label"}
                        id={selectValue.title.toLowerCase() + "-simple-select"}
                        value={selectValue.selected}
                        label={selectValue.title}
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
