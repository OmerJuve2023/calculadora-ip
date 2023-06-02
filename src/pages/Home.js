import {Header} from "./Header";
import {SetData} from "./setData";
import React from "react";
import {Contenido} from "./Contenido";
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