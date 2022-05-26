import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./reset.css"
import './globalstyle.css'
import Login from './Login';

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
                />}/>
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
                />}/>
            </Routes>
        </BrowserRouter>
    )
}