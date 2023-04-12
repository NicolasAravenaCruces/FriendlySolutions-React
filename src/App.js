import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import MenuPage from "./pages/MenuPage";
import BajadaPage from "./pages/BajadaPage";
import FooterPage from "./pages/FooterPage";
import MiEmpresaPage from './pages/MiEmpresaPage';
import MiReciclajePage from './pages/MiReciclajePage';




const App = () => {
    //comentario fuera del return 
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        <Route path='/menu' element={<MenuPage/>}></Route>
        <Route path='/bajada' element={<BajadaPage/>}></Route>
        <Route path='/footer' element={<FooterPage/>}></Route>
        <Route path='/MiEmpresa' element={<MiEmpresaPage />}></Route>
        <Route path='/MiReciclaje' element={<MiReciclajePage />}></Route>

        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;