/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './style.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7400b8',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div />
  </ThemeProvider>
);

export default App;
