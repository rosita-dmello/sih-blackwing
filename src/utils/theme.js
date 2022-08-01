import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#FC6722',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#302F4D',
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