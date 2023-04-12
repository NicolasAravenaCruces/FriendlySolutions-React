import React from "react";
import './estiloempresas.css';
import logoEmpresa from "../imagenes/M530107b1163922b8d701df39d644be7b1679592810417.jpg"
import imagen1 from "../imagenes/isometric-vector-illustration-a-group-of-people-characters-are-preparing-a-business-project-start-up.jpg"
import imagen2 from "../imagenes/line-graph-straight-line.png"
import imagen3 from "../imagenes/R (4).jpg"
import imagen4 from "../imagenes/Waste_recycling_preview@2x.jpg"

const MiEmpresa = () => {
  return (
    <div >
      <section id="MiEmpresa">

        <div class="container-2 text-center">
          <div class="row">
            <div class="col">
              <img src={logoEmpresa}
                class="card-img" alt="..." />

            </div>

            <div class="col lista">
              <h5 class="card-title">METAS DE GENERATION</h5>
              <hr></hr>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item">Aumentar el número de reciclaje por área</li>
                <li class="list-group-item">Ingresar al top 3 en cuanto al ranking de empresas</li>
                <li class="list-group-item">Aumentar en un 50% la cantidad de reciclaje</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src={imagen1} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title">Crecimiento</h5>
                <p class="card-text">Ser reconocidos como una empresa lider, comprometida con el reciclaje y el medio ambiente.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={imagen2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Participación</h5>
                <p class="card-text">Lograr una participación total de todas las áreas de la empresa, RR.HH, TI, ventas, producción, y así premiar al mayor número de trabajadores</p>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card">
              <img src={imagen3} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title">Generar conciencia</h5>
                <p class="card-text">Aprendiendo a reciclar correctamente, y así adquirir una mentalidad de reciclaje para aplicarlo e integrarlo a nuestra rutina laboral.</p>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card">
              <img src={imagen4} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title">Proyección</h5>
                <p class="card-text">Este año esperamos que la empresa pueda aumentar considerablemente las cantidad de reciclaje de botellas de vidrio, plástico y aluminio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default MiEmpresa;