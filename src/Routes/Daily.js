import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserContext from "../contexts/UserContext";
import "dayjs/locale/pt-br";

import { useContext, useEffect, useState } from "react";
import ProgressContext from "../contexts/ProgressContext";
import axios from "axios";

export default function Daily() {
    const { user } = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${user.token}`}};
    const { progress, setProgress } = useContext(ProgressContext);
    const dayjs = require('dayjs');
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(renderHabits)
    }, []);

    function renderHabits (promise) {
        setProgress(promise.data.filter(a => a.done === true).length / promise.data.length * 100);
        setHabits(promise.data);
    }

    function select (id, done) {
        console.log(id);
        console.log(done);
        if(done === false){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config).then(
                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then(renderHabits)
            )
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config).then(
                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then(renderHabits)
            )
        }
    }

    return (
        <>
            <Header />
            <Container>
                <h1>{dayjs().locale("pt-br").format('dddd, DD/MM')}</h1>
                {progress === 0 ? <Progresso color="#BABABA">Nenhum hábito concluído ainda</Progresso> : <Progresso color="#8FC549">{progress}% dos hábitos concluídos</Progresso>}
                <Habits>
                    {console.log(habits)}
                    {habits.map((a) => 
                        <Habit key={a.id}>
                            <div>
                                <h3>{a.name}</h3>
                                <p>sequência atual: {a.currentSequence} dias</p>
                                <p>seu recorde: {a.highestSequence} dias</p>
                            </div>
                            <StyleIcon color={a.done ? "#8FC549" : "#E7E7E7"}>
                                <ion-icon name="checkbox" onClick={() => select(a.id, a.done)}></ion-icon>
                            </StyleIcon>
                        </Habit>
                    )}
                </Habits>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    background-color: #F2F2F2;
    min-height: 100vh;
    padding: 100px 15px;
    font-size: 18px;
    color: #666666;

h1 {
    color: #126BA5;
    font-size: 24px;
    margin-bottom: 10px;
}
`

const Progresso = styled.p`
    color: ${props => props.color};
    font-size: 18px;
`

const Habits = styled.div`
    margin-top: 30px;
`

const Habit = styled.div`
    margin-bottom: 10px;
    background-color: white;
    border-radius: 5px;
    min-height: 95px;
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;

h3 {
    margin-bottom: 8px;
    font-size: 20px;
}

p {
    font-size: 12px;
}
`

const StyleIcon = styled.span`
    font-size: 68px;
    color: ${props => props.color}
`