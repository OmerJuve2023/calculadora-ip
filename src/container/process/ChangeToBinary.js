import PropTypes from "prop-types";
import React, {useState} from "react";

export const ChangeToBinary = ({nombre, title, constante}) => {
    ChangeToBinary.prototype = {
        ip: PropTypes.func.isRequired,
        title: PropTypes.func.isRequired,
        constante: PropTypes.func.isRequired
    }
    const [p1, p2, p3, p4] = nombre.split(".")
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
                    <td className={"text-nowrap border"}
                        style={{
                            textAlign: "center",
                            alignItems: "center"
                        }}>
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
                    <td className="text-nowrap border">
                        <table>
                            <tbody>
                            <tr key={i}
                                className={"text-sm-center"}
                                style={{textAlign: "center", alignItems: "center"}}
                            >
                                <td
                                >
                                    {contador}
                                </td>
                                <td
                                    style={{color: "#5c1f65"}}
                                >
                                    <b>
                                        >=
                                    </b>
                                </td>
                                <td
                                    style={{}}>
                                    {octeto}
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </td>
                )
                convertBinary(object, octeto)
            }
        return tables
    }
    const processAll = (object) => {
        return (
            enableProcess && (
                <div className={"container-fluid"}>
                    <div className={"my-2 row justify-content-center"}>
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col"
                                     style={{textAlign: "center"}}
                                >
                                    <b className={"h3 title"}>
                                        {object}
                                    </b>
                                </div>
                            </div>
                        </div>
                        <div className={"panel"}>
                            <div className={"panel-body table-responsive"}>
                                <table className="table">
                                    <tbody>
                                    <tr
                                        className={"border"}
                                        style={{
                                            "textAlign": "center"
                                        }}>
                                        <th><b>128</b></th>
                                        <th><b>64</b></th>
                                        <th><b>32</b></th>
                                        <th><b>16</b></th>
                                        <th><b>8</b></th>
                                        <th><b>4</b></th>
                                        <th><b>2</b></th>
                                        <th><b>1</b></th>
                                    </tr>
                                    <tr
                                        className={"text-sm-center"}
                                        style={{textAlign: "center"}}>
                                        {process01(object)}
                                    </tr>
                                    <tr
                                        className={"text-sm-center"}
                                    >
                                        {process02(object)}
                                    </tr>
                                    <tr className={"table-results"}
                                    >
                                        {binary(object)}
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

    function Resta(value, contador, octeto, resultado) {
        if (value) {
            return (
                <tr>
                    <td>
                        <div>
                            {contador}
                        </div>
                    </td>
                    <td
                        style={{color: "#5c1f65"}}>
                        <b>
                            ─
                        </b>
                    </td>
                    <td>
                        {octeto}
                    </td>
                    <td
                        style={{color: "#5c1f65"}}>
                        <b>
                            =
                        </b>
                    </td>
                    <td
                        style={{color: "#5c1f65"}}>
                        <b>{resultado}</b>
                    </td>
                </tr>
            )
        } else {
            return (
                <div style={{alignItems: "center"}}>
                    <p className={"col-auto mx-1 my-0 text-sm-center"}
                       style={{color: "#5c1f65"}}>
                        <b>
                            {resultado}
                        </b>
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
                            "color": "white"
                        }}>
                            <b>
                                {valores[i]}
                            </b>
                        </div>
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

    function description() {
        return (
            enableProcess && (
                <div className={"col-auto"}>
                    <div className={"panel col-md-3"}>
                        <div className={"panel-body"}>
                            <table className={"table"}>
                                <tbody>
                                <tr>
                                    <td>{constante}</td>
                                    <td
                                        style={{
                                            alignItems: "center",
                                            textAlign: "center"
                                        }}
                                    >{nombre}</td>
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
            <div className="row align-items-center">
                <div className="col-auto">
                    <h2 className="text-start"
                        style={{color: "#3586FF"}}>
                        {title}
                    </h2>
                </div>
                <div className="col d-flex justify-content-end btn-lg">
                    <button
                        type="button"
                        className="my-3 btn processBinary-button"
                        onClick={viewTable}
                    >
                        <b>
                            {enableProcess ? "Ocultar" : "Mostrar"}
                        </b>
                    </button>
                </div>
            </div>
            {description()}
            {processAll(p1)}
            {processAll(p2)}
            {processAll(p3)}
            {processAll(p4)}
        </div>
    )
}