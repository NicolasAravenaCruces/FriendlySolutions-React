import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import MiEmpresaPage from './pages/MiEmpresaPage';
import MiReciclajePage from './pages/MiReciclajePage';
import VistaEmpresaUnoPage from "./pages/VistaEmpresaUnoPage";
import VistaEmpresaDosPage from "./pages/VistaEmpresaDosPage";
import ComoReciclarPage from "./pages/ComoReciclarPage";
import UsuarioPage from "./pages/UsuarioPage";
import EmpresaPage from "./pages/EmpresaPage";




const App = () => {
    //rutas de las paginas
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        <Route path='/MiEmpresa' element={<MiEmpresaPage />}></Route>
        <Route path='/MiReciclaje' element={<MiReciclajePage />}></Route>
        <Route path='/vistaempresados' element={<VistaEmpresaDosPage/>}></Route>
        <Route path='/vistaempresauno' element={<VistaEmpresaUnoPage/>}></Route>
        <Route path='/ComoReciclar' element={<ComoReciclarPage/>}></Route>

        <Route path='/premioUsuario' element={<UsuarioPage/>}></Route>
        <Route path='/premioEmpresa' element={<EmpresaPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;