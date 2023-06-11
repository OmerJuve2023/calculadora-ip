import {Component} from "react";
import {ChangeToBinary} from "./ChangeToBinary";
import {TypeRed} from "./TypeRed";
import {LongitudRed} from "./LongitudRed";
import {LengthHosts} from "./LengthHosts";
import {NombreRed} from "./NombreRed";
import {DeleteResults} from "../deleteResults";

export class ResultClass extends Component {
    render() {
        return (
            <div>
                <ChangeToBinary title={"Conv. IP"} nombre={localStorage.getItem("NUMBER_IP")}/>
                <ChangeToBinary title={"Conv. Mask Red"} nombre={localStorage.getItem("NUMBER_MASK-NETWORK")}/>
                <TypeRed/>
                <LongitudRed/>
                <LengthHosts/>
                <NombreRed/>
                <DeleteResults/>
            </div>
        )
    }
}