import styled from "styled-components";
const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];
    const onChangeHandler = (value)=>{
        setSelectedNumber(value);
        setError("");

    }
    
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
        {
        arrNumber.map((value,index)=>(
            <Box
             key={index}
             isSelected = {value === selectedNumber}
             onClick={()=>onChangeHandler(value)}>{value}</Box>

        ))
    }
    
        </div>
        <p>Select Number</p>
   
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  
  .error {
    color: red;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    min-height: 1.5rem;
  }
  
  .flex {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    align-items: center;
    
    .flex {
      gap: 0.5rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    .flex {
      gap: 0.25rem;
    }
    
    p {
      font-size: 1.125rem;
    }
  }
`;

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})`
  height: 4.5rem;
  width: 4.5rem;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${(props) => props.isSelected ? "black" : "white"};
  color: ${(props) => props.isSelected ? "white" : "black"};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 0.25rem;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.95);
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    height: 4rem;
    width: 4rem;
    font-size: 1.375rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    height: 3.5rem;
    width: 3.5rem;
    font-size: 1.25rem;
    border-width: 1.5px;
  }
`;