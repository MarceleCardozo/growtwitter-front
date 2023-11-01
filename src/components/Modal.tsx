import styled from "styled-components";
import React, { useState } from "react";
import closeIcon from "../images/X.svg";
import {
  TweetDTO,
  TweetRequest,
  create,
} from "../config/services/tweet.service";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 35%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlainTextarea = styled.textarea`
  outline: none;
  background: transparent;
  padding: 0;
  width: 100%;
  height: 200px;
  resize: none;
  border: none;
`;

const ButtonCloseModal = styled.button`
  background: #fff;
  width: 20px;
  border: none;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(216, 215, 215);
`;

const ButtonTweet = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 10px;
  border-radius: 30px;
  width: 5vw;
  margin-left: 85%;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  tweet?: TweetDTO;
  userId?: string;
}

function Modal({ isOpen, onClose, children, userId }: ModalProps) {
  const [editableContent, setEditableContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableContent(e.target.value);
  };

  async function createTweet(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    console.log(userId, "tweet 123");

    const tweetCreate: TweetRequest = {
      content: editableContent,
      type: "tweet",
      userId: userId,
    };

    const response = await create(tweetCreate);

    if (response.code === 201) {
      onClose();
    }
  }
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <div>
          <ButtonCloseModal onClick={onClose}>
            <img src={closeIcon} alt="CloseIcon" />
          </ButtonCloseModal>
          {children}
          <PlainTextarea
            value={editableContent}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange(e)
            }
            placeholder="Digite aqui..."
          />
        </div>

        <div>
          <Line />
          <ButtonTweet onClick={createTweet}>Tweetar</ButtonTweet>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
