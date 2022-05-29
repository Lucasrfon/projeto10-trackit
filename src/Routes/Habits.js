import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Habits () {
    const { user } = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${user.token}`}};
    const [creat, setCreat] = useState(false);
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [newHabit, setNewHabit] = useState("");
    const [newHabitDays, setNewHabitDays] = useState([]);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(goodRegister);
    },[]);

    function goodRegister (promise) {
        setHabits(promise.data)
    }

    function select(index) {
        if(newHabitDays.includes(index)) {
            setNewHabitDays(newHabitDays.filter((i) => i !== index));
        } else {
            setNewHabitDays([...newHabitDays, index]);
        }
    }

    function sendHabit() {
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {name: newHabit, days: newHabitDays}, config);
        promise.then(updateHabit);
    }

    function updateHabit (promise) {
        setHabits([...habits, promise.data]);
        setNewHabitDays([]);
        setNewHabit("");
    }

    function deleteHabit (e) {
        if(true) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e}`, config).then((e) => removeHabit(e))
        }
    }

    function removeHabit(e) {
        const remove = habits.filter(a => a !== e);
        setHabits(remove)
    }

    return (
        <>
            <Header />
            <Container>
                <span>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setCreat(!creat)}>+</button>
                </span>
                {creat ?
                    <NewHabit>
                        <input placeholder="nome do hábito" value={newHabit} onChange={e => setNewHabit(e.target.value)} />
                        <div>
                            {week.map((a, index) => <Day key={index} 
                            color={newHabitDays.includes(index) ? "white" : "#DBDBDB"}
                            background={newHabitDays.includes(index) ? "#CFCFCF" : "white"}
                            border={newHabitDays.includes(index) ? "#CFCFCF" : "#D4D4D4"}
                            onClick={() => select(index)}>{a}</Day>)}
                        </div>
                        <div>
                            <button>cancelar</button>
                            <button onClick={() => sendHabit()}>salvar</button>
                        </div>
                    </NewHabit>
                    :
                    null
                }
                {habits.length === 0 
                    ?
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    :
                    habits.map((a) =>
                        <Habit key={a.id}>
                            <h3>{a.name}</h3>
                            <div>
                                {week.map((e, index) => <Day key={index} 
                                color={a.days.includes(index) ? "white" : "#DBDBDB"}
                                background={a.days.includes(index) ? "#CFCFCF" : "white"}
                                border={a.days.includes(index) ? "#CFCFCF" : "#D4D4D4"}
                                >{e}</Day>)}
                            </div>
                            <ion-icon name="trash-outline" onClick={() => deleteHabit(a.id)}></ion-icon>
                        </Habit>)
                }
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

span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

h2 {
    color: #126BA5;
    font-size: 24px;
}

button {
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    font-size: 28px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const NewHabit = styled.div`
    background-color: white;
    width: 340px;
    height: 180px;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;

input {
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 10px;
}

div {
    display: flex;
    margin-top: 5px;

    button {
        margin-top: 20px;
        width: 85px;
        height: 35px;
        font-size: 16px;
        margin-left: 8px;
    }
}
`

const Day = styled.div`
    border: solid ${props => props.border} 1px;
    background-color: ${props => props.background};
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: ${props => props.color};
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`

const Habit = styled.div`
    background-color: white;
    color: #666666;
    font-size: 20px;
    width: 340px;
    height: 91px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;

div {
    display: flex;
    margin-top: 8px;

    div {
        border: solid ${props => props.border} 1px;
        background-color: ${props => props.background};
        width: 30px;
        height: 30px;
        border-radius: 5px;
        color: ${props => props.color};
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }
}

ion-icon {
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
}
`