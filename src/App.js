import router from "./router";
import api from "./api";

import {
    RouterProvider,
} from "react-router-dom";

import './App.css'

import AppHeader from "./components/app-header/AppHeader";
import AppFooter from "./components/app-footer/AppFooter";

import {useEffect} from "react";

function App() {
    useEffect(() => {
        api.checkColumns()
    }, [])

    return (
        <div className="main-wrapper">
            <AppHeader/>
            <div className="main-wrapper__content">
                <RouterProvider router={router}></RouterProvider>
            </div>
            <AppFooter/>
        </div>
    )
}

export default App;
