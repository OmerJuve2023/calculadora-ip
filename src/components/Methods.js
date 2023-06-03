export const Methods = {
    convertToBinary: convertIpToBinary,
    clearLocalStorage: clearLocalStorage,
    convertMaskBitsToDecimal: convertMaskBitsToDecimal
}

function convertIpToBinary(ip) {
    const octets = ip.split('.');
    const binaryOctets = octets.map((octet) => {
        return parseInt(octet, 10).toString(2).padStart(8, '0')
    })
    return binaryOctets.join('.');
}

function convertMaskBitsToDecimal(maskBits) {
    // Convierte los bits de la máscara a una cadena de '1' seguido de ceros
    const maskBinary = '1'.repeat(maskBits) + '0'.repeat(32 - maskBits);
    // Divide los bits en grupos de 8 bits (octetos)
    const octets = maskBinary.match(/.{1,8}/g);
    // Convierte cada octeto de bits a decimal
    const decimalOctets = octets.map((octet) => parseInt(octet, 2));
    // Retorna la máscara de red en formato decimal separada por puntos
    return decimalOctets.join('.');
}

function clearLocalStorage() {
    localStorage.removeItem("NAME_NETWORK")
    localStorage.removeItem("NUMBER_HOSTS")
    localStorage.removeItem("NUMBER_BITS")
    localStorage.removeItem("NUMBER_IP")
    localStorage.removeItem("NUMBER_MASK-NETWORK")
    localStorage.removeItem("BTN_FORMAT")
    localStorage.removeItem("BTN_IP")
    localStorage.removeItem("BTN_MASK-NETWORK")
    localStorage.removeItem("CLASS_IP")
}
