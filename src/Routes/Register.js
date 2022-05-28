import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import styled from 'styled-components';
import logo from '../images/logo.svg';

export default function Register() {
    const [register, setRegister] = useState({email: "", password: "", name: "", pic: ""});
    const [able, setAble] = useState(true)
    const navigate = useNavigate()

    function sentRequest(event) {
        event.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
        {
            email: register.email,
            name: register.name,
            image: register.pic,
            password: register.password
        });
        setAble(!able);
        promise.catch(badRegister);
        promise.then(navigate('/'));
    }

    function badRegister() {
        alert('Falha no cadastro! Tente novamente!');
        navigate('/cadastro');
    }
    return (
        <Container>
            <img src={logo} alt='Logo' />
            {able ?
            <form onSubmit={sentRequest}>
                <input type="email" placeholder="email" required value={register.email} onChange={e => setRegister({...register, email: e.target.value})} />
                <input type="password" placeholder="senha" required value={register.password} onChange={e => setRegister({...register, password: e.target.value})} />
                <input type="text" placeholder="nome" required value={register.name} onChange={e => setRegister({...register, name: e.target.value})} />
                <input type="text" placeholder="foto" required value={register.foto} onChange={e => setRegister({...register, pic: e.target.value})} />
                <button typeof='submit'>Cadastrar</button>
            </form>
            :
            <form onSubmit={sentRequest}>
                <input type="email" placeholder="email" required value={register.email} onChange={e => setRegister({...register, email: e.target.value})} disabled />
                <input type="password" placeholder="senha" required value={register.password} onChange={e => setRegister({...register, password: e.target.value})} disabled />
                <input type="text" placeholder="nome" required value={register.name} onChange={e => setRegister({...register, name: e.target.value})} disabled />
                <input type="text" placeholder="foto" required value={register.foto} onChange={e => setRegister({...register, pic: e.target.value})} disabled />
                <button typeof='submit' disabled>Cadastrar</button>
            </form>
            }
            <Link to="/" style={{ textDecoration: 'none' }}>
                <span>Já tem uma conta? Faça login!</span>
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