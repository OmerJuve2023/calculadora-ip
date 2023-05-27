import React, {useState} from 'react';
import {Methods} from "../components/Methods";
import {ProcessBinary} from "../container/processBinary";
import {TableRed} from "../container/TableRed";
import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";

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
        <div className={"masthead text-center principal"}>
            <div className="py-5 mx-4 conta-color">
                <div id={"principal"} className="row align-items-center">
                    <div className="masthead-content">
                        <div className="container px-5 contendor"
                             style={{alignItems: "center"}}>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                value={ip}
                                placeholder="ingrese IP"
                                disabled={enable}
                                onChange={handleInputIPChange}
                                required
                                style={{color: "#ee0979"}}
                            />
                            <select
                                disabled={enable}
                                value={format}
                                className="form-select my-4 form-select-lg"
                                onChange={handleFormatChange}
                                required
                                style={{color: "#ee0979"}}
                            >
                                <option value="" disabled selected>
                                    tipo máscara de Red
                                </option>
                                <option value="bits">Bits</option>
                                <option value="decimal">Decimal</option>
                            </select>
                            <input
                                type="text"
                                value={maskNetwork}
                                className="form-control my-4 form-control-lg"
                                placeholder="ingrese máscara"
                                onChange={handleInputMaskChange}
                                disabled={enable}
                                style={{color: "#ee0979"}}
                                required
                            />
                            <button className="btn btn-xl rounded-pill mt-5"
                                    onClick={convertToBinary}
                                    disabled={enable}
                                    style={{backgroundColor: "#3586ff", color: "#fff"}}
                            >resolver
                            </button>
                        </div>
                    </div>
                </div>
                {enable && (
                    <div id={"viewResult"}>
                        <div className={"container my-5"}>
                            <TableData/>
                        </div>
                        <div>
                            <ProcessBinary ip={ip} title="Proceso IP"/>
                        </div>
                        <div>
                            <ProcessBinary ip={maskNetwork} title="Proceso Máscara de red"/>
                        </div>
                        <div>
                            <TableRed ip={binaryIP} mascara={binaryMaskNetwork}/>
                        </div>
                        <button
                            className="btn btn-warning btn-xl rounded-pill mt-5"
                            onClick={clearResults}>
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