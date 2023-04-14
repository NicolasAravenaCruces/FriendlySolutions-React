import React from "react";
import meta from "../imagenes/meta.jpg"
import empresa from "../imagenes/iconoempresa.jpg"

const VistaEmpresaDos = () => {
    return(
<div>
  <div class="row align-items-center mt-5 ml-4">
    <div class="col mt-5">
      <div class="card custom-card" style={{width: "18rem"}}>
        <img
          src="https://png.pngtree.com/template/20191014/ourlarge/pngtree-real-estate-business-logo-template-building-property-development-and-construction-logo-image_317796.jpg"
          class="card-img-top" alt="..."/>
          <div class="card-body custom-card-body">
          <h5 class="card-title">Segundo lugar</h5>
        </div>
      </div>
    </div>
    <div class="col ml-5">
      <div class="card custom-card" style={{width: "18rem"}}>
        <img src="https://gestionpyme.com/wp-content/uploads/2015/09/shutterstock_227788621.jpg" class="card-img-top"
          alt="..."/>
          <div class="card-body custom-card-body">
          <h5 class="card-title">Primer lugar</h5>
        </div>
      </div>
    </div>
    <div class="col ml-5 mt-5">
      <div class="card custom-card" style={{width: "18rem"}}>
        <img
          src={empresa} class="card-img-top" alt="..."/>
          <div class="card-body custom-card-body">
          <h5 class="card-title">Tercer lugar</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h3>Ranking de Personas por Área</h3>
        <div class="form-group mt-4">
          <label for="filtro">Filtrar por:</label>
          <select class="form-control" id="filtro">
            <option value="area">Área</option>
            <option value="nombre">Nombre</option>
            <option value="puntuacion">Puntuación</option>
          </select>
        </div>
        <table class="table table-striped mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Área</th>
              <th>Puntuación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Persona 1</td>
              <td>Área 1</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Persona 2</td>
              <td>Área 2</td>
              <td>90</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Persona 2</td>
              <td>Área 2</td>
              <td>90</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Persona 2</td>
              <td>Área 2</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h3>Nuestra Meta</h3>
        <div class="card mt-4">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <img src={meta} alt="Mi Meta" class="img-fluid"/>
              </div>
              <div class="col-md-8">
                <h5 class="card-title">Meta Semestral</h5>
                <p class="card-text">Para el próximo semestre, nuestra empresa se compromete a aumentar nuestra tasa de reciclaje en un 20%. Esto implicará implementar programas de reciclaje efectivos en todas nuestras áreas de operación, incluyendo la separación adecuada de los materiales reciclables, la educación y concientización del personal sobre las mejores prácticas de reciclaje, así como la colaboración con proveedores y socios comerciales que compartan nuestros valores de sostenibilidad y responsabilidad ambiental. Además, nos esforzaremos por reducir la generación de residuos en un 10% a través de la implementación de medidas de reducción y reutilización en nuestras operaciones diarias. Nuestra meta es contribuir activamente a la protección del medio ambiente y fomentar una cultura de reciclaje y sostenibilidad en toda la organización</p>
                <div class="mt-4">
                  <a href="/" class="btn btn-primary mr-2">
                    <i class="fa fa-edit" aria-hidden="true"></i> Editar
                  </a>
                  <a href="/" class="btn btn-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i> Eliminar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 

 
  
  </div>
  )
}

export default VistaEmpresaDos;