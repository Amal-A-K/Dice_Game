import styled from "styled-components";

export const Button = styled.button`
  min-width: 200px;
  min-height: 48px;
  padding: 0.75rem 1.5rem;
  font-family: Poppins;
  border-radius: 0.375rem;
  background-color: #000000;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 280px;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  /* Tablet styles */
  @media (max-width: 768px) {
    min-width: 180px;
    min-height: 44px;
    font-size: 0.9rem;
    padding: 0.625rem 1.25rem;
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    min-width: 160px;
    min-height: 44px;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: #000000;
  border: 2px solid black;

  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;