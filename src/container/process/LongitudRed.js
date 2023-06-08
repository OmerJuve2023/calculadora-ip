import {useState} from "react";

export function LongitudRed() {
    const [enableProcess, setEnableProcess] = useState(false);
    const viewTable = () => {
        setEnableProcess(!enableProcess)
    }


    function validate(mascara) {

        const componentes = mascara.split('.');

        const componente1 = parseInt(componentes[0]).toString(2).padStart(8, '0');
        const componente2 = parseInt(componentes[1]).toString(2).padStart(8, '0');
        const componente3 = parseInt(componentes[2]).toString(2).padStart(8, '0');
        const componente4 = parseInt(componentes[3]).toString(2).padStart(8, '0');

        return (
            enableProcess && (
                <div className={"row justify-content-center"}>
                    <div className={"col-md-offset-1 col-md-8"}>
                        <div className={"panel"}>
                            <div className={"panel-body table-responsive"}>
                                <table className="table">
                                    <tbody>
                                    <tr
                                        style={{textAlign: "center"}}>
                                        <td>{componentes[0]}</td>
                                        <td>{componentes[1]}</td>
                                        <td>{componentes[2]}</td>
                                        <td>{componentes[3]}</td>
                                    </tr>
                                    <tr style={{textAlign: "center"}}>
                                        <td>{componente1}</td>
                                        <td>{componente2}</td>
                                        <td>{componente3}</td>
                                        <td>{componente4}</td>
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


    return (
        <div className={"container"}>
            <div className={"row align-items-center"}>
                <div className={"col-auto"}>
                    <h2
                        className={"text-start"}
                        style={{color: "#3586FF"}}
                    >
                        Longitud de la Red
                    </h2>
                </div>
                <div className={"col d-flex justify-content-end btn-lg"}>
                    <button
                        type={"button"}
                        className={"my-3 btn processBinary-button"}
                        onClick={viewTable}
                    >
                        <b>
                            {enableProcess ? "Ocultar" : "Mostrar"}
                        </b>
                    </button>
                </div>
            </div>
            {validate(localStorage.getItem("NUMBER_MASK-NETWORK"))}
        </div>
    )
}