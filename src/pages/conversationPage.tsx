import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebarComponent";
import styled from "@emotion/styled";
import ConversationsPanel from "../components/conversationPanel";
import ChatPanel from "../components/chatPanel";
import { connectPage } from "../api";

const Page = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
`;
interface Iprops {
  pageId: string;
  userId: string;
}
function ConversationPage(props: Iprops) {
  const [selectedPanel, setSelectedPanel] = useState<string>();
  useEffect(() => {
    connectPage().then((response: any) => {
      console.log(response);
    });
  }, []);
  return (
    <Page>
      <Sidebar setSelectedPanel={setSelectedPanel} />
      <ConversationsPanel />
      <ChatPanel
        name="Harsh Harsola"
        conversationId="12346"
        userId={props.userId}
      />
    </Page>
  );
}

export default ConversationPage;
/*
FB.api(
  '/t_2598704216954759/messages',
  'GET',
  {"fields":"from,message"},
  function(response) {
      // Insert your code here
  }
);
*/
