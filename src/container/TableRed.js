import PropTypes from "prop-types";
import React from "react";
import {NameRed} from "./tableData/NameRed";

export const TableRed = ({ip, mascara}) => {

    TableRed.prototype = {
        ip: PropTypes.instanceOf(String).isRequired,
        mascara: PropTypes.instanceOf(String).isRequired
    }
    const arrayIP = []
    const arrayMaskNetwork = []
    const arrayNameNetwork = []
    let nameNetwork = ""
    for (let i = 0; i < ip.length; i++) {
        const char = ip[i]
        if (char !== ".") {
            arrayIP.push(char)
        }
    }
    for (let i = 0; i < mascara.length; i++) {
        const char = mascara[i]
        if (char !== ".") {
            arrayMaskNetwork.push(char)
        }
    }
    for (let i = 0; i < arrayIP.length; i++) {
        let p01 = arrayIP.slice(i, i + 1)
        let p02 = arrayMaskNetwork.slice(i, i + 1)
        if (p01.toString() === "1" && p02.toString() === "1") {
            nameNetwork += "1"
            arrayNameNetwork.push("1")
        } else {
            nameNetwork += "0"
            arrayNameNetwork.push("0")
        }
    }
    localStorage.setItem("NAME_NETWORK",nameNetwork)
    const process = (object) => {
        let table = []
        table.push(
            <td>
                {object.slice(0, 8)}
            </td>
        )
        table.push(
            <td>
                {object.slice(8, 16)}
            </td>
        )
        table.push(
            <td>
                {object.slice(16, 24)}
            </td>
        )
        table.push(
            <td>
                {object.slice(24, 32)}
            </td>
        )
        return table
    }

    return (
        <div className={"my-3"}>
            <table className={"table table-bordered rounded-5"}>
                <tbody>
                <tr>
                    <th className={"h5"}
                        colSpan={4}
                        style={{color: "#b4122f"}}
                    >Ip Binario
                    </th>
                </tr>
                <tr style={{"textAlign": "center"}}>
                    {process(arrayIP)}
                </tr>
                <tr>
                    <th className={"h5"}
                        colSpan={4}
                        style={{color: "#b4122f"}}
                    >Máscara de Red Binario
                    </th>
                </tr>
                <tr>
                    {process(arrayMaskNetwork)}
                </tr>
                <tr>
                    <th className={"h5"}
                        colSpan={4}
                        style={{color: "#b4122f"}}>
                        Nombre de la Red Binario
                    </th>
                </tr>
                <tr>
                    {process(arrayNameNetwork)}
                </tr>
                {/* <tr>
                    <th className={"h5"}
                        colSpan={4}
                        style={{color: "#b4122f"}}>
                        Nombre de la Red Decimal
                    </th>
                </tr>
                <tr>
                    <NameRed nameNetwork={nameNetwork}/>
                </tr>*/}
                </tbody>
            </table>
        </div>
    )
}