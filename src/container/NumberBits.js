import PropTypes from "prop-types";
import React from "react";

export const NumberBits = ({mask}) => {

    NumberBits.propTypes = {
        mask: PropTypes.string.isRequired,
    }
    const calculateNetworkLength = (mask) => {
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
        localStorage.setItem("numberBits",networkLengthCount.toString())
        return networkLengthCount
    }

    return (
        <tr>
            <th className={"h5"}
                style={{color: "#b4122f"}}
            >Longitud de la Red
            </th>
            <td className={"h5 fw-bold"}
                style={{"color": "#3586FF"}}
            >
                {calculateNetworkLength(mask)}
            </td>
        </tr>
    )
}

