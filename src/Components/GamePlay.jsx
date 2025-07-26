import styled from "styled-components"
import { useState } from "react"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [ selectedNumber, setSelectedNumber ] = useState();
  const [ currentDice,setCurrentDice ] = useState(1);
  const [ score,setScore ] = useState(0);
  const [ error,setError ] = useState("");
  const [ showRules,setShowRules ] = useState(false)
  const generateRandomNumber = (min, max)=> {
        
    return Math.floor(Math.random() * (max - min + 1) + min);
}

  const roleDice = ()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    

    const randomNumber = generateRandomNumber(1,6);
    console.log(randomNumber,"random number using role dice function");
    setCurrentDice((prev)=>randomNumber)

    if(selectedNumber === randomNumber){
      setScore((prev)=>prev + randomNumber);
    }else{
      
      setScore((prev)=>prev - 2);
    }
    setSelectedNumber()
};
const resetScore = ()=>{
  setScore(0);
}
const onClickHandlerForRules = ()=>{
  setShowRules(!showRules)
}
  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error = {error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <div className="mid_section">
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btn">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={onClickHandlerForRules}>{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules === true ? <Rules/> :""}
        </div>
        
        
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  min-height: 100vh;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .mid_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 300px;
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .btn {
      gap: 1rem;
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    
    .top_section {
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .mid_section {
      gap: 1.5rem;
    }
  }
`;