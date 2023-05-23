export const Methods = {
    convertToBinary: convertIpToBinary,
    clearLocalStorage: clearLocalStorage
}

function convertIpToBinary(ip) {
    const octets = ip.split('.');
    const binaryOctets = octets.map((octet) => {
        return parseInt(octet, 10).toString(2).padStart(8, '0')
    })
    return binaryOctets.join('.');
}

function clearLocalStorage() {
    localStorage.removeItem("NAME-NETWORK")
    localStorage.removeItem("NUMBER_HOSTS")
    localStorage.removeItem("NUMBER_BITS")
    localStorage.removeItem("NUMBER_IP")
    localStorage.removeItem("NUMBER_MASK-NETWORK")
}
