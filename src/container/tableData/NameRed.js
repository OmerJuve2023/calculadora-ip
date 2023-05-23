import React from "react";

export const NameRed = () => {

    let nameNetwork = localStorage.getItem("NAME_NETWORK")

    function process(nameNetwork) {
        const octets = [];
        for (let i = 0; i < nameNetwork.length; i += 8) {
            const octet = nameNetwork.substr(i, 8);
            octets.push(parseInt(octet, 2));
        }
        return octets.join('.')
    }

    return (
        <tr>
            <th className={"h5"}
                style={{color: "#b4122f"}}
            >Nombre de Red
            </th>
            <td className={"h5 fw-bold"}
                style={{"color": "#3586FF"}}
            >
                {process(nameNetwork)}
            </td>
        </tr>
    )
}