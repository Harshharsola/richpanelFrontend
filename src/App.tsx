import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/loginPage";
import ConversationPage from "./pages/conversationPage";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <ConversationPage />
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
