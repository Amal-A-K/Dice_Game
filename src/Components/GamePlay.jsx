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
padding-top: 64px;
padding-left: 80px;
max-height: 100vh;

.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.mid_section,.btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

`;