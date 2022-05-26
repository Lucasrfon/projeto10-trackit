import styled from 'styled-components';

export default function Footer () {
    return (
        <Container>
            <span>Hábitos</span>
            <div>Hoje</div>
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
    background-color: #52B6FF;
    color: white;
    border-radius: 50%;
    height: 91px;
    min-width: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}
`