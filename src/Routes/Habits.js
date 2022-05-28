import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Habits () {
    const { user } = useContext(UserContext);
    const config = {headers: {"Authorization": user.token}};
    const [creat, setCreat] = useState(false);
    const [newHabit, setNewHabit] = useState({name: "", days: []});
    const [habits, setHabits] = useState([{
		id: 1,
		name: "Nome do hábito",
		days: [1, 3, 5]
	},
    {
		id: 1,
		name: "Nome do hábito",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Nome do hábito 2",
		days: [1, 3, 4, 6]
	}, {id: 1,
		name: "Nome do hábito",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Nome do hábito 2",
		days: [1, 3, 4, 6]
	}, {id: 1,
		name: "Nome do hábito",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Nome do hábito 2",
		days: [1, 3, 4, 6]
	}]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.catch(() => setHabits([]));
    },[]);
    console.log(newHabit);

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
                        <input placeholder="nome do hábito" value={newHabit.name} onChange={e => setNewHabit({...newHabit, name: e.target.value})} />
                        <div>
                            <div>D</div>
                            <div>S</div>
                            <div>T</div>
                            <div>Q</div>
                            <div>Q</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div>
                            <button>cancelar</button>
                            <button>salvar</button>
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
                            <div>D</div>
                            <div>S</div>
                            <div>T</div>
                            <div>Q</div>
                            <div>Q</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <ion-icon name="trash-outline"></ion-icon>
                    </Habit>)
                }
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    padding: 100px 15px;
    font-size: 18px;
    color: #666666;
    margin-bottom: 150px;

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

    div {
        border: solid #D4D4D4 1px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        color: #DBDBDB;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }

    button {
        margin-top: 20px;
        width: 85px;
        height: 35px;
        font-size: 16px;
        margin-left: 8px;
    }
}
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
        border: solid #D4D4D4 1px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        color: #DBDBDB;
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