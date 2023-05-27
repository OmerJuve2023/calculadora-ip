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
        <div id={"principal"}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm mx-1 my-1">
                        <input
                            type="text"
                            className="form-control"
                            value={ip}
                            placeholder="Ingrese la IP"
                            disabled={enable}
                            onChange={handleInputIPChange}
                            required
                        />
                    </div>
                    <div className="col-sm mx-1 my-1">
                        <input
                            type="text"
                            value={maskNetwork}
                            className="form-control"
                            placeholder="Ingrese la Máscara de Red"
                            onChange={handleInputMaskChange}
                            disabled={enable}
                            required
                        />
                    </div>
                    <div className="col-sm mx-1 my-1">
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
                    </div>
                    <div className="col-sm-auto mx-1 my-1">
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
                    </div>
                </div>

                {enable && (
                    <div className="my-5">
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

                    </div>
                )}
            </div>
            {enable && (
                <Footer/>
            )}
        </div>
    )
}