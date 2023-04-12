import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import UsuarioPage from "./pages/UsuarioPage";
import EmpresaPage from "./pages/EmpresaPage";





const App = () => {
    //rutas de las paginas
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        <Route path='/premioUsuario' element={<UsuarioPage/>}></Route>
        <Route path='/premioEmpresa' element={<EmpresaPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;