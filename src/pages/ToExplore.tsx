import styled from "styled-components";
import Sidebar from "../components/SideBar";
import TimelineToExplore from "../components/TimelineToExplore";
import SessionWhatsHappening from "../components/SessionWhatsHappening";

const PageContainer = styled.div`
  display: flex;
`;

function ToExplore() {
  return (
    <PageContainer>
      <Sidebar />
      <TimelineToExplore />
      <SessionWhatsHappening />
    </PageContainer>
  );
}

export default ToExplore;
