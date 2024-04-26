import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
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
    message: " Hi hello wassup",
    conversationId: "12346i",
  },
  {
    name: "Yamini harsola",
    message: " Hi hello wassup",
    conversationId: "asdf",
  },
  {
    name: "Dk harsola",
    message: " Hi hello wassup",
    conversationId: "34",
  },
  {
    name: "Shobhana harsola",
    message: " Hi hello wassup",
    conversationId: "jhgf",
  },
];
function ConversationsPanel() {
  return (
    <Wrapper>
      <Header>
        <Typography variant="subtitle1" fontWeight={600}>
          Conversations
        </Typography>
      </Header>
      {mockConversationArray.map((chat) => {
        return (
          <ConversationCard key={chat.conversationId}>
            <Typography variant="h5" fontWeight={400}>
              {chat.name}
            </Typography>
            <Typography variant="body2" fontWeight={400}>
              {chat.message}
            </Typography>
          </ConversationCard>
        );
      })}
    </Wrapper>
  );
}

export default ConversationsPanel;
