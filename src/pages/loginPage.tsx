import React, { useState } from "react";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Typography } from "@mui/material";
import LoginComponent from "../components/loginComponent";
import { LogInComponentType } from "../constants";
import styled from "@emotion/styled";
import { deletePage, getPages, updateUserIdAndToken } from "../api";
import toast from "react-hot-toast";
import GetPagesComponent from "../components/getPagesComponen";

interface UserDataInterface {
  userName?: string;
  email: string;
  password: string;
  userId?: string;
}
const Modal = styled.div`
  background-color: white;
  width: 20%;
  minw-idth: 300px;
  text-align: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 1.5%;
  gap: 10px;
`;
const Page = styled.div`
  background-color: #1f4d90;
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function LoginPage({
  userData,
  setUserData,
  setPageId,
}: {
  userData: UserDataInterface;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface>>;
  setPageId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [logedIn, setLogedIn] = useState<boolean>(false);
  const [authResponse, setAuthResponse] = useState();
  const [userStatus, setUserStatus] = useState();
  const [pages, setPages] = useState<
    {
      pageName: string;
      fbPageId: string;
      pageAccessToken: string;
      _id: string;
    }[]
  >([]);
  const handlePageResponse = (response: any) => {
    if (response.status === "200") {
      console.log(response);
      setPages(response.data.pageArray);
      if (response.data.pageArray.length === 0) {
        toast.error("No pages found for this facebook id");
      }
    } else {
      toast.error(response.message);
    }
  };
  const handleFbLoginResponse = (response: any) => {
    console.log(response);
    setAuthResponse(response.authResponse);
    setUserStatus(response.status);
    if (userData.userId)
      updateUserIdAndToken({
        userFbId: response.authResponse.userID,
        userId: userData.userId,
        accessToken: response.authResponse.accessToken,
      }).then((response) => {
        if (response.status === "200") {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      });
  };

  useEffect(() => {
    (window as any).FB?.getLoginStatus(function (response: any) {
      console.log("fb connection status", response);
    });
  });

  function handleDelete(id: string): void {
    deletePage(id).then((response) => {
      if (response.status === "200") {
        const updatedPageArray = pages.filter((page) => page._id !== id);
        setPages(updatedPageArray);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    });
  }

  return (
    <Page>
      {!logedIn && (
        <LoginComponent
          userData={userData}
          setUserData={setUserData}
          componentType={LogInComponentType.SIGN_UP}
          setLoggedIn={setLogedIn}
        />
      )}

      {logedIn && userStatus !== "connected" && (
        <Modal>
          <Typography fontWeight={600}>Facebook Page Integeration</Typography>
          <div className="fb-login-button">
            <Button
              variant="contained"
              className="fb-login-button"
              data-width="100"
              onClick={() => {
                (window as any).FB.login(handleFbLoginResponse, {
                  config_id: "458742549836535",
                });
              }}
            >
              Connect Facebook
            </Button>
          </div>
        </Modal>
      )}

      <GetPagesComponent
        userData={userData}
        setPageId={setPageId}
        userStatus={userStatus}
      />
    </Page>
  );
}

export default LoginPage;
