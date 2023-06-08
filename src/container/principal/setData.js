import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "../../styles/stylesSetData.css"

export function SetData() {
    const [ip, setIP] = useState("");
    const [maskNetwork, setMaskNetwork] = useState("")
    const [enable, setEnable] = useState(false);
    const [format, setFormat] = useState('');
    const navigate = useNavigate();

    const handleInputIPChange = (event) => {
        setIP(event.target.value)
        localStorage.setItem("BTN_IP", event.target.value)
    }
    const handleInputMaskChange = (event) => {
        setMaskNetwork(event.target.value)
        localStorage.setItem("BTN_MASK-NETWORK", event.target.value)
    }
    const handleFormatChange = (e) => {
        setFormat(e.target.value);
        localStorage.setItem("BTN_FORMAT", e.target.value)
    }

    const execute = () => {
        setEnable(true)
        localStorage.setItem("NUMBER_IP", ip)
        localStorage.setItem("NUMBER_MASK-NETWORK", maskNetwork)
        navigate("/result")
    }
    return (
        <div id={"principal"} className="page hire-me-page">
            <section className="portfolio-block hire-me">
                <div className="container">
                    <div className="heading">
                        <h2>Empieza a calcular</h2>
                    </div>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg inputFocus"
                                value={ip}
                                placeholder="ingrese IP"
                                onChange={handleInputIPChange}
                                style={{color: "#0ea0ff"}}
                            />
                        </div>
                        <div className="mb-3">
                            <select
                                disabled={enable}
                                value={format}
                                className="form-select form-select-lg"
                                onChange={handleFormatChange}
                                style={{color: "#0ea0ff"}}
                            >
                                <option disabled value="">
                                    tipo máscara de Red
                                </option>
                                <option value="bits">Bits</option>
                                <option value="decimal">Decimal</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={maskNetwork}
                                className="form-control form-control-lg inputFocus"
                                placeholder="ingrese máscara"
                                onChange={handleInputMaskChange}
                                style={{color: "#0ea0ff"}}
                                required
                            />
                        </div>
                        <div className="mb-3"
                             style={{
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center"
                             }}>
                            <button
                                className="btn btn-xl rounded-pill"
                                onClick={execute}
                                style={{backgroundColor: "#ee0979", color: "#fff"}}
                            >
                                resolver
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}