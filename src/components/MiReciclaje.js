import React from "react";
import './usuario.css';
import perfilusuario from "../imagenes/dibujos-animados-perfil-mujer_18591-58476 (1).png"
import perfil2dolugar from "../imagenes/perfil-hombe.webp"
import perfil1erlugar from "../imagenes/R (1).jpg"
import vidrio from "../imagenes/pexels-photo-7191423.webp"
import plastico from "../imagenes/R (2).jpg"
import insignia from "../imagenes/istockphoto-480009910-612x612.jpg"
import aluminio from "../imagenes/pexels-photo-5121657.webp"
import medallaPlata from "../imagenes/medalla-plata-2do-lugar-plata_87720-2499.webp"
import perfil3erlugar from "../imagenes/dibujos-animados-perfil-mujer_18591-58480.webp"
import medallaBronze from "../imagenes/pngtree-bronze-medal-vector-best-first-placement-winner-champion-number-one-3rd-png-image_5204996-removebg-preview.png"

const MiReciclaje = () => {
    return (
        <div>
            <section id="trabajador">
                <div class="personaloginn border-top border-header border-0.5 mt-0.5">
                    <div class="container ">
                        <div class="row ">
                            <div class="col d-flex align-items-center justify-content-center ">
                                <img src={perfilusuario}
                                    class="img-fluid-personita m-3" alt="imagen perfil" />
                            </div>
                            <div class="col ">
                                <p class="card-text-personalogin">Felicidades "Usuario"!! <br></br>llevas un total de 20 <br></br> reciclajes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="top">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col-3">
                        <div class="card primer" style={{ width: "18rem;" }}>
                            <img src={perfil2dolugar} class="card-img-top" alt="..." />
                            <div class="card-body-centro">
                                <img src={medallaPlata} class="card-img-top-izqui"
                                    alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card segundo" style={{ width: "18rem;" }}>
                            <img src={perfil1erlugar} class="card-img-top-1" alt="..." />
                            <div class="card-body-centro">
                                <img src={insignia} class="card-img-top-centro" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card tercer" style={{ width: "18rem;" }}>
                            <img src={perfil3erlugar} class="card-img-top-2" alt="..." />
                            <div class="card-body-centro">
                                <img src={medallaBronze}
                                    class="card-img-top-der" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>


            </section>


            <div class="container my-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-1">
                                <img src={perfil1erlugar} class="img-fluid rounded-start" alt="persona1" />
                            </div>
                            <div class="col-md-10">
                                <blockquote class="blockquote mb-0">
                                    <p>1° Nicolas Aravena</p>
                                    <footer class="blockquote-footer">liderando esta semana <cite title="Source Title">TI ⊛ 200 puntos</cite>
                                    </footer>
                                </blockquote>
                            </div>
                            <div class="col-md-1 ml-auto">
                                <img src={insignia} class="img-fluid rounded-start"
                                    alt="insignia primer lugar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-1">
                                <img src={perfil2dolugar} class="img-fluid rounded-start" alt="persona2" />
                            </div>
                            <div class="col-md-10">
                                <blockquote class="blockquote mb-0">
                                    <p>2° Daniel Corral</p>
                                    <footer class="blockquote-footer">En Ascenso <cite title="Source Title">Recursos
                                        Humanos ⊛ 160 puntos</cite></footer>
                                </blockquote>
                            </div>
                            <div class="col-md-1 ml-auto">
                                <img src={medallaPlata}
                                    class="img-fluid rounded-start" alt="medalla segundo lugar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-md-1">
                                <img src={perfil3erlugar}
                                    class="img-fluid rounded-start" alt="persona3" />
                            </div>
                            <div class="col-md-10">
                                <blockquote class="blockquote mb-0">
                                    <p>3° Susana Gómez</p>
                                    <footer class="blockquote-footer">En Ascenso <cite title="Source Title">Finanzas ⊛ 98 puntos</cite>
                                    </footer>
                                </blockquote>
                            </div>
                            <div class="col-md-1 ml-auto">
                                <img src={medallaBronze}
                                    class="img-fluid rounded-start" alt="medalla tercer lugar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="container my-4">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://th.bing.com/th/id/OIP.KyAQcphRi7Kj7hN6WSjzGAHaFj?pid=ImgDet&rs=1"
                                class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8 d-flex align-items-center justify-content-center">
                            <div class="card-body text center">
                                <h5 class="card-title">SUMA PUNTOS</h5>
                                <p class="card-text">No olvides seguir sumando puntos!! Escanea tu QR de nuestras recicladoras,
                                    y tendrás la oportunidad de ganar fabulosos premios</p>
                                <p class="card-text"><small class="text-body-secondary">Hasta ahora llevas un total de 26
                                    puntos</small></p>
                                <button type="button" class="btn btn-primary">Escanear</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="memoria" class="pt-2 pb-2">
                <div className="container py-5 h-100 ">
                    <div class="row otracosa row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={vidrio} class="img-fluid imagenbonita m-3"
                                    alt="botellas de vidrio" />
                                <div class="card-body">
                                    <h5 class="card-title">Recuerda como reciclar vidrio</h5>
                                    <button type="button" class="btn btn-link">Click Aquí</button>
                                </div>
                            </div>
                        </div>
                        <div class="col ">
                            <div class="card">
                                <img src={plastico} class="img-fluid imagenbonita m-3"
                                    alt="botellas de plastico" />
                                <div class="card-body">
                                    <h5 class="card-title">Recuerda como reciclar plástico</h5>
                                    <button type="button" class="btn btn-link">Click Aquí</button>
                                </div>
                            </div>
                        </div>
                        <div class="col  ">
                            <div class="card">
                                <img src={aluminio} class="img-fluid imagenbonita m-3"
                                    alt="latas" />
                                <div class="card-body">
                                    <h5 class="card-title">Recuerda como reciclar aluminio</h5>
                                    <button type="button" class="btn btn-link">Click Aquí</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>


    )
}

export default MiReciclaje;