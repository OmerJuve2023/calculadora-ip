import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, RouterProvider} from "react-router-dom"
import {Home} from "./pages/Home";
import {TableData} from "./container/tableData/TableData";
import {Navigation} from "./pages/Navigation";
import {PPrincipal} from "./pages/PPrincipal";
import {Header} from "./pages/Header";

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/result",
        element: <TableData/>
    }, {
        path: "/principal",
        element: <PPrincipal/>
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
