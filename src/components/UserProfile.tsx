import {
  BodyTimeline,
  Container,
  Content,
  CustomContainer,
  Icons,
  Line,
  SmallDot,
} from "./Timeline";
import backButton from "../images/icone_seta.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { TweetDTO, listAllByUser } from "../config/services/tweet.service";
import { UserDto, listMe } from "../config/services/user.service";
import { create, deleteLike } from "../config/services/like.service";
import { Avatar, Name, Username } from "./User";
import comment from "../images/ICONE_COMENTARIOS_STROKE.svg";

const UserProfileContainer = styled.div`
  display: flex;
`;

const BackButtonImage = styled.img`
  margin: 30px 20px;
  width: 20px;
  height: 20px;
`;

const TextContainer = styled.div`
  margin: 20px;
`;

const Header = styled.h2`
  font-size: medium;
`;

const Subtitle = styled.small`
  color: rgb(196, 196, 196);
`;

const UserAvatar = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  align-self: flex-start;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-left: 20px;
  border: 3px solid gray;
`;

const NameProfile = styled.h3`
  font-size: large;
`;

const UsernameProfile = styled.p`
  font-size: medium;
  color: rgb(196, 196, 196);
`;

function UserProfile() {
  const [tweets, setTweets] = useState<TweetDTO[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<UserDto>();
  const [updateTimeLine, setUpdateTimeLine] = useState(true);

  async function fetchData() {
    const user = await listMe();
    const tweetList = await listAllByUser(user.data.id);
    setLoggedInUser(user.data);
    setTweets(tweetList.data);
  }
  useEffect(() => {
    if (updateTimeLine) {
      fetchData();
    }
    // apos buscar os tweets ao abrir a pagina, retorna para false, se fosse verdadeiro ainda rodaria o useEffect infinitamente
    setUpdateTimeLine(false);
  }, [updateTimeLine]);

  async function like(tweetId: string, index: number, userId: string) {
    const userLiked = tweets[index].Likes.some(
      (like) => like.userId === loggedInUser!.id
    );

    if (!userLiked) {
      const dataCreate = {
        tweetId: tweetId,
        userId: userId,
      };

      const copy = [...tweets];
      copy[index].Likes.push({
        id: "",
        tweetId: tweetId,
        userId: loggedInUser!.id,
      });

      setTweets(copy);

      const createLike = await create(dataCreate);
      console.log(createLike);
    } else {
      const indexLike = tweets[index].Likes.findIndex(
        (like) => like.userId === loggedInUser!.id
      );

      const dataToDelete = {
        id: tweets[index].Likes[indexLike].id,
      };

      const copy = [...tweets];
      copy[index].Likes.splice(indexLike, 1);
      setTweets(copy);

      const del = await deleteLike(dataToDelete);
      console.log(del);
    }
    setUpdateTimeLine(true);
  }

  console.log(tweets, "tweets");

  return (
    <BodyTimeline>
      <UserProfileContainer>
        <BackButtonImage src={backButton} alt="" />
        <TextContainer>
          <Header>Perfil de @{loggedInUser?.username}</Header>
          <Subtitle>{tweets.length} tweets</Subtitle>
        </TextContainer>
      </UserProfileContainer>
      <UserAvatar
        imageUrl={`https://www.gravatar.com/avatar/${loggedInUser?.id}?d=robohash`}
      />
      <div style={{ margin: "10px" }}>
        <NameProfile>{loggedInUser?.name}</NameProfile>
        <UsernameProfile>@{loggedInUser?.username}</UsernameProfile>
      </div>
      <Line />
      {tweets &&
        tweets.map((tweet, index) => (
          <div key={index}>
            <Container>
              <Avatar
                imageUrl={`https://www.gravatar.com/avatar/${tweet.userId}?d=robohash`}
              />
              <div style={{ margin: "1rem" }}>
                <CustomContainer>
                  <Name>{tweet.User?.name}</Name>
                  <Username>@{tweet.User?.username}</Username>
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
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => like(tweet.id, index, tweet.userId)}
                    >
                      <g clipPath="url(#clip0_83_2222)">
                        <path
                          d="M0 3.08429C0.0179879 1.989 0.502097 0.988356 1.59076 0.388938C2.70444 -0.22504 3.80484 -0.0826685 4.84735 0.616248C5.50587 1.05792 5.49726 1.05631 6.13388 0.62919C7.20064 -0.0867132 8.32293 -0.238792 9.45773 0.417251C10.598 1.07572 11.054 2.14836 10.9945 3.46611C10.9445 4.58567 10.4713 5.54102 9.8347 6.41628C8.94469 7.641 7.81145 8.58826 6.56715 9.39395C5.31895 10.2021 5.67636 10.1956 4.45553 9.40771C3.16509 8.5737 1.99666 7.5868 1.08944 6.30546C0.445788 5.39541 0.00625667 4.40366 0 3.08429ZM5.48866 2.9128C5.26968 2.62725 5.1117 2.4145 4.94746 2.20741C4.68077 1.8709 4.37263 1.58616 3.99175 1.38878C2.5754 0.651841 1.11134 1.57402 1.08397 3.21534C1.07067 4.00486 1.34909 4.69326 1.75265 5.33312C2.62702 6.71963 3.86427 7.70005 5.1899 8.57774C5.38308 8.70555 5.56139 8.74196 5.76786 8.60525C7.20299 7.65071 8.5513 6.59991 9.42176 5.03058C9.77917 4.38667 9.98486 3.69908 9.90587 2.94435C9.8128 2.05129 9.25987 1.39363 8.41522 1.18816C7.59716 0.989165 6.92926 1.31355 6.35755 1.87899C6.06115 2.17182 5.81557 2.51966 5.48788 2.9128H5.48866Z"
                          fill={
                            tweet.Likes.some(
                              (l) => l.userId === loggedInUser?.id
                            )
                              ? "red"
                              : "#828282"
                          }
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_83_2222">
                          <rect width="11" height="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <small>{tweet.Likes.length}</small>
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

export default UserProfile;
