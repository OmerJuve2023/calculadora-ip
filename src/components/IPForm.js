import React, {useState} from 'react';

const IPForm = () => {
    const [ip, setIP] = useState("")
    const [subnet, setSubnet] = useState("")
    const [format, setFormat] = useState("")

    const handleIPChange = (e) => {
        setIP(e.target.value);
    };

    const handleSubnetChange = (e) => {
        setSubnet(e.target.value);
    };

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('IP:', ip);
        console.log('Subnet:', subnet);
        console.log('Format:', format);
    };

    return (
        <div className={"row"}>
            <h2>IP Form</h2>
            <div className={"col"}>
                <input className={"form-control"} type="text" value={ip} onChange={handleIPChange}/>
            </div>
            <div className={"col"}>
                <input className={"form-control"} type="text" value={subnet} onChange={handleSubnetChange}/>
            </div>
            <div className={"col"}>
                <select value={format}
                        className={"form-select"}
                        onChange={handleFormatChange}>
                    <option value={""} disabled selected>Ingrese Mascara de Red</option>
                    <option value="bits">Bits</option>
                    <option value="decimal">Decimal</option>
                </select>
            </div>
            <div className={"col"}>
                <button className={"btn"} type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default IPForm;
