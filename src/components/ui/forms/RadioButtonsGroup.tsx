import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
// import { useTheme } from '@mui/material/styles';


interface RadioItem {
    value: string;
    selected: boolean;
}

interface RadioButtonsGroupProps {
    id: number;
    name: string;
    label?: string;
    width: string;
    helperText?: string;
    data: any;
    // setData: React.Dispatch<React.SetStateAction<any>>;
    error?: string | undefined;
    handleBlur: (e: React.FocusEvent <any, Element>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched: boolean;
    value: string;
    items?: RadioItem[];
}

export const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
    id,
    name,
    label,
    width,
    // helperText,
    // data,
    error,
    handleBlur,
    handleChange,
    touched,
    value,
    items
}) => {

    return (
        <FormControl
            sx={{
                padding: 0.2,
                width: { xs: '100%', md: width },
                marginLeft: 1
            }}
        >
            <FormLabel id={`row-radio-buttons-group-${id.toString()}`}>{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby={name}
                name={name}
                onBlur={handleBlur}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                value={value}
            >
                {
                    items?.map((item, index) => (
                        <FormControlLabel
                            key={index}
                            checked={item.selected}
                            value={item.value}
                            control={<Radio  />}
                            label={item.value}
                        />
                    ))
                }
            </RadioGroup>

            {(touched && error) && (
                <FormHelperText
                    sx={{ marginTop: '0', marginLeft: '14px', marginBottom: '12px', }}
                    error
                    // id="helper-text-nombre_eo"
                >
                    {error}
                </FormHelperText>
            )}
        </FormControl>
    );
};
