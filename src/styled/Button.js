import styled from "styled-components";

export const Button = styled.button`

min-width: 220px;
min-height: 44px;
/* margin-left: 57%; */
padding: 10px 18px 10px 18px;
font-family: Poppins;
border-radius: 5px;
background-color: #000000;
color: white;
font-size: 16px;
font-weight: 600;
line-height: 24px;
border: 1px solid transparent;
transition: 0.3s background-color ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: #000000;
    transition: 0.3s background-color ease-in;

}
`;
export const OutlineButton = styled(Button)`

background-color: white;
color: #000000;
border: 1px solid black;

&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;

}
`;