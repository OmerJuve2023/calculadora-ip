import React from "react";

export const NumberHost = () => {
    const hosts = parseInt(localStorage.getItem("NUMBER_BITS"))

    function process(hosts) {
        const num = 32 - hosts
        localStorage.setItem("NUMBER_HOSTS", num.toString())
        return num
    }

    return (
        <tr>
            <th className={"h5"}
                style={{color: "#b4122f"}}
            >Bits Destinados a Hots
            </th>
            <td className={"h5 fw-bold"}
                style={{"color": "#3586FF"}}
            >
                {process(hosts)}
            </td>
        </tr>
    )
}