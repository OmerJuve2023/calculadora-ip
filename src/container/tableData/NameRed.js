import React from "react";
import {PTableData} from "../../components/PTableData";

export const NameRed = () => {

    const ip = localStorage.getItem("NUMBER_IP")
    const mask = localStorage.getItem("NUMBER_MASK-NETWORK")

    function process(ip, mask) {
        return PTableData.nombreRed(ip, mask)
    }

    return (
        <td className={"alineadoTD"}>
            {process(ip, mask)}
        </td>
    )
}