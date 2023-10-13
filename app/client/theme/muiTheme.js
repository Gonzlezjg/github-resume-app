import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#21262d',
      default: '#010409',
    },
    text: {
      primary: '#e6edf3',
      secondary: '#7d8590',
    },
  },
});
