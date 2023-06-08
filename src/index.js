import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider} from "react-router-dom"
import {Home} from "./pages/Home";
import {Navigation} from "./pages/Navigation";
import {SetData} from "./container/principal/setData";
import {Header} from "./pages/Header";
import {ViewResult} from "./pages/ViewResult";
import {MiTabla} from "./tests/MiTabla";

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/result",
        element: <ViewResult/>
    }, {
        path: "/principal",
        element: <SetData/>
    },
    {
        path: "/header",
        element: <Header/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navigation/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
