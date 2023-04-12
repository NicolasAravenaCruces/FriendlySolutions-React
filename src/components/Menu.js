import React from "react";
import './style.css'
import logo from "../imagenes/logoblanco.png"

const Menu=()=>{
    return(
        <nav id="menu" class="navbar navbar-expand-lg color-menu ">
            <div class="container">
                <a class="navbar-brand" href="/#">
                    <img src={logo} alt="logoblanco"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 offset-md-7">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/ComoReciclar">Como Reciclar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Menu;