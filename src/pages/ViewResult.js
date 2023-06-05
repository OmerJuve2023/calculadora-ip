import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import {DeleteResults} from "../container/deleteResults";
import {ChangeToBinary} from "../container/ChangeToBinary";

export function ViewResult() {
    return (
        <div>
            <TableData/>
            <ChangeToBinary title={"Conversión IP"} nombre={localStorage.getItem("NUMBER_IP")}/>
            <ChangeToBinary title={"Conversión Mscara de Red"} nombre={localStorage.getItem("NUMBER_MASK-NETWORK")}/>
            <DeleteResults/>
            <Footer/>
        </div>
    )
}