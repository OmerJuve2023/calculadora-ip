import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import {Navigation} from "./pages/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {TableData} from "./container/tableData/TableData";
import {SetData} from "./pages/setData";

function App() {
    return (
        <div>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/result"} element={<TableData/>}/>
                    <Route path={"/principal"} element={<SetData/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
