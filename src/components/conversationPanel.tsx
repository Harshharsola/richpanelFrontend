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

const ConversationCard = styled.div<{
  $selected: boolean;
}>`
  padding: 12px;
  border-bottom: 1px lightgray;
  border-bottom-style: solid;
  background-color: ${(props) => (props.$selected ? "#edeeef" : "white")}
  &:hover {
    background-color: #edeeef;
    box-shadow: 2px 1px 5px gray;
  }
`;

function ConversationsPanel(props: {
  conversations: conversations[];
  setRecipientId: React.Dispatch<React.SetStateAction<number>>;
  recipientId: number;
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
            $selected={index === props.recipientId}
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
