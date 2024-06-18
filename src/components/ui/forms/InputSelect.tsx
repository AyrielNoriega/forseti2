import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const InputSelect = ({data}: any) => {
    const [ciu] = useState(data.value);
    const props = JSON.parse(data.props);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setCiu(event.target.value);
    // };

    return (
        <FormControl sx={{
            ...props,
            width: { xs: '100%', md: `${data.width}`}
        }}>
            <InputLabel id={`${data.key}-select-helper-label`}>{data.title}</InputLabel>
            <Select
                labelId={`${data.key}-select-helper-label`}
                id={`${data.key}-select-helper`}
                value={ciu}
                label={data.title}
                // onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {/* {data.items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>{item.value}</MenuItem>
                ))} */}
            </Select>
            <FormHelperText>{data.helperText}</FormHelperText>
        </FormControl>
    );
};
