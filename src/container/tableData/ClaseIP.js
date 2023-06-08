import React from "react";
import {PTableData} from "../../components/PTableData";

export const ClaseIP = () => {

    const ip = localStorage.getItem("NUMBER_IP").toString()
    const process = (object) => {
        return PTableData.clase(object)
    }
    return (
        <td className={"alineadoTD"}>
            {process(ip)}
        </td>
    )
}