import "../styles/styles.css"
import React, {useRef} from "react";

export const Header = () => {
    const scrollRef = useRef(null);
    const elementoID = "principal"
    const scrollToElement = () => {
        const elemento = document.getElementById(elementoID)
        if (elemento) {
            elemento.scrollIntoView({behavior: 'smooth'});
        }
    }
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5"
                     style={{alignItems: "center"}}>
                    <h1 className="masthead-heading mb-0 my-1 brillaremos">Calculator IP</h1>
                    <h2 className="masthead-subheading mb-0 brillaremos">Convierte direcciones IP y máscaras de red</h2>
                    <button ref={scrollRef} className="btn btn-primary btn-xl rounded-pill mt-5"
                            onClick={scrollToElement}
                    >Comenzar
                    </button>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}