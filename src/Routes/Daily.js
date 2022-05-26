import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Daily() {
    return (
        <>
            <Header />
            <Container>

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
`