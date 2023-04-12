import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import LoginPage from "./pages/LoginPage";




const App = () => {
    //comentario fuera del return 
    return(
        <BrowserRouter>
        <Routes>

        <Route path='/Login' element={<LoginPage/>}></Route>


        </Routes>
        </BrowserRouter>
    )
    
  
}
export default App;