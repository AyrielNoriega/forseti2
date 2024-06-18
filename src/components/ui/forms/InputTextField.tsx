import { InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface InputTextFieldProps {
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
}

export const InputTextField: React.FC<InputTextFieldProps> = ({
    id,
    name,
    label,
    width,
    error,
    handleBlur,
    handleChange,
    touched,
    value
}) => {
    const theme = useTheme();

    return (

        <FormControl
            sx={{
                padding: 0.2,
                width: { xs: '100%', md: width }
            }}
        >
            <TextField
                color={ error !== undefined ? 'primary' : 'success'}
                error={!!((error !== undefined && touched)) }
                // helperText={helperText}
                id={id.toString()}
                label={label}
                margin="normal"
                name={name}
                onBlur={handleBlur}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                required
                size="small"
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
