import React from "react";

export const ClaseIP = () => {

    const ip = localStorage.getItem("NUMBER_IP").toString()
    const clase = (object) => {
        let one = object.substring(0, 3)
        let clas = parseInt(one)
        let rpta = ""
        if (clas >= 1 && clas <= 127) rpta = "A"
        else if (clas >= 128 && clas <= 191) rpta = "B"
        else if (clas >= 192 && clas <= 223) rpta = "C"
        else if (clas >= 224 && clas <= 239) rpta = "D"
        else if (clas >= 240 && clas <= 255) rpta = "E"
        return rpta
    }
    return (
        <tr>
            <th className={"h5"}
                style={{color: "#b4122f"}}
            >Tipo de Red
            </th>
            <td className={"h5 fw-bold"}
                style={{"color": "#3586FF"}}
            >{clase(ip)}</td>
        </tr>
    )
}