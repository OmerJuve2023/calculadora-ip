import React from "react";

export const CantHosts = () => {
    const cantHosts = parseInt(localStorage.getItem("hosts"))

    function process(cantHosts) {
        return (Math.pow(2,cantHosts))-2
    }

    return (
        <tr>
            <th className={"h5"}
                style={{color: "#b4122f"}}
            >Cantidad max. direcciones Hosts
            </th>
            <td className={"h5 fw-bold"}
                style={{"color": "#3586FF"}}
            >
                {process(cantHosts)}
            </td>
        </tr>
    )
}