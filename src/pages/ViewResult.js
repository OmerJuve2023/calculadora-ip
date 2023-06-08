import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import {DeleteResults} from "../container/deleteResults";
import {ChangeToBinary} from "../container/process/ChangeToBinary";
import {TypeRed} from "../container/process/typeRed";
import {LongitudRed} from "../container/process/LongitudRed";

export function ViewResult() {
    return (
        <div>
            <TableData/>
            <ChangeToBinary title={"Conversión IP"} nombre={localStorage.getItem("NUMBER_IP")}/>
            <ChangeToBinary title={"Conversión Máscara de Red"} nombre={localStorage.getItem("NUMBER_MASK-NETWORK")}/>
            <TypeRed/>
            <LongitudRed/>
            <DeleteResults/>
            <Footer/>
        </div>
    )
}