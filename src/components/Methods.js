export const Methods = {
    convertToBinary: convertIpToBinary
}

function convertIpToBinary(ip) {
    const octets = ip.split('.');
    const binaryOctets = octets.map((octet) => {
        return parseInt(octet, 10).toString(2).padStart(8, '0')
    })
    return binaryOctets.join('.');
}
