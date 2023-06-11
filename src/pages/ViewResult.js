import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import {DeleteResults} from "../container/deleteResults";
import {ChangeToBinary} from "../container/process/ChangeToBinary";
import {TypeRed} from "../container/process/TypeRed";
import {LongitudRed} from "../container/process/LongitudRed";
import {LengthHosts} from "../container/process/LengthHosts";
import {NombreRed} from "../container/process/NombreRed";
import {Component} from "react";
import {ResultClass} from "../container/process/RessultClass";

export function ViewResult() {
    return (
        <div>
            <TableData/>
            <ResultClass/>
            <Footer/>
        </div>
    )
}

