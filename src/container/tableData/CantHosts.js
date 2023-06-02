import React from "react";
import {PTableData} from "../../components/PTableData";

export const CantHosts = () => {
    const cantHosts = parseInt(localStorage.getItem("NUMBER_HOSTS"))

    function process(hosts) {
        return PTableData.cantidadHosts(hosts)
    }

    return (
        <td className={"alineadoTD"}>
            {process(cantHosts)}
        </td>
    )
}