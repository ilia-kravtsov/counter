import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";
import AppWithReducers from "./AppWithReducers";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./components/Reducers/store";

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
        <Provider store={store}>
            <AppWithRedux/>
        </Provider>
    </ThemeProvider>
);


