import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { blueTheme } from './blueTheme';

interface AppThemeProps {
    children: ReactNode;
}

export const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
    return (
        <ThemeProvider theme={blueTheme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0 } }} />
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};