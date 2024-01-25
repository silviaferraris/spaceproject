import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    active: Palette['primary'];
    inactive: Palette['primary'];
    tab: Palette['primary']
  }

  interface PaletteOptions {
    active?: PaletteOptions['primary'];
    inactive?: PaletteOptions['primary'];
    tab?: PaletteOptions['primary'];
  }
}

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#007DFE',
      light: '#007DFE',
      contrastText: '#fff',
    },
    active: {
      main: '#C0F3E5',
      contrastText: '#05CD99',
    },
    inactive: {
      main: '#FFF5D2',
      contrastText: '#FFCE20',
    },
    tab: {
      main: '#F4F7FE',
    },
    text: {
      primary: '#2B3674',
      secondary: '#A3AED0',
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: '56px',
    },
    h2: {
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '42px',
    },
    h5: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 'px',
    },
  },
});
