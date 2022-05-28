import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Login() {
    const { setUser } = useContext(UserContext);
    const [login, setLogin] = useState({email: "dh11v@gmail.com", password: "123"});
    const [able, setAble] = useState(true);
    const navigate = useNavigate();

    function sentRequest(event) {
        event.preventDefault();
        setAble(!able);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {email: login.email, password: login.password});
        promise.catch(badRegister);
        promise.then(goodRegister);
    }

    function goodRegister(promise) {
        setUser(promise.data)
        navigate('/hoje')
    }

    function badRegister() {
        alert('Falha no Login! Tente novamente!');
        setAble(true);
        setLogin({email: "", password: ""})
    }

    return (
        <Container>
            <img src={logo} alt='Logo' />
            {able ?
                <form onSubmit={sentRequest}>
                    <input type="email" placeholder="email" required value={login.email} onChange={e => setLogin({...login, email: e.target.value})} />
                    <input type="password" placeholder="senha" required value={login.password} onChange={e => setLogin({...login, password: e.target.value})} />
                    <button typeof='submit'>Entrar</button>
                </form>
                :
                <form>
                    <input type="email" placeholder="email" required value={login.email} onChange={e => setLogin({...login, email: e.target.value})} disabled />
                    <input type="password" placeholder="senha" required value={login.password} onChange={e => setLogin({...login, password: e.target.value})} disabled />
                    <button typeof='submit' disabled>Entrar</button>
                </form>
            }
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

img {
    margin-bottom: 30px;
}

form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-bottom: 25px;
}

input {
    margin-bottom: 6px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    border: solid 1px #D4D4D4;
    height: 45px;
}

input::placeholder {
    color: #DBDBDB;
}

button {
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 22px;
}

span {
    text-decoration: underline;
    font-size: 14px;
    color: #52B6FF;
}
`