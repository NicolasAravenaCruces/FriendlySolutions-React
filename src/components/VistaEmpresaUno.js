import React from "react";
import Dona from "../imagenes/Dona.png"
import Grafico2 from "../imagenes/grafico2.jpg"
import Grafico3 from "../imagenes/grafico3.jpg"
import Grafico4 from "../imagenes/grafico4.jpg"
import descargar from "../imagenes/descargar.jpg"

import './style.css'

const VistaEmpresaUno = () => {
  return (
    <div>
      <section id="imgrafico">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center pt-4">

              <h1 class="text-center">Estadísticas y Reporte</h1>
            </div>
          </div>
        </div>
        <div>
          <div class="container pt-4 pb-5">
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <img src={Dona} class="card-img-top" alt="Imagen 1" />

                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <img src={Grafico2} class="card-img-top" alt="Imagen 2" />

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <img src={Grafico3} class="card-img-top" alt="Imagen 3" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <img src={Grafico4} class="card-img-top" alt="Imagen 4" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="container mt-5 mb-5" id="descarga">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body text-center">
            <div class="row">
              <div class="col-md-8">
                <img src={descargar} class="img-fluid " alt="Imagen del informe"/>
              </div>
              <div class="col-md-4">
                <h5 class="card-title">Descargar Informe</h5>
                <p class="card-text">Haz clic en el botón de descarga para obtener el informe completo en formato PDF.</p>
                <a href="ruta_del_archivo.pdf" download class="btn btn-primary">
                  <i class="fa fa-download" aria-hidden="true"></i> Descargar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
    </div>
  )
}

export default VistaEmpresaUno;