import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <div className="paraContainer">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
        
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
  font-family: Poppins;
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  padding: 1.5rem;
  background-color: #FBF1F1;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 1rem 0;
    text-align: center;
  }

  .paraContainer {
    width: 100%;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    font-weight: 500;
    line-height: 1.6;
    
    p {
      margin: 0.75rem 0;
      padding-left: 1rem;
      position: relative;
      
      &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: #666;
      }
    }
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 1.25rem;
    
    .paraContainer p {
      margin: 0.5rem 0;
      padding-left: 0.75rem;
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    margin-top: 1rem;
    padding: 1rem;
    
    .paraContainer p {
      margin: 0.375rem 0;
      padding-left: 0.5rem;
    }
  }
`;