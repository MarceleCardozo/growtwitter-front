import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  width: 30%;
`;

const Box = styled.div`
  background-color: rgb(231, 231, 231);
  margin: 30px 60px 0px 20px;
  border-radius: 10px;
  padding: 10px;

  h3 {
    margin: 10px 10px;
  }

  a {
    margin: 10px 10px;
    font-size: 12px;
    color: rgb(29, 155, 240);
    text-decoration: none;
  }
`;

export const CustomContainer = styled.div`
  margin: 15px 10px;

  small {
    color: gray;
  }
`;

export default function SessionWhatsHappening() {
  const navigate = useNavigate();

  return (
    <Content>
      <Box>
        <h3>O que está acontecendo?</h3>
        <CustomContainer>
          <small>Esportes - Há 45 min</small>
          <h4>Assunto sobre esportes</h4>
        </CustomContainer>
        <CustomContainer>
          <small>Assunto do Momento em Brasil</small>
          <h4>Assunto do Momento</h4>
        </CustomContainer>
        <CustomContainer>
          <small>Música - Assunto do Momento</small>
          <h4>Assunto sobre Música</h4>
        </CustomContainer>
        <CustomContainer>
          <small>Cinema - Assunto do Momento</small>
          <h4>Assunto sobre Filmes e Cinema</h4>
        </CustomContainer>
        <a onClick={() => navigate("/toexplore")}>Mostrar mais</a>
      </Box>
    </Content>
  );
}
