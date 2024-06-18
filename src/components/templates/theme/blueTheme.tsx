import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const themeOptions = {
    palette: {
        primary: {
            main: '#2F358B',
        },
        secondary: {
            main: '#009FE3',
        },
        error: {
            main: red.A400,
        },
    },
};

export const blueTheme = createTheme(themeOptions);