import "../styles/styles.css"

export function Header() {
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5"
                     style={{alignItems: "center"}}>
                    <h1 className="masthead-heading mb-0 my-1">Calculator Ip</h1>
                    <h2 className="masthead-subheading mb-0">Convierte direcciones IP y máscaras de red</h2>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5"
                       href={"#principal"}>Comenzar</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}