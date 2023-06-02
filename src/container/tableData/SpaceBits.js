import React from "react";
import {PTableData} from "../../components/PTableData";

export const SpaceBits = () => {
    const mask = localStorage.getItem("NUMBER_MASK-NETWORK")

    const process = (mask) => {
        return PTableData.longitudRed(mask)
    }

    return (
        <td>
            {process(mask)}
        </td>

    )
}

