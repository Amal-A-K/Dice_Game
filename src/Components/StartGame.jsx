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
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .dice_image {
    flex: 1;
    max-width: 100%;
    display: flex;
    justify-content: center;
    
    img {
      width: 100%;
      max-width: 500px;
      height: auto;
      object-fit: contain;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
    
    h1 {
      font-family: Poppins;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 700;
      line-height: 1.2;
      text-align: right;
      margin: 0;
    }
  }

  .playbtn {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 3rem;
    
    .content {
      align-items: center;
      
      h1 {
        text-align: center;
        font-size: clamp(2.5rem, 10vw, 4rem);
      }
    }
    
    .playbtn {
      justify-content: center;
    }
    
    .dice_image {
      order: -1;
      
      img {
        max-width: 400px;
      }
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    gap: 2rem;
    
    .content h1 {
      font-size: clamp(2rem, 12vw, 3rem);
    }
    
    .dice_image img {
      max-width: 300px;
    }
  }
`;
