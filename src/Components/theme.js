import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        main: '#6200ee',
                        contrastText: '#ffffff', // Change to your desired primary color
                    },
                }
                : {
                    secondary: {
                        main: '#344955', // Change to your desired secondary color
                    },
                }),
        },
    });