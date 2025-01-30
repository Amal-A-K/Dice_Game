import styled from "styled-components"
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div className="dice_image">
                <img src="/images/dices.png" alt="Front dice logo" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <div className="playbtn">
                <Button onClick={toggle}>Play Now</Button>
                </div>
                
            </div>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
max-width:1182px;
height: 100vh;
margin-top: 180px;
display:flex;
margin: 0 auto;
align-items:center;
justify-content: space-between;

.dice_image{
    min-width: 649px;
    min-height: 522px;
}

.content h1{
font-family: Poppins;
font-size: 96px;
font-weight: 700;
line-height: 144px;
white-space: nowrap;


}
.playbtn{
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
}
`;
