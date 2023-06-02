import React from "react";
import {PTableData} from "../../components/PTableData";

export const CantSubredes = () => {
    const cantSubredes = parseInt(localStorage.getItem("NUMBER_BITS"))
    function process(subRedes) {
        return PTableData.cantidadSubredes(subRedes)
    }

    return (
        <td className={"alineadoTD"}>
            {process(cantSubredes)}
        </td>
    )
}