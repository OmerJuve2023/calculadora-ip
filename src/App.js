import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import {Navigation} from "./pages/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {TableData} from "./container/tableData/TableData";
import {PPrincipal} from "./pages/PPrincipal";

function App() {
    return (
        <div>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/result"} element={<TableData/>}/>
                    <Route path={"/principal"} element={<PPrincipal/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
