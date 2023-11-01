import styled from "styled-components";
import Sidebar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserDto, listMe } from "../config/services/user.service"; // Importe a função list e a interface UserDto

const PageContainer = styled.div`
  display: flex;
`;

function Profile() {
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
    </PageContainer>
  );
}

export default Profile;
