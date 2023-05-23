import React from "react";

export const CantSubredes = () => {
    const cantSubredes = parseInt(localStorage.getItem("numberBits"))

    function process(cantSubredes) {
        return (Math.pow(2, cantSubredes)) - 2
    }

    return (
        <tr>
            <th className={"h5"}
                style={{color: "#b4122f"}}
            >Cantidad max. direcciones Subredes
            </th>
            <td className={"h5 fw-bold"}
                style={{"color": "#3586FF"}}
            >
                {process(cantSubredes)}
            </td>
        </tr>
    )
}