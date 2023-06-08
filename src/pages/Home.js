import {Header} from "./Header";
import {SetData} from "../container/principal/setData";
import React from "react";
import {Contenido} from "../container/principal/Contenido";
import {Footer} from "./Footer";

export function Home() {
    return (
        <div>
            <Header/>
            <Contenido/>
            <SetData/>
            <Footer/>
        </div>
    )
}