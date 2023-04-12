import React from "react";
import './style.css'
import premio1 from '../imagenes/premio1.jpg'
import premio2 from '../imagenes/premio2.jpg'
import premio3 from '../imagenes/premio3.jpg'

const PremioUsuario=()=>{
    return(
        <section id="premios">
        <div class="container pb-4">
            <div class="row">
                <div class="col-lg-12 text-center pt-4 ">
                    <h2 class="section-heading display-1">Nuestros Premios</h2>
                    <small class="text-center fs-1">Cumple las Metas necesarias y llévate estos fabulosos Premios</small>
                    <hr class="divider"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 pb-5 border border-5 border-success pt-4">
                    <img src={premio1} alt="Premio 1" class="img-fluid"/>
                    <h3 class="text-center">Meta: Top 1 de la Semana</h3>
                    <p class="text-center">Un Almuerzo a elección</p>
                </div>
                <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                    <img src={premio2} alt="Premio 2" class="img-fluid"/>
                    <h3 class="text-center">Meta: Mejores 3 del dia Viernes</h3>
                    <p class="text-center">Una Gift Card por $20.000</p>
                </div>
                <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                    <img src={premio3} alt="Premio 3" class="img-fluid"/>
                    <h3 class="text-center">Premio 3</h3>
                    <p class="text-center">Descripción del premio 3</p>
                </div>
                <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                    <img src={premio1} alt="Premio 3" class="img-fluid"/>
                    <h3 class="text-center">Premio 3</h3>
                    <p class="text-center">Descripción del premio 3</p>
                </div>
                <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                    <img src={premio2} alt="Premio 3" class="img-fluid"/>
                    <h3 class="text-center">Premio 3</h3>
                    <p class="text-center">Descripción del premio 3</p>
                    
                </div>
                <div class="col-md-4 pb-5 border border-5 border-success pt-4 ">
                    <img src={premio3} alt="Premio 3" class="img-fluid"/>
                    <h3 class="text-center">Premio 3</h3>
                    <p class="text-center">Descripción del premio 3</p>
                </div>
            </div>
        </div>
    </section>

    )
}

export default PremioUsuario;