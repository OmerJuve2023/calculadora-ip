import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import {DeleteResults} from "../container/deleteResults";
import {ProcessBinary} from "../container/processBinary";

export function ViewResult() {
    return (
        <div>
            <TableData/>
            <ProcessBinary title={"Conversion IP"} nombre={localStorage.getItem("NUMBER_IP")}/>
            <DeleteResults/>
            <Footer/>
        </div>
    )
}