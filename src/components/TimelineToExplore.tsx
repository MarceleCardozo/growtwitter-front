import { CustomContainer } from "./SessionWhatsHappening";
import { BodyTimeline, Line } from "./Timeline";

function TimelineToExplore() {
  return (
    <>
      <BodyTimeline>
        <h1>Explorar</h1>
        <Line />
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
        <CustomContainer>
          <small>Entretenimento - Assunto do Momento</small>
          <h4>Assunto sobre Entretenimento</h4>
        </CustomContainer>
        <CustomContainer>
          <small>Assunto do Momento em Porto Alegre</small>
          <h4>Assunto do Momento em Porto Alegre</h4>
        </CustomContainer>
        <CustomContainer>
          <small>Daphne - Principal Assunto do Momento</small>
          <h4>Assunto sobre Daphne</h4>
        </CustomContainer>
      </BodyTimeline>
    </>
  );
}

export default TimelineToExplore;
