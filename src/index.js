import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';

export const theme =  ({
  colors: {
    isOnline: '#4CC54C',
    isOffline: '#EE1E1E',
    dark: '#2e2e2e',
    white: '#ffffff',
    gray: '#9a9797',
    bgItem: '#eeeeee',
    bgBody: '#d4d3d3',
    bgRow: '#83A2F5',
    light: '#f2f2f2',
    border: 'rgba(149, 157, 165, 0.2)',
    borderTableHead: 'rgba(255, 255, 255, 0.534)',
    borderTableBody: 'rgba(114, 114, 114, 0.2)',
  },
  fontSizes: {
    small: '10px',
    medium: '12px',
    large: '14px',
    xl: '18px',
  },
  utils: {
    shadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
