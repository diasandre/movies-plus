/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './style.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#da0037',
    },
    secondary: {
      main: '#EDEDED',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
