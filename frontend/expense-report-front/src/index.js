import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Button} from "@mui/material";
import {StatsPage} from "./pages/StatsPage";
import 'resize-observer-polyfill/dist/ResizeObserver.global'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={"/stats"} element={<StatsPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
