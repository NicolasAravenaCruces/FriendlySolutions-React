import React from "react"
import './ComoReciclar.css'
import Aluminio from '../imagenes/aluminio.jpg'
import Plastico from '../imagenes/plastico.jpg'
import Vidrio from '../imagenes/vidrio.jpeg'

const ComoReciclar =()=>{
    return(
        <div>
        <h1> Como reciclar ❤</h1>
        <div class="contenedor-cards ">
            
        <div class="card col-md-3" >
            <h3 class="subtitulo">Aluminio</h3>
            <img src={Aluminio} class="card-img-top" alt="imagen de latas"/>
            <div class="card-body">
                <ol>
                    <li>Lava y desinfecta las latas luego de consumir el contenido.</li>
                    <li>Deja que las latas se sequen bien para evitar la formación de moho y su oxidación.</li>
                    <li>Dejar en el contenedor correspondiente aluminio</li>
                  </ol>
            </div>
          </div>
          <div class="card col-md-3">
            <h3 class="subtitulo">Plastico</h3>
            <img src={Plastico}class="card-img-top" alt="Imagen de botellas de plastico"/>
            <div class="card-body">
                <ol>
                    <li>Lava y desinfecta las latas luego de consumir el contenido.</li>
                    <li>Deja que las latas se sequen bien para evitar la formación de moho y su oxidación.</li>
                    <li>Dejar en el contenedor correspondiente a plastico</li>
                  </ol>
            </div>
          </div>
          <div class="card col-md-3">
            <h3 class="subtitulo">Vidrio</h3>
            <img src={Vidrio} class="card-img-top" alt="imagen de botellas de vidrio"/>
            <div class="card-body">
                <ol>
                    <li>Lava y desinfecta las latas luego de consumir el contenido.</li>
                    <li>Deja que las latas se sequen bien para evitar la formación de moho y su oxidación.</li>
                    <li>Dejar en el contenedor correspondiente a vidrios</li>
                  </ol>
            </div>
          </div>
        </div>
        </div>
    )

}
export default ComoReciclar;