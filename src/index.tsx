import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light'
    },
    typography: {
        allVariants: {
            fontFamily: 'Lora serif',
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);


