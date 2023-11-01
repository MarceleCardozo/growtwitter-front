import styled from "styled-components";
import Sidebar from "../components/SideBar";
import UserProfile from "../components/UserProfile";
import SessionWhatsHappening from "../components/SessionWhatsHappening";

const PageContainer = styled.div`
  display: flex;
`;

function Profile() {
  return (
    <PageContainer>
      <Sidebar />
      <UserProfile />
      <SessionWhatsHappening />
    </PageContainer>
  );
}

export default Profile;
