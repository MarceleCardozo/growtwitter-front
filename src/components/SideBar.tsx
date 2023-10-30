import styled from "styled-components";
import logo from "../images/LOGO_GROWTWEET.svg";
import homeIconSelected from "../images/icone_pagina inicial_selecionado.svg";
import exploreIcon from "../images/icone_explorar.svg";
import profileIcon from "../images/icone_perfil.svg";
import Button from "./Button";
import { Avatar, Name, Username } from "./User";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDto } from "../config/services/user.service";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const BodySidebar = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const SidebarStyled = styled.div`
  min-width: 15vw;
  max-width: 20vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 3rem;

  #logo {
    padding: 0px 0px 10px 0px;
  }

  p {
    padding: 0.5rem 0rem;
  }

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  gap: 8px;
  text-decoration: none;
  cursor: pointer;

  &.selected {
    font-weight: bold;
  }
`;

const SidebarUserSection = styled.div`
  padding: 20px;
`;

const UserAvatarSection = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const UserLogoutLink = styled.a`
  margin: 20px;
  text-decoration: none;
  color: black;
`;

interface SideBarProps {
  loggedInUser: UserDto;
}

function Sidebar(props: SideBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState<UserDto>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(props.loggedInUser);
  console.log(loggedInUser);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    if (props.loggedInUser) {
      setLoggedInUser(props.loggedInUser);
    }
  }, [navigate, props.loggedInUser]);

  useEffect(() => {
    console.log("montou o componente");

    return () => {
      console.log("desmontou o componente");
    };
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <BodySidebar>
      <SidebarStyled>
        <SidebarSections>
          <img src={logo} id="logo" alt="logoGrowtwitter" />

          <SidebarItem
            onClick={() => navigate("/home")}
            className={location.pathname === "/home" ? "selected" : ""}
          >
            <img src={homeIconSelected} alt="homeIconSelected" />
            <p>Página Inicial</p>
          </SidebarItem>

          <SidebarItem
            onClick={() => navigate("/toexplore")}
            className={location.pathname === "/toexplore" ? "selected" : ""}
          >
            <img src={exploreIcon} alt="exploreIcon" />
            <p>Explorar</p>
          </SidebarItem>

          <SidebarItem
            onClick={() => navigate("/profile")}
            className={location.pathname === "/profile" ? "selected" : ""}
          >
            <img src={profileIcon} alt="profileIcon" />
            <p>Perfil</p>
          </SidebarItem>
          <SidebarItem>
            <Button type="button" action={openModal} />
          </SidebarItem>
        </SidebarSections>
      </SidebarStyled>

      <SidebarUserSection>
        <UserAvatarSection>
          <Avatar
            imageUrl={`https://www.gravatar.com/avatar/${loggedInUser?.id}?d=robohash`}
          />
          <div style={{ margin: "10px" }}>
            <Name>{loggedInUser?.name}Name</Name>
            <Username style={{ color: "gray" }}>
              @{loggedInUser?.username}Username
            </Username>
          </div>
        </UserAvatarSection>
        <UserLogoutLink onClick={logout}>Sair</UserLogoutLink>
      </SidebarUserSection>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </BodySidebar>
  );
}

export default Sidebar;
