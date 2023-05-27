import React from "react";

export const CantHosts = () => {
    const cantHosts = parseInt(localStorage.getItem("NUMBER_HOSTS"))

    function process(cantHosts) {
        return (Math.pow(2, cantHosts)) - 2
    }
    return (
        <td>
            {process(cantHosts)}
        </td>
    )
}