import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Habits () {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </div>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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

div {
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