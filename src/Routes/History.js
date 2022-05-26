import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function History() {
    return (
        <>
            <Header />
            <Container>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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

h2 {
    color: #126BA5;
    font-size: 24px;
    margin-bottom: 20px;
}
`