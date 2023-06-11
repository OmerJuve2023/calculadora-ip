import React, {useEffect, useRef, useState} from "react";
import "katex/dist/katex.min.css";
import katex from "katex";

export function LengthHosts() {
    const [enableProcess, setEnableProcess] = useState(false)
    const viewTable = () => {
        setEnableProcess(!enableProcess);
    }
    const formRef1 = useRef("")
    const formRef2 = useRef("")
    const formRef3 = useRef("")
    useEffect(() => {
        if (formRef1.current) {
            katex.render("Host = 2 ^ n -2 ", formRef1.current);
        }
        let value1 = "Host = 2 ^ " + localStorage.getItem("NUMBER_HOSTS").toString() + " - 2"
        if (formRef2.current) {
            katex.render(value1, formRef2.current)
        }
        let num = Math.pow(2, (parseInt(localStorage.getItem("NUMBER_HOSTS")))) - 2
        let value2 = "Host = " + num
        if (formRef3.current) {
            katex.render(value2, formRef3.current)
        }
    })

    function form1() {
        return enableProcess && (
            <div
                className={"h4 text-lowercase"}
                style={{
                    textAlign: "center"
                }}
                ref={formRef1}/>
        )
    }

    function form2() {
        return enableProcess && (
            <div
                className={"h4 text-lowercase"}
                style={{
                    textAlign: "center"
                }}
                ref={formRef2}/>
        )
    }

    function form3() {
        return enableProcess && (
            <div
                className={"h4 text-lowercase"}
                style={{
                    textAlign: "center"
                }}
                ref={formRef3}/>
        )
    }

    return (
        <div className={"container"}>
            <div className={"row align-items-center"}>
                <div className={"col-auto"}>
                    <h2 className={"text-start"} style={{color: "#3586FF"}}>
                        Num. Hosts
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
            {
                enableProcess && (
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-4 panel"}>
                            <div className={"panel-body"}>
                                <div>
                                    <table className={"table"}>
                                        <tbody>
                                        <tr>
                                            <td>
                                                {form1()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {form2()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {form3()}
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}