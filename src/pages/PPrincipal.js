import React, {useState} from 'react';
import {Methods} from "../components/Methods";
import {ProcessBinary} from "../container/processBinary";
import {ClaseIP} from "../container/ClaseIP";
import {TableRed} from "../container/TableRed";
import {DireccIp} from "../container/DireccIp";

export function PPrincipal() {
    const [ip, setIP] = useState("");
    const [maskNetwork, setMaskNetwork] = useState("")
    const [binaryIP, setBinaryIP] = useState("");
    const [binaryMaskNetwork, setBinaryMaskNetwork] = useState("");
    const [enable, setEnable] = useState(false)
    const handleInputIPChange = (event) => {
        setIP(event.target.value)
    }
    const handleInputMaskChange = (event) => {
        setMaskNetwork(event.target.value)
    }
    const convertToBinary = () => {
        setBinaryIP(Methods.convertToBinary(ip))
        setBinaryMaskNetwork(Methods.convertToBinary(maskNetwork))
        setEnable(true)
    }

    const clearResults = () => {
        setIP("")
        setBinaryIP("")
        setMaskNetwork("")
        setBinaryMaskNetwork("")
        setEnable(false)
        localStorage.removeItem("nameNetwork")
        localStorage.removeItem("host")
        localStorage.removeItem("hosts")
        localStorage.removeItem("numberBits")
    }

    return (
        <div className={"container"}>
            <h2
                className={"my-5"}
            >Taller de Redes, Voz y Video</h2>
            <div className="row align-items-center">
                <div className="col">
                    <input type="text"
                           className={"form-control"}
                           value={ip}
                           placeholder={"ingrese la IP"}
                           disabled={enable}
                           onChange={handleInputIPChange}/>
                </div>
                <div className="col">
                    <input type="text"
                           value={maskNetwork}
                           className={"form-control"}
                           placeholder={"Ingrese la Máscara de Red"}
                           onChange={handleInputMaskChange}
                           disabled={enable}/>
                </div>
                <div className="col-auto">
                    <button onClick={convertToBinary}
                            className={"btn"}
                            style={{
                                "backgroundColor": "#3586ff",
                                "color": "#fff"
                            }}
                            disabled={enable}>Convertir a Binario
                    </button>
                </div>
                <div className="col-auto">
                    <button className={"btn"}
                            style={{"backgroundColor": "#35ebff"}}
                            onClick={clearResults}>Limpiar
                    </button>
                </div>
            </div>

            {enable && (
                <div className={"my-5"}>
                    <div>
                        <ClaseIP ip={ip} maskNetwork={maskNetwork}/>
                    </div>
                    <div>
                        <ProcessBinary ip={ip} title={"Proceso IP"}/>
                    </div>
                    <div>
                        <ProcessBinary ip={maskNetwork} title={"Proceso Máscara de red"}/>
                    </div>
                    <div>
                        <TableRed ip={binaryIP} mascara={binaryMaskNetwork}/>
                    </div>
                    <div>
                        <DireccIp/>
                    </div>
                </div>
            )}

        </div>
    )
}