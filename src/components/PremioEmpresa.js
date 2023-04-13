import React from "react";
import './style.css'
import premio1 from '../imagenes/premio1.jpg'
import premio2 from '../imagenes/premio2.jpg'
import premio3 from '../imagenes/premio3.jpg'

const PremioEmpresa = () => {
    return (
        <div>
            <section id="premios">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center pt-4">
                            <h2 class="section-heading display-1">Administrar Premios</h2>

                            <hr class="divider" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 pb-5 border border-5 border-success pt-4">
                            <img src={premio1} alt="Premio 1" class="img-fluid" />
                            <h3 class="text-center">Meta: Top 1 de la Semana</h3>
                            <p class="text-center">Un Almuerzo a elección</p>
                            <button type="button" class="btn btn-success ">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </div>
                        <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                            <img src={premio2} alt="Premio 2" class="img-fluid" />
                            <h3 class="text-center">Meta: Mejores 3 del dia Viernes</h3>
                            <p class="text-center">Una Gift Card por $20.000</p>
                            <button type="button" class="btn btn-success ">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </div>
                        <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                            <img src={premio3} alt="Premio 3" class="img-fluid" />
                            <h3 class="text-center">Premio 3</h3>
                            <p class="text-center">Descripción del premio 3</p>
                            <button type="button" class="btn btn-success ">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </div>
                        <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                            <img src={premio1} alt="Premio 3" class="img-fluid" />
                            <h3 class="text-center">Premio 3</h3>
                            <p class="text-center">Descripción del premio 3</p>
                            <button type="button" class="btn btn-success ">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </div>
                        <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                            <img src={premio2} alt="Premio 3" class="img-fluid" />
                            <h3 class="text-center">Premio 3</h3>
                            <p class="text-center">Descripción del premio 3</p>
                            <button type="button" class="btn btn-success ">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>

                        </div>
                        <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                            <img src={premio3} alt="Premio 3" class="img-fluid" />
                            <h3 class="text-center">Premio 3</h3>
                            <p class="text-center">Descripción del premio 3</p>
                            <button type="button" class="btn btn-success ">Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container-fluid pt-4 pb-4">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center">
                        <h1>¿Deseas Agregar un nuevo premio?</h1>
                        <p>Haz click en el siguiente botón para comenzar:</p>
                        <a href="/#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCompra">Agregar
                            Premio</a>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modalCompra" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar Premio</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="titulo">Título del Premio</label>
                                    <input type="text" class="form-control" id="titulo"
                                        placeholder="Ingresa el título del premio" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="descripcion">Descripción del Premio</label>
                                    <textarea class="form-control" id="descripcion" rows="4"
                                        placeholder="Ingresa la descripción del premio"></textarea>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="imagen"></label>
                                    <input type="file" class="form-control-file" id="imagen" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="fecha">Fecha de Subida</label>
                                    <input type="date" class="form-control" id="fecha" />
                                </div>
                                <br />
                                <button type="submit" class="btn btn-success">Agregar Premio</button>
                                <br />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default PremioEmpresa;