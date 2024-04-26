import styled from "@emotion/styled";
import { Input, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InboxIcon from "../assests/inbox.svg";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
const Wrapper = styled.div`
  height: 100vh;
  background-color: #f6f6f7;
  border-right: 1px;
  width: 60%;
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-color: lightgray;
  gap: 12px;
`;

const Header = styled.div`
  display: flex;
  background-color: white;
  padding: 12px;
  border: 1px;
  border-bottom-style: solid;
  border-color: lightgray;
`;

const MessageComponent = styled.div<{
  $messageType: boolean;
  $showImage: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (!props.$messageType ? "row" : "row-reverse")};
  padding: 4px;
  align-items: center;
  gap: 12px;
  margin-${(props) => (!props.$messageType ? "left" : "right")}: ${(props) =>
  props.$showImage ? "8px" : "43px"};
`;
const ChatBody = styled.div`
  overflow-y: auto;
  gap: 12px;
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
`;
const Message = styled.div`
  background-color: white;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px gray;
`;

const messageArray = [
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", userId: "23" },
  { text: "hi hello", senderId: "234" },
  { text: "hi hello", userId: "23" },
];
function ChatPanel(props: {
  name: string;
  conversationId: string;
  userId: string;
}) {
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useState<any>([]);
  useEffect(() => {
    socket.on("pong", (message) => {
      console.log(message);
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.emit("identify", props.userId);
  }, []);
  const sendMessage = () => {
    socket.emit("ping", newMessage);
    setNewMessage("");
  };
  return (
    <Wrapper>
      <Header>
        <Typography variant="subtitle1" fontWeight={600}>
          {props.name}
        </Typography>
      </Header>
      <ChatBody>
        {messageArray.map((message, index) => {
          let showImage = true;
          if (
            messageArray[index + 1] &&
            messageArray[index + 1].senderId === message.senderId
          ) {
            showImage = false;
          }
          return (
            <MessageComponent
              $showImage={showImage}
              $messageType={typeof message.senderId === "undefined"}
            >
              {showImage && <InboxIcon />} <Message>{message.text}</Message>
            </MessageComponent>
          );
        })}
      </ChatBody>

      <div
        style={{
          position: "sticky",
          bottom: "40",
          width: "-webkit-fill-available",
          background: "white",
          padding: "12px",
        }}
      >
        <TextField
          variant="outlined"
          style={{ width: "-webkit-fill-available" }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              sendMessage();
            }
          }}
        />
      </div>
    </Wrapper>
  );
}

export default ChatPanel;
