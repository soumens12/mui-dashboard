import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ee',
      contrastText: '#ffffff', // Change to your desired primary color
    },

    secondary: {
      main: '#344955', // Change to your desired secondary color
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#ffffff', // 👈 global icon button color
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff', // 👈 global icon color
        },
      },
    },
    ListItemIcon: {
      styleOverrides: {
        root: {
          color: "#000"
        }
      }
    }
  },


});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

