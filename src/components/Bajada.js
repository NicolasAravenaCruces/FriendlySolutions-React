import React from "react";
import './style.css'

const Bajada = () => {
    return (
        <div>
            <section id="carusel">
                <div id="vistas" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..\imagenes\foto1.jpg" class="d-block w-100" alt="foto1" />
                        </div>
                        <div class="carousel-item">
                            <img src="..\imagenes\foto2.jpg" class="d-block w-100" alt="foto2" />
                        </div>
                        <div class="carousel-item">
                            <img src="..\imagenes\foto3.jpg" class="d-block w-100" alt="foto3" />
                        </div>
                        <div class="overlay">
                            <div class="container">
                                <div class="row aling-items-center">
                                    <div class="col-md-6 pt-5  text-center text-ld-end">
                                        <h1>Te premiamos por Reciclar!</h1>
                                        <p class="d-none d-md-block">Por cada objeto que recicles junta puntos
                                            y nosotros te premiamos

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section id="features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="..\imagenes\reciclar.jpg" alt="Imagen principal de características" class="feature-img" />
                        </div>
                        <div class="col-md-6 feature-info">
                            <h2 class="feature-title">Aprende a Reciclar</h2>
                            <p class="feature-description">¡Aprende cómo reciclar correctamente diferentes tipos de materiales
                                con nuestras guías elaboradas por profesionales en el campo del reciclaje! Aquí te
                                proporcionaremos información precisa y actualizada sobre cómo reciclar de manera adecuada y
                                contribuir a la protección del medio ambiente. Sigue nuestras guías paso a paso
                                y conviértete en un experto en el reciclaje de distintos materiales.</p>
                            <a href="/#">Leer mas</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="empresas" class="empresa-fondo">
                <div class="container-fluid">

                    <div class="row justify-content-center ">
                        <div class="col-md-2 mb-4 ">
                            <div class="card h-100 card-transparent ">
                                <div class="card-body ">
                                    <h3 class="card-title text-center">5 Empresas</h3>
                                </div>
                                <img src="..\imagenes\empresas.jpg" class="card-img-top w-100" alt="Foto del participante 1" />

                            </div>
                        </div>
                        <div class="col-md-2 mb-4">
                            <div class="card h-100 card-transparent">
                                <div class="card-body">
                                    <h3 class="card-title text-center">+ de 3000 kg de residuos reciclados </h3>
                                </div>
                                <img src="..\imagenes\recicla.jpg" class="card-img-top w-100" alt="Foto del participante 2" />
                            </div>
                        </div>
                        <div class="col-md-2 mb-4">
                            <div class="card h-100 card-transparent ">
                                <div class="card-body">
                                    <h3 class="card-title text-center">+ 500 kg de Plastico</h3>

                                </div>
                                <img src="..\imagenes\plastico2.jpg" class="card-img-top w-100 " alt="Foto del participante 3" />

                            </div>
                        </div>
                        <div class="col-md-2 mb-4">
                            <div class="card h-100 card-transparent">
                                <div class="card-body">
                                    <h3 class="card-title text-center">+ 1200 kg de Alumnio</h3>
                                </div>
                                <img src="..\imagenes\aluminio2.jpg" class="card-img-top w-100" alt="Foto del participante 4" />

                            </div>
                        </div>
                        <div class="col-md-2 mb-4">
                            <div class="card h-100 card-transparent">
                                <div class="card-body">
                                    <h3 class="card-title text-center">+ 1500 Trabajadores</h3>
                                </div>
                                <img src="..\imagenes\trabajadores.jpg" class="card-img-top w-100"
                                    alt="Foto del participante 5" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="nosotros">
                <section class="nosotros-color py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="text-center mb-5">¡Nosotros!<p class="text-center">El equipo que conforma y te trae a
                                    ti FriendlySolutions</p>
                                </h1>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-2 mb-4">
                                <div class="card h-100">
                                    <img src="..\imagenes\nico.jpg" class="card-img-top w-100" alt="Foto del participante 1" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Nicolás Aravena</h5>
                                        <p class="card-text text-center">Lider de equipo y parte del equipo de desarrollo </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 mb-4">
                                <div class="card h-100">
                                    <img src="..\imagenes\danig.jpg" class="card-img-top w-100" alt="Foto del participante 2" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Daniela Goméz</h5>
                                        <p class="card-text text-center">Product Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 mb-4">
                                <div class="card h-100">
                                    <img src="..\imagenes\susana.jpg" class="card-img-top w-100 " alt="Foto del participante 3" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Susana Henriquez</h5>
                                        <p class="card-text text-center">Desarrolladora</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 mb-4">
                                <div class="card h-100">
                                    <img src="..\imagenes\danic.jpg" class="card-img-top w-100" alt="Foto del participante 4" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Daniela Corral</h5>
                                        <p class="card-text text-center">Scrum Master</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2 mb-4">
                                <div class="card h-100">
                                    <img src="..\imagenes\yata.jpg" class="card-img-top w-100" alt="Foto del participante 5" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Yatamis Spolman</h5>
                                        <p class="card-text text-center">Desarrolladora</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    )
}

export default Bajada;