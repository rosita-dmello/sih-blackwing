import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#3e92cc',
        light: '#87adf3',
      },
      secondary: {
        main: '#e5e5e5',
      },
    },
    typography: {
      h1: {
        fontFamily: '"Roboto Condensed", "Roboto", "Helvetica", "Arial", sans-serif',
      },
      
    },
    mixins: {
        toolbar: {
            minHeight: 80
        }
    },
  });