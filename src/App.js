import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
<<<<<<< HEAD
import ComoReciclarPage from "./pages/ComoReciclarPage";
=======
import UsuarioPage from "./pages/UsuarioPage";
import EmpresaPage from "./pages/EmpresaPage";

>>>>>>> master




const App = () => {
    //rutas de las paginas
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
<<<<<<< HEAD
        <Route path='/ComoReciclar' element={<ComoReciclarPage/>}></Route>

=======
        <Route path='/premioUsuario' element={<UsuarioPage/>}></Route>
        <Route path='/premioEmpresa' element={<EmpresaPage/>}></Route>
>>>>>>> master
        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;