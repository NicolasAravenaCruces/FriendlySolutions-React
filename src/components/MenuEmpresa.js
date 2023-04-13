import React from "react";
import './style.css'
import logoblanco from '../imagenes/logoblanco.png'

const MenuEmpresa = () => {
    return (
        <nav id="menu" class="navbar navbar-expand-lg color-menu ">
            <div class="container">
                <a class="navbar-brand" href="/vistaempresauno">
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
                            <a class="nav-link active" aria-current="page" href="/vistaempresauno">Estadísticas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/vistaempresados">Ranking</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/premioEmpresa">Premios</a>
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
export default MenuEmpresa;


