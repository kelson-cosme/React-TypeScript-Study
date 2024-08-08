import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/pagina-inicial" element={<Dashboard />}/>
                <Route path="/login" element={<Login />} />
                <Route path="*" Component={() => <Navigate to="/pagina-inicial" /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;