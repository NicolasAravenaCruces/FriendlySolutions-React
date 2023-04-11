import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import MenuPage from "./pages/MenuPage";





const App = () => {
    //comentario fuera del return 
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        <Route path='/menu' element={<MenuPage/>}></Route>
       

        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;