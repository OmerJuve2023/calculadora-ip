import React from "react";
import {PTableData} from "../../components/PTableData";

export const FormatMaskNetwork = () => {

    const format = localStorage.getItem("BTN_FORMAT")
    const mask = localStorage.getItem("BTN_MASK-NETWORK")

    const process = (format, mask) => {
        return PTableData.mascaraRed(format, mask)
    }

    return (
        <td>
            {process(format, mask)}
        </td>
    )
}
