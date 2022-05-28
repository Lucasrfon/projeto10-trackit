import styled from 'styled-components';

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Header () {
    const { user } = useContext(UserContext);
    return (
        <Container>
            <h1>TrackIt</h1>
            <img src={user.image} alt={user.name}/>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: white;
    font-size: 40px;
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

h1 {
    font-family: 'Playball', cursive;
}

img {
    height: 51px;
    width: 51px;
    border-radius: 50%;
    object-fit: cover;
}
`