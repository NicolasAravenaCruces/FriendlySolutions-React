import React from "react";
import './style.css'
import logoblanco from '../imagenes/logoblanco.png'

const FooterUsuario=()=>{
    return(
        <footer id="footer" class="bg-dark text-white  pt-4 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img src={logoblanco} alt="Tu logo"/>
                </div>
                <div class="col-md-3 ">
                    <h5>Página</h5>
                    <ul class="list-unstyled">
                        <li><a href="/#">Mi Reciclaje</a></li>
                        <li><a href="/#">Mi Empresa</a></li>
                        <li><a href="/premioUsuario">Premios</a></li>
                        <li><a href="/#">Cerrar Sesión</a></li>

                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Contacto</h5>
                    <ul class="list-unstyled">
                        <li><a href="/#">Dirección</a></li>
                        <li><a href="/#">Teléfono</a></li>
                        <li><a href="/#">Correo electrónico</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Redes sociales</h5>
                    <ul class="list-unstyled">
                        <li><a href="/#">Facebook</a></li>
                        <li><a href="/#">Twitter</a></li>
                        <li><a href="/#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>Todos los derechos reservados &copy; 2023</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>Diseñado por FriendlySolutions</p>
                </div>
            </div>
        </div>
    </footer>

    )

}

export default FooterUsuario;