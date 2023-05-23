import React, {useState, useEffect} from "react";

export const DireccIp = () => {

    const [networkIP, setNetworkIP] = useState("");
    const [hostBits, setHostBits] = useState(0);
    const [possibleIPs, setPossibleIPs] = useState([]);

    useEffect(() => {
        const storedNetworkIP = localStorage.getItem("nameNetwork");
        const storedHostBits = localStorage.getItem("hosts");

        if (storedNetworkIP && storedHostBits) {
            setNetworkIP(storedNetworkIP);
            setHostBits(parseInt(storedHostBits));
        }
    }, []);

    useEffect(() => {
        calculatePossibleIPs();
    }, [networkIP, hostBits]);

    const calculatePossibleIPs = () => {
        const networkOctets = networkIP.split(".");
        const networkDecimal = parseInt(networkOctets[3]);

        const startIP = networkDecimal + 1;
        const endIP = startIP + Math.pow(2, hostBits) - 3;

        const possibleIPs = [];
        for (let i = startIP; i <= endIP; i++) {
            possibleIPs.push(`${networkOctets[0]}.${networkOctets[1]}.${networkOctets[2]}.${i}`);
        }
        setPossibleIPs(possibleIPs);
    };

    return (
        <div>
            <h3>Possible IPs:</h3>
            <ul>
                {possibleIPs.map((ip) => (
                    <li key={ip}>{ip}</li>
                ))}
            </ul>

        </div>
    )
}