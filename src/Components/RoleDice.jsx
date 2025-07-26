import styled from "styled-components"

const RoleDice = ({currentDice,roleDice}) => {
    
    
    
  return (
    <DiceContainer>
        <div className="dice"
        onClick={roleDice}
        >
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1"/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  .dice {
    cursor: pointer;
    transition: transform 0.2s ease;
    border-radius: 0.5rem;
    overflow: hidden;
    
    img {
      width: clamp(120px, 15vw, 200px);
      height: auto;
      display: block;
    }
    
    &:hover {
      transform: scale(1.05);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
  
  p {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    margin: 0;
    color: #333;
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    gap: 1rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    margin-top: 1rem;
    gap: 0.75rem;
    
    .dice img {
      width: clamp(100px, 20vw, 150px);
    }
  }
`;