import "../App.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import {BsStar, BsLightbulb, BsGear} from 'react-icons/bs'

export function Contenido() {
    return (
        <main className="page lanidng-page my-3">
            <section className="portfolio-block block-intro">
                <div className="container">
                    <div className="avatar"/>
                    <div className="about-me">
                        <p>
                            <strong> Calculator IP</strong> es una herramienta que, mediante unos valores dados, nos va
                            permitir la obtención de valores de red permitiéndonos calcular sus redes y sus subredes.
                        </p>
                    </div>
                </div>
            </section>
            <section className="portfolio-block skills">
                <div className="container">
                    <div className="heading">
                        <h2>BENEFICIOS DE USAR CALCULATOR IP</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0">
                                    <div className={"icon-container"}>
                                        <BsStar className={"icon text-white"}/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Precisión de diseño de redes</h3>
                                    <p>
                                        <strong>Calculator IP</strong> es una herramienta que, mediante unos valores
                                        dados, nos va a permitir la obtención de valores de red permitiéndonos calcular
                                        sus redes y sus subredes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0">
                                    <div className="icon-container">
                                        <BsLightbulb className={"icon"}/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Interfaz intuitiva y fácil de usar</h3>
                                    <p className="card-text">
                                        Permite calcular y asignar correctamente las direcciones
                                        IP, máscaras de subred y otros parámetros de red, lo que garantiza una
                                        configuración precisa y eficiente de tus redes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0">
                                    <div className="icon-container">
                                        <BsGear className={"icon"}/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Soporte completo para red avanzadas</h3>
                                    <p className="card-text">
                                        Ofrece funciones adicionales, como el cálculo de subredes, el enrutamiento de
                                        direcciones IP y la detección de conflictos de direcciones.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}