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
font-family:Poppins;
margin-top: 76px;
min-width: 794px;
min-height: 108px;
padding: 20px;
background-color:#FBF1F1;
;
h1{
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
}
.paraContainer{
    min-width: 754px;
    min-height: 108px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 24px;
    border-radius: 10px;
}
`;