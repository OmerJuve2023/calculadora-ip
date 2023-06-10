import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import {DeleteResults} from "../container/deleteResults";
import {ChangeToBinary} from "../container/process/ChangeToBinary";
import {TypeRed} from "../container/process/TypeRed";
import {LongitudRed} from "../container/process/LongitudRed";
import {LengthHosts} from "../container/process/LengthHosts";
import {NombreRed} from "../container/process/NombreRed";

export function ViewResult() {
    return (
        <div>
            <TableData/>
            <ChangeToBinary title={"Conv. IP"} nombre={localStorage.getItem("NUMBER_IP")}/>
            <ChangeToBinary title={"Conv. Mask Red"} nombre={localStorage.getItem("NUMBER_MASK-NETWORK")}/>
            <TypeRed/>
            <LongitudRed/>
            <LengthHosts/>
            <NombreRed/>
            <DeleteResults/>
            <Footer/>
        </div>
    )
}