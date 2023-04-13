import React from "react";
import './style.css'
import logoblanco from '../imagenes/logoblanco.png'

const MenuUsuario = () => {
    return (
        <nav id="menu" class="navbar navbar-expand-lg color-menu ">
            <div class="container">
                <a class="navbar-brand" href="/#">
                    <img src={logoblanco} alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#/">Mi Reciclaje</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/">Mi empresa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/">Premios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Cerrar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MenuUsuario;