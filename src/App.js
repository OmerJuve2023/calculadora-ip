import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import {PPrincipal} from "./pages/PPrincipal";
import {PossibleIPs} from "./container/PossibleIPs";
import {Header} from "./pages/Header";
import {Footer} from "./pages/Footer";
import IPForm from "./components/IPForm";

function App() {
    return (
        <div>

            {/*<IPForm/>*/}
            {/* <Header/>*/}
            <PPrincipal/>
            {/*<PossibleIPs/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
