import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "dayjs/locale/pt-br";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UserContext from "../contexts/UserContext";
import ProgressContext from "../contexts/ProgressContext";

export default function Daily() {
    const { user } = useContext(UserContext);
    const { progress, setProgress } = useContext(ProgressContext);
    const config = {headers: {Authorization: `Bearer ${user.token}`}};
    const dayjs = require('dayjs');
    const [habits, setHabits] = useState([]);
    const [able, setAble] = useState(true);

    useEffect(() => {
        getHabits()
    }, []);

    function getHabits () {
        setAble(true);
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then((e) => renderHabits(e));
    }

    function renderHabits(promise) {
        setProgress((promise.data.filter(a => a.done === true).length / promise.data.length * 100).toFixed(0));
        setHabits(promise.data);
    }

    function select (id, done) {
        setAble(false);
        if(done === false){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config).then(getHabits)
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config).then(getHabits)
        }
    }

    return (
        <>
            <Header />
            <Container>
                <h1>{dayjs().locale("pt-br").format('dddd, DD/MM')}</h1>
                {progress > 0 ? <Progresso color="#8FC549">{progress}% dos hábitos concluídos</Progresso> : <Progresso color="#BABABA">Nenhum hábito concluído ainda</Progresso>}
                <Habits>
                    {habits.map((a) => 
                        <Habit key={a.id}>
                            <div>
                                <h3>{a.name}</h3>
                                <p>
                                    sequência atual: <Streak color={a.done ? "#8FC549" : "#666666"}>
                                        {a.currentSequence} dias
                                    </Streak>
                                </p>
                                <p>
                                    seu recorde: <Streak color={(a.currentSequence >= a.highestSequence) && (a.highestSequence > 0) ? "#8FC549" : "#666666"}>
                                        {a.highestSequence} dias
                                    </Streak>
                                </p>
                            </div>
                            <StyleIcon color={a.done ? "#8FC549" : "#E7E7E7"}>
                                {able ? 
                                    <ion-icon name="checkbox" onClick={() => select(a.id, a.done)}></ion-icon> 
                                    :
                                    <ion-icon name="checkbox"></ion-icon>
                                }
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

const Streak = styled.span`
    color: ${props => props.color};
`

const StyleIcon = styled.span`
    font-size: 68px;
    color: ${props => props.color};
`