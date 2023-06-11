import React, {useState} from "react";
import {Methods} from "../../components/Methods";

export function NombreRed() {
    const [enableProcess, setEnableProcess] = useState(false)
    const viewTable = () => {
        setEnableProcess(!enableProcess);
    }

    const ip_binario = localStorage.getItem("BTN_IP")
    const mask_binario = localStorage.getItem("NUMBER_MASK-NETWORK")
    const ipArray = ip_binario.split('.')
    const maskArray = mask_binario.split(".")


    function createTables(object1, object2) {
        const element1 = Methods.convertToBinary(object1)
        const element2 = Methods.convertToBinary(object2)
        const resultArray = [];

        const maxLength = Math.max(element1.length, element2.length);
        const paddedNumber1 = element1.padStart(maxLength, '0');
        const paddedNumber2 = element2.padStart(maxLength, '0');

        for (let i = 0; i < maxLength; i++) {
            const bit1 = paddedNumber1.charAt(i);
            const bit2 = paddedNumber2.charAt(i);
            const result = bit1 === '1' && bit2 === '1' ? '1' : '0';
            resultArray.push(result);
        }
        return (
            enableProcess && (
                <div className={"row justify-content-center"}>
                    <div className={"col-md-offset-1 col-md-8"}>
                        <div className={"panel"}>
                            <div className={"panel-body table-responsive"}>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <th>IP</th>
                                        <td>{object1}</td>
                                        {element1.split("").map((binaryNumber, index) => (
                                            <td key={index}
                                                style={{color: "#1d1c25"}}
                                            >{binaryNumber}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <th>Mask</th>
                                        <td>{object2}</td>
                                        {element2.split("").map((binaryNumber, index) => (
                                            <td key={index}
                                                style={{color: "#1d1c25"}}
                                            >{binaryNumber}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <th><b>Result</b></th>
                                        <td></td>
                                        {resultArray.map((binaryNumber, index) => (
                                            <td key={index}
                                            ><b>{binaryNumber}</b></td>
                                        ))}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

    function description() {
        return (
            enableProcess && (

                <div className={"col-auto"}>
                    <div className={"panel col-md-3"}>
                        <div className={"panel-body"}>
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <td>IP</td>
                                    <td
                                        style={{
                                            alignItems: "center",
                                            textAlign: "center"
                                        }}
                                    >{localStorage.getItem("NUMBER_IP")}</td>
                                </tr>
                                <tr>
                                    <td>MASK</td>
                                    <td
                                        style={{
                                            alignItems: "center",
                                            textAlign: "center"
                                        }}
                                    >{localStorage.getItem("NUMBER_MASK-NETWORK")}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            )
        )
    }

    return (
        <div className={"container"}>
            <div className={"row align-items-center"}>
                <div className={"col-auto"}>
                    <h2 className={"text-start"} style={{color: "#3586FF"}}>
                        Nombre de Red
                    </h2>
                </div>
                <div className={"col d-flex justify-content-end btn-lg"}>
                    <button
                        type={"button"}
                        className={"my-3 btn processBinary-button"}
                        onClick={viewTable}
                    >
                        <b>{enableProcess ? "Ocultar" : "Mostrar"}</b>
                    </button>
                </div>
                <div className={"container"}>
                {description()}
                </div>
                <div className={"my-3"}>
                    {createTables(ipArray[0], maskArray[0])}
                </div>
                <div className={"my-3"}>
                    {createTables(ipArray[1], maskArray[1])}
                </div>
                <div className={"my-3"}>
                    {createTables(ipArray[2], maskArray[2])}
                </div>
                <div className={"my-3"}>
                    {createTables(ipArray[3], maskArray[3])}
                </div>
            </div>
        </div>
    )
}