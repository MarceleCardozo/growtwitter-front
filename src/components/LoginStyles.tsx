import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 242, 242);
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  min-height: 300px;
  border-radius: 8px;
  align-items: stretch;
  background-color: white;
`;

export const Welcome = styled.div`
  padding: 12px 24px;
  width: 50%;
  background-color: rgb(29, 155, 240);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;

  #work {
    margin: 12px 0px;
    font-size: 12px;
  }
`;

export const LoginForm = styled.div`
  padding: 8px;
  flex: 1 1 0%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  padding: 24px 16px;
  min-width: 70%;
  background-color: white;
  border-radius: 12px;

  h2 {
    margin-bottom: 12px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  position: relative;

  label {
    color: rgb(136, 136, 136);
    font-size: 14px;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 4px;
    margin-bottom: 8px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgb(221, 221, 221);
  }

  button {
    margin-top: 8px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: rgb(29, 155, 240);
    color: rgb(250, 250, 250);
    padding: 8px 4px;
    cursor: pointer;
  }
`;
