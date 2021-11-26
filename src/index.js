/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UserProvider } from './state/UserProvider';
import * as serviceWorkerRegistration from './sw-registration';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#f99d1f',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#fcd004',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      main: '#fd3d00',
    },
    success: {
      main: '#59e90',
    },
    text: {
      primary: '#393939',
      secondary: '#ffffff',
    },
    background: {
      default: '#FFFFFF',
      section: '#FDDEB4',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
      grey: '#E5E5E5',
    },
  },
});

import App from './components/app/App';

render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Router>
          <App />
        </Router>
      </DndProvider>
    </ThemeProvider>
  </UserProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
