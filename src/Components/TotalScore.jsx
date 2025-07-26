import styled from "styled-components";

const TotalScore = ({score}) => {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore;
const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  h1 {
    font-size: clamp(4rem, 8vw, 6.25rem);
    line-height: 1;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }
  
  p {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    font-weight: 500;
    margin: 0;
    text-align: center;
    white-space: nowrap;
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    gap: 0.25rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    gap: 0.125rem;
  }
`;