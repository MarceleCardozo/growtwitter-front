import styled from "styled-components";
import Sidebar from "../components/SideBar";
import Timeline from "../components/Timeline";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SessionWhatsHappening from "../components/SessionWhatsHappening";

const PageContainer = styled.div`
  display: flex;
`;

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
  });

  return (
    <PageContainer>
      <Sidebar />
      <Timeline />
      <SessionWhatsHappening />
    </PageContainer>
  );
}

export default Home;
