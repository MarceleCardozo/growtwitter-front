import styled from "styled-components";
import Sidebar from "../components/SideBar";
import Timeline from "../components/Timeline";
import SessionWhatsHappening from "../components/SessionWhatsHappening";

const PageContainer = styled.div`
  display: flex;
`;

function Home() {
  return (
    <PageContainer>
      <Sidebar />
      <Timeline />
      <SessionWhatsHappening />
    </PageContainer>
  );
}

export default Home;
