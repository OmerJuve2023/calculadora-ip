import PropTypes from "prop-types";
import React, {useState} from "react";

export const ProcessBinary = ({ip, title}) => {
    ProcessBinary.prototype = {
        ip: PropTypes.func.isRequired,
        title: PropTypes.func.isRequired
    }
    const [p1, p2, p3, p4] = ip.split(".")
    const [enableProcess, setEnableProcess] = useState(false)
    let contador = 0

    const process02 = (object) => {
        const tables = []
        contador = parseInt(object)
        if (enableProcess)
            for (let i = 7; i >= 0; i--) {
                let value = false
                let octeto = Math.pow(2, i)
                let resultado = 0
                if (contador >= octeto) {
                    resultado = contador - octeto
                    value = true
                } else {
                    resultado = contador
                }
                tables.push(
                    <td className={"text-nowrap"}
                        style={{textAlign: "center", alignItems: "center"}}>
                        {Resta(value, contador, octeto, resultado)}
                    </td>
                )
                convertBinary(object, octeto)
            }
        return tables
    }
    const process01 = (object) => {
        const tables = []
        contador = parseInt(object)
        if (enableProcess)
            for (let i = 7; i >= 0; i--) {
                let octeto = Math.pow(2, i)
                tables.push(
                    <td className="text-nowrap">
                        <div className="row row-cols-sm-3"
                             style={{textAlign: "center", alignItems: "center"}}
                             key={i}>
                            <div className="col-auto "
                                 style={{fontSize: "14px"}}>{contador}</div>
                            <div className="col-auto "
                                 style={{color: "#DE556E", fontSize: "14px"}}>
                                &gt;=
                            </div>
                            <div className="col-auto "
                                 style={{fontSize: "14px"}}>
                                {octeto}
                            </div>
                        </div>
                    </td>
                )
                convertBinary(object, octeto)
            }
        return tables
    }
    const processAll = (object) => {
        return (
            enableProcess && (
                <div>
                    <table className="table table-bordered rounded-5">
                        <tbody>
                        <tr>
                            <th style={{color: "#DE55B2"}}
                                colSpan={8}>Preguntar la Condición
                            </th>
                        </tr>
                        <tr style={{"textAlign": "center", color: "#b4122f"}}>
                            <th>128</th>
                            <th>64</th>
                            <th>32</th>
                            <th>16</th>
                            <th>8</th>
                            <th>4</th>
                            <th>2</th>
                            <th>1</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            {process01(object)}
                        </tr>
                        <tr>
                            <th
                                style={{color: "#DE55B2"}}
                                colSpan={8}>Restar
                            </th>
                        </tr>
                        <tr>
                            {process02(object)}
                        </tr>
                        <tr
                            style={{color: "#DE55B2"}}>
                            <th colSpan={8}>Resultado</th>
                        </tr>
                        <tr>
                            {binary(object)}
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                </div>
            )
        )
    }

    function Resta(value, contador, octeto, resultado) {
        if (value) {
            return (
                <div className={"row row-cols-sm-5"}>
                    <div className={"col-auto"}
                       style={{fontSize: "14px"}}>
                        {contador}
                    </div>
                    <div className={"col-auto"}
                       style={{color: "#DE556E", fontSize: "14px"}}>
                        ─
                    </div>
                    <div className={"col-auto"}
                       style={{fontSize: "14px"}}>
                        {octeto}
                    </div>
                    <div className={"col-auto"}
                       style={{color: "#DE556E", fontSize: "14px"}}>
                        =
                    </div>
                    <div className={"col-auto"}
                       style={{color: "#DE8155", fontSize: "15px"}}>
                        {resultado}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={""} style={{alignItems: "center"}}>
                    <p className={"col-auto mx-1 my-0 text-sm-center"}
                       style={{color: "#DE8155", fontSize: "15px"}}>
                        {resultado}
                    </p>
                </div>
            )
        }

    }

    const viewTable = () => {
        setEnableProcess(!enableProcess)
    }

    function convertBinary(object, num) {
        return validate(contador, num)
    }

    function binary(object) {
        contador = parseInt(object)
        const valores = []
        for (let i = 7; i >= 0; i--) {
            valores.push(convertBinary(contador, Math.pow(2, i)))
        }
        const tables = []
        if (enableProcess)
            for (let i = 0; i < 8; i++) {
                tables.push(
                    <td className={"fw-bold"}>
                        <div style={{
                            "textAlign": "center",
                            "color": "#3586FF"
                        }}>{valores[i]}</div>
                    </td>
                )
            }
        return tables
    }

    const validate = (num, valor) => {
        if (num >= valor) {
            contador -= valor
            return 1
        } else return 0
    }

    return (
        <div className={"row"} style={{textAlign: "left"}}>
            <div className={"my-3 col d-flex justify-content-start"}>
                <h3 className={"align-items-center"}
                    style={{color: "#DE55B2"}}
                >{title}</h3>
            </div>
            <div className={"col-auto d-flex justify-content-center"}>
                < button
                    style={{"backgroundColor": "#4935FF", "color": "#fff"}}
                    className={"my-3 btn"}
                    onClick={viewTable}>{enableProcess ? "Ocultar" : "Mostrar"}
                </button>
            </div>
            {processAll(p1)}
            {processAll(p2)}
            {processAll(p3)}
            {processAll(p4)}
        </div>
    )
}