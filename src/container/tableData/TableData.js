import React, {Component} from "react";
import {SpaceBits} from "./SpaceBits";
import {NumberHost} from "./NumberHost";
import {CantHosts} from "./CantHosts";
import {CantSubredes} from "./CantSubredes";
import {ClaseIP} from "../ClaseIP";
import {NameRed} from "./NameRed";
import {FormatMaskNetwork} from "./FormatMaskNetwork"
import "../../styles/tableStyles.css";

export class TableData extends Component {
    render() {
        return (
            <div className={"container-fluid"}>
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
                                       {/* <td></td>*/}
                                    </tr>
                                    <tr>
                                        <th>Máscara de red</th>
                                        <FormatMaskNetwork/>
                                       {/* <td>
                                            <ul className="action-list">
                                                <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            </ul>
                                        </td>*/}
                                    </tr>
                                    <tr>
                                        <th>Tipo de Red</th>
                                        <ClaseIP/>
                                        {/*<td></td>*/}
                                    </tr>
                                    <tr>
                                        <th>Longitud de Red</th>
                                        <SpaceBits/>
                                       {/* <td>
                                            <ul className="action-list">
                                                <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            </ul>
                                        </td>*/}
                                    </tr>
                                    <tr>
                                        <th>Número de Hosts</th>
                                        <NumberHost/>
                                        {/*<td>
                                            <ul className="action-list">
                                                <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            </ul>
                                        </td>*/}
                                    </tr>
                                    <tr>
                                        <th>Cantidad max. direcciones Hosts</th>
                                        <CantHosts/>
                                        {/*<td>
                                            <ul className="action-list">
                                                <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            </ul>
                                        </td>*/}
                                    </tr>
                                    <tr>
                                        <th>Cantidad max. Subredes</th>
                                        <CantSubredes/>
                                        {/*<td>
                                            <ul className="action-list">
                                                <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            </ul>
                                        </td>*/}
                                    </tr>
                                    <tr>
                                        <th>Nombre de la Red</th>
                                        <NameRed/>
                                        {/*<td>
                                            <ul className="action-list">
                                                <li><a href="#" data-tip="edit"><i className="fa fa-edit"></i></a></li>
                                            </ul>
                                        </td>*/}
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