import styled from "styled-components";
import like from "../images/ICONE_CURTIDAS.svg";
import comment from "../images/ICONE_COMENTARIOS_STROKE.svg";
import { useState, useEffect } from "react";
import { TweetDTO, list } from "../config/services/tweet.service";
import { Avatar, Name, Username } from "./User";
const BodyTimeline = styled.div`
  border: 1px solid rgb(216, 215, 215);
  width: 60%;

  h1 {
    font-size: x-large;
    margin: 15px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(216, 215, 215);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.p`
  margin: 0;
`;

const SmallDot = styled.div`
  width: 4px;
  height: 4px;
  background-color: black;
  border-radius: 100%;
`;

const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icons = styled.div`
  margin: 10px 10px 0px 0px;
  display: flex;
`;

export default function Timeline() {
  const [tweets, setTweets] = useState<TweetDTO[]>([]);

  useEffect(() => {
    async function listTweets() {
      try {
        const response = await list();
        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets: ", error);
      }
    }

    listTweets();
  }, []);

  return (
    <BodyTimeline>
      <h1>Página Inicial</h1>
      <Line />
      {tweets.map((tweet, index) => (
        <div key={index}>
          <Container>
            <Avatar
              imageUrl={`https://www.gravatar.com/avatar/${tweet.User.id}?d=robohash`}
            />
            <div style={{ margin: "1rem" }}>
              <CustomContainer>
                <Name>{tweet.User.name}</Name>
                <Username>@{tweet.User.username}</Username>
                <SmallDot />
                <p>3h</p>
              </CustomContainer>
              <Content>{tweet.content}</Content>
              <CustomContainer>
                <Icons>
                  <img
                    src={comment}
                    alt="Comment"
                    style={{ marginRight: "3px" }}
                  />
                  <small>0</small>
                </Icons>
                <Icons>
                  <img src={like} alt="Like" style={{ marginRight: "3px" }} />
                  <small>0</small>
                </Icons>
              </CustomContainer>
            </div>
          </Container>
          <Line />
        </div>
      ))}
    </BodyTimeline>
  );
}
