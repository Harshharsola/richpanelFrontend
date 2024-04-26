import React from "react";
import Sidebar from "../components/sidebarComponent";
import styled from "@emotion/styled";

const Page = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
`;

function ConversationPage() {
  return (
    <Page>
      <Sidebar />
    </Page>
  );
}

export default ConversationPage;
