export function Header() {
    return (
        <header>
            <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
                <div className="container"><a className="navbar-brand" href="#">T'Omer</a>
                    <button data-bs-toggle="collapse" className="navbar-toggler navbar-toggler-right"
                            data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive"
                            aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i
                        className="fa fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item nav-link"><a className="nav-link active" href="#about">About</a>
                            </li>
                            <li className="nav-item nav-link"></li>
                            <li className="nav-item nav-link"><a className="nav-link" href="#contact">contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="intro-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="brand-heading">Calculadora ip</h1>
                                <p className="intro-text">A free, responsive, one page Bootstrap theme.</p><a
                                className="btn btn-link btn-circle" role="button" href="#about"><i
                                className="fa fa-angle-double-down animated"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </header>
    )
}