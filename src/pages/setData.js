import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
        <div id={"principal"}>
            <div className={"masthead text-center principal"}>
                <div className="py-5 mx-4 conta-color">
                    <div className="row align-items-center">
                        <div className="masthead-content">
                            <div className="container px-5 contendor"
                                 style={{alignItems: "center"}}>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={ip}
                                    placeholder="ingrese IP"
                                    onChange={handleInputIPChange}
                                    required
                                    style={{color: "#ee0979"}}
                                />
                                <select
                                    disabled={enable}
                                    value={format}
                                    className="form-select my-4 form-select-lg"
                                    onChange={handleFormatChange}
                                    required
                                    style={{color: "#ee0979"}}
                                >
                                    <option disabled value="">
                                        tipo máscara de Red
                                    </option>
                                    <option value="bits">Bits</option>
                                    <option value="decimal">Decimal</option>
                                </select>
                                <input
                                    type="text"
                                    value={maskNetwork}
                                    className="form-control my-4 form-control-lg"
                                    placeholder="ingrese máscara"
                                    onChange={handleInputMaskChange}
                                    style={{color: "#ee0979"}}
                                    required
                                />
                                <button className="btn btn-xl rounded-pill mt-5"
                                        onClick={execute}
                                        style={{backgroundColor: "#7f70f5", color: "#fff"}}
                                >resolver
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}