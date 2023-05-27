import React from "react";

export const CantSubredes = () => {
    const cantSubredes = parseInt(localStorage.getItem("NUMBER_BITS"))

    function process(cantSubredes) {
        return (Math.pow(2, cantSubredes))
    }

    return (
        <td>
            {process(cantSubredes)}
        </td>
    )
}