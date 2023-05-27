import React from "react";

export const NumberHost = () => {
    const hosts = parseInt(localStorage.getItem("NUMBER_BITS"))

    function process(hosts) {
        const num = 32 - hosts
        localStorage.setItem("NUMBER_HOSTS", num.toString())
        return num
    }

    return (
        <td>
            {process(hosts)}
        </td>
    )
}