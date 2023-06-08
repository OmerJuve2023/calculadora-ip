import {useState, useEffect} from "react";
import "../../styles/stylesTypeRed.css"
export function TypeRed() {
    const [enableProcess, setEnableProcess] = useState(false);
    const [clase, setClase] = useState(localStorage.getItem("CLASS_IP") || "")

    useEffect(() => {
        const storedClase = localStorage.getItem("CLASS_IP") || ""
        setClase(storedClase);
    }, [])

    const viewTable = () => {
        setEnableProcess(!enableProcess)
    }

    const tipos = [
        {letra: 'A', valor: 1, description: 'De 1 a 127'},
        {letra: 'B', valor: 2, description: 'De 128 a 191'},
        {letra: 'C', valor: 3, description: 'De 192 a 223'},
        {letra: 'D', valor: 4, description: 'De 224 a 239'},
        {letra: 'E', valor: 5, description: 'De 240 a 255'}
    ];

    function validate(clase) {
        return (
            enableProcess && (
                <div className={"row justify-content-center"}>
                    <div className={"col-md-offset-1 col-md-4"}>
                        <div className={"panel"}>
                            <div className={"panel-body table-responsive"}>
                                <table className="table">
                                    <tbody>
                                    {tipos.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={item.letra === clase ? "resaltar-clase" : ""}
                                        >
                                            <th>
                                                Clase {item.letra}
                                            </th>
                                            <td>
                                                {item.description}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        );
    }

    return (
        <div className={"container"}>
            <div className={"row align-items-center"}>
                <div className={"col-auto"}>
                    <h2
                        className={"text-start"}
                        style={{color: "#3586FF"}}
                    >
                        Tipo de Red
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
            {validate(clase)}
        </div>
    );
}
