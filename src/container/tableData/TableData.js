import {NumberBits} from "./NumberBits";
import {NumberHost} from "./NumberHost";
import {CantHosts} from "./CantHosts";
import {CantSubredes} from "./CantSubredes";
import React from "react";
import {ClaseIP} from "../ClaseIP";
import {NameRed} from "./NameRed";

export const TableData = () => {
    return (
        <div className={" row justify-content-center my-5"}>
            <div className={"col-6"}>
                <table className={"table"}>
                    <tbody>
                    <ClaseIP/>
                    <NumberBits/>
                    <NumberHost/>
                    <CantHosts/>
                    <CantSubredes/>
                    <NameRed/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}