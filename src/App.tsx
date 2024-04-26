import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/loginPage";
import ConversationPage from "./pages/conversationPage";
interface UserDataInterface {
  userName: string;
  email: string;
  password: string;
  userId?: string;
}
function App() {
  const [userData, setUserData] = useState<UserDataInterface>({
    userName: "",
    email: "",
    password: "",
  });
  const [pageId, setPageId] = useState<string>("");
  useEffect(() => {}, []);

  return (
    <div>
      {pageId.length === 0 ? (
        <LoginPage
          userData={userData}
          setUserData={setUserData}
          setPageId={setPageId}
        />
      ) : (
        userData.userId && (
          <ConversationPage pageId={pageId} userId={userData.userId} />
        )
      )}
    </div>
  );
}

export default App;
