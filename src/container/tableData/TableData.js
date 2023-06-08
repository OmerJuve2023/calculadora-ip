import React, {Component} from "react";
import {SpaceBits} from "./SpaceBits";
import {NumberHost} from "./NumberHost";
import {CantHosts} from "./CantHosts";
import {CantSubredes} from "./CantSubredes";
import {ClaseIP} from "./ClaseIP";
import {NameRed} from "./NameRed";
import {FormatMaskNetwork} from "./FormatMaskNetwork"
import "../../styles/tableStyles.css";

export class TableData extends Component {
    render() {
        return (
            <div
            id={"tableData"}
                className={"container-fluid"}>
                <div className="row justify-content-center my-5">
                    <div className="col-md-offset-1 col-md-6 my-5">
                        <div className="panel">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col col-sm-3 col-xs-12">
                                        <h4 className="title">Resultados</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body table-responsive">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <th>IP</th>
                                        <td className={"alineadoTD"}>{localStorage.getItem("NUMBER_IP")}</td>
                                    </tr>
                                    <tr>
                                        <th>Máscara de red</th>
                                        <FormatMaskNetwork/>
                                    </tr>
                                    <tr>
                                        <th>Tipo de Red</th>
                                        <ClaseIP/>
                                    </tr>
                                    <tr>
                                        <th>Longitud de Red</th>
                                        <SpaceBits/>
                                    </tr>
                                    <tr>
                                        <th>Número de Hosts</th>
                                        <NumberHost/>
                                    </tr>
                                    <tr>
                                        <th>Cantidad max. direcciones Hosts</th>
                                        <CantHosts/>
                                    </tr>
                                    <tr>
                                        <th>Cantidad max. Subredes</th>
                                        <CantSubredes/>
                                    </tr>
                                    <tr>
                                        <th>Nombre de la Red</th>
                                        <NameRed/>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}