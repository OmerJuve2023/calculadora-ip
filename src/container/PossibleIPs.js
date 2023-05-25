import React,{useState} from 'react';

export const PossibleIPs = () => {
    const [networkAddress, setNetworkAddress] = useState('');
    const [subnet, setSubnet] = useState('');
    const [subnetBits, setSubnetBits] = useState('');
    const [broadcastAddress, setBroadcastAddress] = useState('');
    const [availableIPs, setAvailableIPs] = useState([]);

    const calculateNetwork = (e) => {
        e.preventDefault();

        let subnetMask = '';

        if (subnet === 'bits') {
            subnetMask = calculateSubnetMask(subnetBits);
        } else if (subnet === 'decimal') {
            subnetMask = subnet;
        }

        // Convierte la dirección de red y la máscara de red de decimal a binario
        const networkBinary = convertToBinary(networkAddress);
        const subnetBinary = convertToBinary(subnetMask);

        // Calcula la dirección de broadcast sumando el complemento de la máscara de red a la dirección de red
        const broadcastBinary = calculateBroadcastBinary(networkBinary, subnetBinary);

        // Convierte la dirección de broadcast de binario a decimal
        const broadcastAddress = convertToDecimal(broadcastBinary);

        // Calcula las direcciones IP disponibles
        const availableIPs = calculateAvailableIPs(networkBinary, broadcastBinary);

        setBroadcastAddress(broadcastAddress);
        setAvailableIPs(availableIPs);
    };

    const calculateSubnetMask = (subnetBits) => {
        const subnetBinary = '1'.repeat(subnetBits).padEnd(32, '0');
        const subnetMask = subnetBinary.match(/.{1,8}/g).map((binary) => parseInt(binary, 2)).join('.');
        return subnetMask;
    };

    const convertToBinary = (decimal) => {
        const binary = decimal.split('.').map((octet) => parseInt(octet, 10).toString(2).padStart(8, '0')).join('');
        return binary;
    };

    const convertToDecimal = (binary) => {
        const decimal = binary.match(/.{1,8}/g).map((binaryOctet) => parseInt(binaryOctet, 2)).join('.');
        return decimal;
    };

    const calculateBroadcastBinary = (networkBinary, subnetBinary) => {
        const broadcastBinary = networkBinary.split('').map((bit, index) => bit === '1' || subnetBinary[index] === '0' ? '1' : '0').join('');
        return broadcastBinary;
    };

    const calculateAvailableIPs = (networkBinary, broadcastBinary) => {
        const availableIPs = [];
        const startIPBinary = networkBinary.substring(0, broadcastBinary.lastIndexOf('0') + 1);

        for (let i = 0; i <= 32 - startIPBinary.length; i++) {
            const ipBinary = startIPBinary + '1'.repeat(i).padEnd(32, '0');
            const ipDecimal = convertToDecimal(ipBinary);
            availableIPs.push(ipDecimal);
        }

        return availableIPs;
    };

    return (
        <div>
            <h2>Network Calculator</h2>
            <form onSubmit={calculateNetwork}>
                <label>
                    Network Address:
                    <input type="text" value={networkAddress} onChange={(e) => setNetworkAddress(e.target.value)} />
                </label>
                <label>
                    Subnet:
                    <select value={subnet} onChange={(e) => setSubnet(e.target.value)}>
                        <option value="bits">Bits</option>
                        <option value="decimal">Decimal</option>
                    </select>
                </label>
                {subnet === 'bits' && (
                    <label>
                        Subnet Bits:
                        <input type="number" value={subnetBits} onChange={(e) => setSubnetBits(e.target.value)} />
                    </label>
                )}
                {subnet === 'decimal' && (
                    <label>
                        Subnet Mask:
                        <input type="text" value={subnetBits} onChange={(e) => setSubnetBits(e.target.value)} />
                    </label>
                )}
                <button type="submit">Calculate</button>
            </form>
            {broadcastAddress && (
                <div>
                    <p>Broadcast Address: {broadcastAddress}</p>
                    <p>Available IPs:</p>
                    <ul>
                        {availableIPs.map((ip) => (
                            <li key={ip}>{ip}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
