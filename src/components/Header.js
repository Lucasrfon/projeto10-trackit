import styled from 'styled-components';

export default function Header () {
    return (
        <Container>
            <h1>TrackIt</h1>
            <img src='https://i.etsystatic.com/21753258/r/il/242e18/3280727045/il_570xN.3280727045_qryy.jpg' alt='User'/>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: white;
    font-size: 40px;
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

h1 {
    font-family: 'Playball', cursive;
}

img {
    height: 51px;
    width: 51px;
    border-radius: 50%;
}
`