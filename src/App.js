import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import MenuPage from "./pages/MenuPage";
import BajadaPage from "./pages/BajadaPage";
import FooterPage from "./pages/FooterPage";




const App = () => {
    //comentario fuera del return 
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        <Route path='/menu' element={<MenuPage/>}></Route>
        <Route path='/bajada' element={<BajadaPage/>}></Route>
        <Route path='/footer' element={<FooterPage/>}></Route>

        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;