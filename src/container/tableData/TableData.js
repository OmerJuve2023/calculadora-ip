import {NumberBits} from "./NumberBits";
import {NumberHost} from "./NumberHost";
import {CantHosts} from "./CantHosts";
import {CantSubredes} from "./CantSubredes";
import React from "react";
import {ClaseIP} from "../ClaseIP";

export const TableData = () => {
    return (
        <div className={" row justify-content-center my-5"}>
            <table>
                <tbody>
                <ClaseIP/>
                <NumberBits/>
                <NumberHost/>
                <CantHosts/>
                <CantSubredes/>
                </tbody>
            </table>
        </div>
    )
}