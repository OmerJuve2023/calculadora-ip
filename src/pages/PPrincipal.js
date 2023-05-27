import React, {useState} from 'react';
import {Methods} from "../components/Methods";
import {ProcessBinary} from "../container/processBinary";
import {TableRed} from "../container/TableRed";
import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import "../styles/styles.css"

export function PPrincipal() {
    const [ip, setIP] = useState("");
    const [maskNetwork, setMaskNetwork] = useState("")
    const [binaryIP, setBinaryIP] = useState("");
    const [binaryMaskNetwork, setBinaryMaskNetwork] = useState("");
    const [enable, setEnable] = useState(false);
    const [format, setFormat] = useState('');
    const handleInputIPChange = (event) => {
        setIP(event.target.value)
    }
    const handleInputMaskChange = (event) => {
        setMaskNetwork(event.target.value)
    }
    const handleFormatChange = (e) => {
        setFormat(e.target.value);
    }

    const convertToBinary = () => {
        setBinaryIP(Methods.convertToBinary(ip))
        if (format === "bits") {
            console.log("se ingreso aquí")
            const decimalMask = Methods.convertMaskBitsToDecimal(maskNetwork)
            setMaskNetwork(decimalMask)
            setBinaryMaskNetwork(Methods.convertToBinary(decimalMask))
        } else {
            setBinaryMaskNetwork(Methods.convertToBinary(maskNetwork))
        }
        setEnable(true);
        localStorage.setItem("NUMBER_IP", ip)
        localStorage.setItem("NUMBER_MASK-NETWORK", maskNetwork)
    }

    const clearResults = () => {
        setIP("")
        setBinaryIP("")
        setMaskNetwork("")
        setBinaryMaskNetwork("")
        setFormat("")
        setEnable(false)
        Methods.clearLocalStorage()
    }

    return (
        <div id={"principal"} className={"masthead text-center"}>
            <div className="py-5 mx-4 conta-color">
                <div className="row align-items-center">
                    <div className="masthead-content">
                        <div className="container px-5"
                             style={{alignItems: "center"}}>
                            <input
                                type="text"
                                className="form-control"
                                value={ip}
                                placeholder="Ingrese la IP"
                                disabled={enable}
                                onChange={handleInputIPChange}
                                required
                            />
                            <input
                                type="text"
                                value={maskNetwork}
                                className="form-control my-4"
                                placeholder="Ingrese la Máscara de Red"
                                onChange={handleInputMaskChange}
                                disabled={enable}
                                required
                            />
                            <select
                                disabled={enable}
                                value={format}
                                className="form-select"
                                onChange={handleFormatChange}
                                required
                            >
                                <option value="" disabled selected>
                                    Ingrese Mascara de Red
                                </option>
                                <option value="bits">Bits</option>
                                <option value="decimal">Decimal</option>
                            </select>
                            <button className="btn btn-xl rounded-pill mt-5"
                                    onClick={convertToBinary}
                                    disabled={enable}
                                    style={{backgroundColor: "#3586ff", color: "#fff"}}
                            >resolver
                            </button>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle"></div>
                    <div className="bg-circle-2 bg-circle"></div>
                    <div className="bg-circle-3 bg-circle"></div>
                    <div className="bg-circle-4 bg-circle"></div>

                    {/*  <div className="col-sm-auto mx-1 my-1">
                        <button
                            onClick={convertToBinary}
                            className="btn"
                            style={{backgroundColor: "#3586ff", color: "#fff"}}
                            disabled={enable}
                        >
                            Convertir a Binario
                        </button>
                    </div>
                    <div className="col-sm-auto mx-1 my-1">
                        <button
                            className="btn"
                            style={{backgroundColor: "#35ebff"}}
                            onClick={clearResults}
                        >
                            Limpiar
                        </button>
                    </div>*/}

                </div>

                {enable && (
                    <div className="container my-5">
                        <div>
                            <ProcessBinary ip={ip} title="Proceso IP"/>
                        </div>
                        <div>
                            <ProcessBinary ip={maskNetwork} title="Proceso Máscara de red"/>
                        </div>
                        <div>
                            <TableRed ip={binaryIP} mascara={binaryMaskNetwork}/>
                        </div>
                        <div>
                            <TableData/>
                        </div>
                        {/*<button className="btn btn-xl rounded-pill mt-5"
                                onClick={convertToBinary}
                                disabled={enable}
                                style={{backgroundColor: "#3586ff", color: "#fff"}}
                        >resolver
                        </button>*/}
                        <button
                            className="btn btn-warning btn-xl rounded-pill mt-5"
                            onClick={clearResults}
                        >
                            Limpiar
                        </button>
                    </div>
                )}
            </div>
            {enable && (
                <Footer/>
            )}
        </div>
    )
}