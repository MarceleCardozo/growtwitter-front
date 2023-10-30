import styled from "styled-components";

export const Avatar = styled.div<{ imageUrl: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  align-self: flex-start;
  margin: 8px 0px 0px 8px;
  border: 1px solid rgb(226, 226, 226);
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Username = styled.p`
  margin: 0;
`;
