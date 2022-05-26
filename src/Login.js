import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.svg';

export default function Login({inputs, button, footer, route}) {
    return (
        <Container>
            <img src={logo} alt='Logo' />
            <form>
                {inputs.map((a, index) => (
                    <input type={a.type} placeholder={a.holder} key={index} />
                ))}
                <button>{button}</button>
            </form>
            <Link to={route} style={{ textDecoration: 'none' }}>
                <span>{footer}</span>
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