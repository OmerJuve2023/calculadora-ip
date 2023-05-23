import PropTypes from "prop-types";
import React, {useState} from "react";
import {NumberBits} from "./NumberBits";
import {NumberHost} from "./NumberHost";
import {CantHosts} from "./CantHosts";
import {CantSubredes} from "./CantSubredes";

export const ClaseIP = ({ip, maskNetwork}) => {

    ClaseIP.prototype = {
        ip: PropTypes.instanceOf(String).isRequired,
        maskNetwork: PropTypes.instanceOf(String).isRequired
    }
    const one = ip.substring(0, 3)
    let rpta = useState("")
    const clase = (object) => {
        let clas = parseInt(object)
        if (clas >= 1 && clas <= 127) rpta = "A"
        else if (clas >= 128 && clas <= 191) rpta = "B"
        else if (clas >= 192 && clas <= 223) rpta = "C"
        else if (clas >= 224 && clas <= 239) rpta = "D"
        else if (clas >= 240 && clas <= 255) rpta = "E"
        return rpta
    }
    return (
        <div>
            <div>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <th className={"h5"}
                            style={{color: "#b4122f"}}
                        >Tipo de Red
                        </th>
                        <td className={"h5 fw-bold"}
                            style={{"color": "#3586FF"}}
                        >{clase(one)}</td>
                    </tr>
                    <NumberBits mask={maskNetwork}/>
                    <NumberHost/>
                    <CantHosts/>
                    <CantSubredes/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}