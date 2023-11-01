import styled from "styled-components";
import Sidebar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserDto, listMe } from "../config/services/user.service"; // Importe a função list e a interface UserDto
import TimelineToExplore from "../components/TimelineToExplore";
import SessionWhatsHappening from "../components/SessionWhatsHappening";

const PageContainer = styled.div`
  display: flex;
`;

function ToExplore() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState<UserDto | undefined>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    async function me() {
      const res = await listMe();
      setLoggedInUser(res.data);
    }
    me();
  }, [navigate]);

  return (
    <PageContainer>
      <Sidebar loggedInUser={loggedInUser} />
      <TimelineToExplore />
      <SessionWhatsHappening />
    </PageContainer>
  );
}

export default ToExplore;
