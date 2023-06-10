import React, {useState} from "react";

export function NombreRed() {
    const [enableProcess, setEnableProcess] = useState(false)
    const viewTable = () => {
        setEnableProcess(!enableProcess);
    }
    return (
        <div className={"container"}>
            <div className={"row align-items-center"}>
                <div className={"col-auto"}>
                    <h2 className={"text-start"} style={{color: "#3586FF"}}>
                        Nombre de Red
                    </h2>
                </div>
                <div className={"col d-flex justify-content-end btn-lg"}>
                    <button
                        type={"button"}
                        className={"my-3 btn processBinary-button"}
                        onClick={viewTable}
                    >
                        <b>{enableProcess ? "Ocultar" : "Mostrar"}</b>
                    </button>
                </div>
            </div>
        </div>
    )
}