import { Link } from 'react-router-dom';
import { useContext } from "react";
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ProgressContext from "../contexts/ProgressContext";

export default function Footer () {
    const { progress } = useContext(ProgressContext);

    return (
        <Container>
            <Link to="/habitos" style={{ textDecoration: 'none', color: 'inherit'}}>
                <span>Hábitos</span>
            </Link>
            <div>
                <Link to="/hoje" style={{ textDecoration: 'none', color: 'inherit'}}>
                    <CircularProgressbar value={progress} text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    })} />
                </Link>
            </div>
            <Link to="/historico" style={{ textDecoration: 'none', color: 'inherit'}}>
                <span>Histórico</span>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    color: #52B6FF;
    font-size: 18px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;

div {
    width: 91px;
    margin-bottom: 50px;
}
`