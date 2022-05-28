import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer () {
    const percentage = 80
    return (
        <Container>
            <span>Hábitos</span>
            <div>
                <CircularProgressbar value={percentage} text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                })} />
            </div>
            <span>Histórico</span>
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