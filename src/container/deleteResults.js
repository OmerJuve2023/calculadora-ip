import {Methods} from "../components/Methods"
import {useNavigate} from 'react-router-dom'

export const DeleteResults = () => {

    const navigate = useNavigate();
    const clearResults = () => {
        Methods.clearLocalStorage()
        navigate("/")
    }

    return (
        <div className={"container-fluid"}
             style={{
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center"
             }}
        >
            <button
                className="btn btn-warning btn-xl rounded-pill mt-5"
                onClick={clearResults}>
                Limpiar
            </button>
        </div>
    )
}
