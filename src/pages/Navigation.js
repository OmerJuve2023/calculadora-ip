export function Navigation() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
            <div className="container"><a className="navbar-brand logo" href="/"><b>T'OMER</b></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="/"><b>Inicio</b></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}