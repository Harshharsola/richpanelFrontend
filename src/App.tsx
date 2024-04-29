import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import ConversationPage from "./pages/conversationPage";
import { Toaster } from "react-hot-toast";
interface UserDataInterface {
  userName?: string;
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
      <Toaster />
    </div>
  );
}

export default App;
