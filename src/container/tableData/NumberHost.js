import React from "react";
import {PTableData} from "../../components/PTableData";

export const NumberHost = () => {
    const hosts = parseInt(localStorage.getItem("NUMBER_BITS"))

    function process(hosts) {
        return PTableData.longitudHosts(hosts)
    }

    return (
        <td>
            {process(hosts)}
        </td>
    )
}