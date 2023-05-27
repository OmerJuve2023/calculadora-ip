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
        <td>
            {process(nameNetwork)}
        </td>
    )
}