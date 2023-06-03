import {TableData} from "../container/tableData/TableData";
import {Footer} from "./Footer";
import {DeleteResults} from "../container/deleteResults";

export function ViewResult() {
    return (
        <div>
            <TableData/>
            <DeleteResults/>
            <Footer/>
        </div>
    )
}