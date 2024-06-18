import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface InputTextGroupFieldProps {
    id: string;
    name: string;
    label: string;
    width: string;
    props: string;
    helperText: string;
    data: any;
    setData: (data: any) => void;
    error: string | undefined;
    handleBlur: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched: boolean;
    value: string;
}

export const InputTextGroupField: React.FC<InputTextGroupFieldProps> = ({ 
    id,
    name,
    label,
    width,
    props,
    data,
    setData,
    error,
    handleBlur,
    handleChange,
    touched,
    value
}) => {
    const theme = useTheme();
    const propss = JSON.parse(props);

    return (

        <FormControl
            sx={{
                ...propss,
                width: { xs: '100%', md: width }
            }}
        >
            <TextField
                color={ error !== undefined ? 'primary' : 'success'}
                error={!!((error !== undefined && touched)) }
                // helperText={helperText}
                id={id.toString() + new Date().getMilliseconds()}
                label={label}
                margin="normal"
                name={name.toString()}
                onBlur={handleBlur}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                    setData({ ...data, [e.target.name]: e.target.value }); // Actualiza los datos de useForm
                }}
                required
                type="text"
                value={value}
                InputProps={{
                    startAdornment: (error === undefined && touched) && (
                        <InputAdornment position="start">
                            <CheckCircleOutlineIcon style={{ color: theme.palette.success.main }} />
                        </InputAdornment>
                    )
                }}
                // theme.palette.secondary.main
            />
            {(touched && error) && (
                <FormHelperText
                    sx={{ marginTop: '0', marginLeft: '14px', marginBottom: '12px' }}
                    error
                    // id="helper-text-nombre_eo"
                >
                    {error}
                </FormHelperText>
            )}
        </FormControl>
    );
};
