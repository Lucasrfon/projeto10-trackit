import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/reset.css"
import './components/globalstyle.css'
import Login from './Routes/Login';
import Habits from './Routes/Habits';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                <Login
                    inputs={[{holder: "email", type: "email"},{holder: "senha", type: "password"}]}
                    button="Entrar"
                    footer="Não tem uma conta? Cadastre-se!"
                    route="/cadastro"
                />} />
                <Route path="/cadastro" element={
                <Login
                    inputs={[
                        {holder: "email", type: "email"},
                        {holder: "senha", type: "password"},
                        {holder:"nome", type: "text"},
                        {holder: "foto", type: "text"}]}
                    button="Cadastrar"
                    footer="Já tem uma conta? Faça login!"
                    route="/"
                />} />
                <Route path='/habitos' element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}