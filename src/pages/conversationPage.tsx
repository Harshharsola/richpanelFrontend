import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebarComponent";
import styled from "@emotion/styled";
import ConversationsPanel from "../components/conversationPanel";
import ChatPanel from "../components/chatPanel";
import { connectPage, getConversations } from "../api";
import { conversations } from "../constants";
import toast from "react-hot-toast";

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
  const [selectedPanel, setSelectedPanel] = useState<string>("inbox");
  const [conversations, setConversations] = useState<conversations[]>([]);
  const [recipientId, setRecipientId] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [noConversations, setNoConversations] = useState(true);

  useEffect(() => {
    setLoading(true);
    connectPage();
    getConversations({ pageId: props.pageId }).then((response: any) => {
      if (response.data.length === 0) {
        toast.error("no conversations found");
      } else {
        let conversationsData = response.data.map((ele: any) => ({
          ...ele.participants.data[0],
          conversationId: ele.id,
        }));
        setNoConversations(false);
        setConversations(conversationsData);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {}, [recipientId]);
  return (
    <Page>
      <Sidebar setSelectedPanel={setSelectedPanel} selected={selectedPanel} />
      {!loading && !noConversations && selectedPanel === "inbox" && (
        <ConversationsPanel
          conversations={conversations}
          setRecipientId={setRecipientId}
        />
      )}
      {!loading && !noConversations && selectedPanel === "inbox" && (
        <ChatPanel
          pageId={props.pageId}
          name={conversations[recipientId].name}
          recipientId={conversations[recipientId].id}
          conversationId={conversations[recipientId].conversationId}
          userId={props.userId}
        />
      )}
    </Page>
  );
}

export default ConversationPage;
