import {Methods} from "./Methods";

export const PTableData = {
    clase,
    mascaraRed,
    longitudRed,
    longitudHosts,
    cantidadHosts,
    cantidadSubredes,
    nombreRed
}

function clase(ip) {
    let one = ip.substring(0, 3)
    let clas = parseInt(one)
    let rpta = ""
    if (clas >= 1 && clas <= 127) rpta = "A"
    else if (clas >= 128 && clas <= 191) rpta = "B"
    else if (clas >= 192 && clas <= 223) rpta = "C"
    else if (clas >= 224 && clas <= 239) rpta = "D"
    else if (clas >= 240 && clas <= 255) rpta = "E"
    localStorage.setItem("CLASS_IP", rpta)
    return rpta
}

function mascaraRed(format, mask) {
    if (format === "bits") {
        const decimalMask = Methods.convertMaskBitsToDecimal(mask)
        localStorage.setItem("NUMBER_MASK-NETWORK", decimalMask.toString())
        console.log(decimalMask)
    }
    return localStorage.getItem("NUMBER_MASK-NETWORK")
}

function longitudRed(mask) {
    let networkLengthCount = 0
    const maskOctets = mask.split(".")
    for (let i = 0; i < maskOctets.length; i++) {
        const maskBinary = parseInt(maskOctets[i]).toString(2).padStart(8, "0");
        for (let j = 0; j < maskBinary.length; j++) {
            if (maskBinary[j] === "1") {
                networkLengthCount++;
            } else {
                break;
            }
        }
    }
    localStorage.setItem("NUMBER_BITS", networkLengthCount.toString())
    return networkLengthCount
}

function longitudHosts(hosts) {
    const num = 32 - hosts
    localStorage.setItem("NUMBER_HOSTS", num.toString())
    return num
}

function cantidadHosts(hosts) {
    return (Math.pow(2, hosts)) - 2
}

function cantidadSubredes(subredes) {
    return (Math.pow(2, subredes))
}

function nombreRed(ip, mask) {
    const ipOctets = ip.split('.');
    const maskOctets = mask.split('.');
    const networkOctets = [];

    for (let i = 0; i < 4; i++) {
        const networkOctet = parseInt(ipOctets[i]) & parseInt(maskOctets[i]);
        networkOctets.push(networkOctet);
    }
    localStorage.setItem("NAME_NETWORK", networkOctets.join("."))
    return networkOctets.join('.');
}