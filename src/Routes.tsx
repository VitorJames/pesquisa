import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./components/formulario";
import Questionario from './components/questionario'

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Formulario />} />
                <Route path="/survey" element={<Questionario />} />
            </Routes>
        </Router>
    )
}