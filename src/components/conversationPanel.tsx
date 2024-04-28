import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { conversations } from "../constants";
const Wrapper = styled.div`
  height: 100vh;
  background-color: white;
  border-right: 1px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-color: lightgray;
`;

const Header = styled.div`
  display: flex;
  padding: 12px;
  border: 1px;
  border-bottom-style: solid;
  border-color: lightgray;
`;

const ConversationCard = styled.div`
  padding: 12px;
  border-bottom: 1px lightgray;
  border-bottom-style: solid;
  &:hover {
    background-color: #edeeef;
    box-shadow: 2px 1px 5px gray;
  }
`;

const mockConversationArray = [
  {
    name: "Harsh harsola",
    email: " Hi hello wassup",
    recipientId: "12346i",
  },
  {
    name: "Yamini harsola",
    email: " Hi hello wassup",
    recipientId: "asdf",
  },
  {
    name: "Dk harsola",
    email: " Hi hello wassup",
    recipientId: "34",
  },
  {
    name: "Shobhana harsola",
    email: " Hi hello wassup",
    recipientId: "jhgf",
  },
];
function ConversationsPanel(props: {
  conversations: conversations[];
  setRecipientId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleConversationSelection = (index: number) => {
    props.setRecipientId(index);
  };
  return (
    <Wrapper>
      <Header>
        <Typography variant="subtitle1" fontWeight={600}>
          Conversations
        </Typography>
      </Header>
      {props.conversations.map((chat, index) => {
        return (
          <ConversationCard
            key={chat.id}
            onClick={() => {
              handleConversationSelection(index);
            }}
          >
            <Typography variant="h5" fontWeight={400}>
              {chat.name}
            </Typography>
            <Typography variant="body2" fontWeight={400}>
              {chat.email}
            </Typography>
          </ConversationCard>
        );
      })}
    </Wrapper>
  );
}

export default ConversationsPanel;
