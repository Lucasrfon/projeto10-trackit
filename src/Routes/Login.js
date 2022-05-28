import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';

export default function Login() {
    const [login, setLogin] = useState({email: "", password: ""})
    return (
        <Container>
            <img src={logo} alt='Logo' />
            <form>
                <input type="email" placeholder="email" required value={login.email} onChange={e => setLogin({...login, email: e.target.value})} />
                <input type="password" placeholder="senha" required value={login.password} onChange={e => setLogin({...login, password: e.target.value})} />
                {console.log(login)}
                <button>Entrar</button>
            </form>
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