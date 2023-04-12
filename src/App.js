import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage";
import ComoReciclarPage from "./pages/ComoReciclarPage";




const App = () => {
    //comentario fuera del return 
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        <Route path='/ComoReciclar' element={<ComoReciclarPage/>}></Route>

        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;