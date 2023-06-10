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
                className={"h2"}
                style={{
                    textAlign: "center",
                    color: "#7f70f5"
                }}
                ref={formRef1}/>
        )
    }

    function form2() {
        return enableProcess && (
            <div
                className={"h2"}
                style={{
                    textAlign: "center",
                    color: "#7f70f5"
                }}
                ref={formRef2}/>
        )
    }

    function form3() {
        return enableProcess && (
            <div
                className={"h2"}
                style={{
                    textAlign: "center",
                    color: "#7f70f5"
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
            {form1()}
            {form2()}
            {form3()}
        </div>
    )
}