import PropTypes from "prop-types";
import React, {useState} from "react";
import "../styles/tableStyles.css"

export const ChangeToBinary = ({nombre, title}) => {
    ChangeToBinary.prototype = {
        ip: PropTypes.func.isRequired,
        title: PropTypes.func.isRequired
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
                    <td className="text-nowrap border">
                        <div className="row row-cols-sm-3"
                             style={{textAlign: "center", alignItems: "center"}}
                             key={i}>
                            <div className="col-auto "
                                 style={{fontSize: "14px"}}
                            >
                                {contador}
                            </div>
                            <div className="col-auto "
                                 style={{color: "#3586FF", fontSize: "14px"}}
                            >
                                <b>
                                    >=
                                </b>
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
                <div className={"my-2"}>
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
                    <div className={"panel-body table-responsive"}>
                        <table className="table">
                            <tbody>
                            <tr
                                className={"border"}
                                style={{
                                    "textAlign": "center",
                                    color: "#b4122f",
                                }}>
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
                                {process02(object)}
                            </tr>
                            <tr
                                style={{
                                    color: "white",
                                }}>
                                <th colSpan={8}
                                    className={"h5 table-results"}
                                >Resultado
                                </th>
                            </tr>
                            <tr>
                                {binary(object)}
                            </tr>
                            </tbody>
                        </table>
                    </div>
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
                         style={{color: "#3586FF", fontSize: "14px"}}>
                        <b>
                            ─
                        </b>
                    </div>
                    <div className={"col-auto"}
                         style={{fontSize: "14px"}}>
                        {octeto}
                    </div>
                    <div className={"col-auto"}
                         style={{color: "#3586FF", fontSize: "14px"}}>
                        <b>
                            =
                        </b>
                    </div>
                    <div className={"col-auto"}
                         style={{color: "#7f70f5", fontSize: "15px"}}>
                        <b>{resultado}</b>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={""} style={{alignItems: "center"}}>
                    <p className={"col-auto mx-1 my-0 text-sm-center"}
                       style={{color: "#7f70f5", fontSize: "15px"}}>
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
                    <td className={"fw-bold border"}>
                        <div style={{
                            "textAlign": "center",
                            "color": "#3586FF"
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
            {processAll(p1)}
            {processAll(p2)}
            {processAll(p3)}
            {processAll(p4)}
        </div>
    )
}