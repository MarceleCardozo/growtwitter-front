import styled from "styled-components";

interface ButtonPrimaryProps {
  action?: () => void;
  type: "submit" | "button";
}

const ButtonStyled = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 7px;
  border-radius: 30px;
  width: 10vw;
  cursor: pointer;
`;

const Button: React.FC<ButtonPrimaryProps> = ({ action, type }) => {
  return (
    <ButtonStyled type={type} onClick={action}>
      Tweetar
    </ButtonStyled>
  );
};

export default Button;
