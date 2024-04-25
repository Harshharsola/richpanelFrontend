import React, { useState } from "react";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Typography } from "@mui/material";
import LoginComponent from "../components/loginComponent";
import { LogInComponentType } from "../constants";
import styled from "@emotion/styled";

interface UserDataInterface {
  name: string;
  email: string;
  password: string;
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

function LoginPage() {
  const [userData, setUserData] = useState<UserDataInterface>({
    name: "",
    email: "",
    password: "",
  });
  const [logedIn, setLogedIn] = useState<boolean>(false);
  const [authResponse, setAuthResponse] = useState();
  const [userStatus, setUserStatus] = useState();
  const [pages, setPages] = useState<
    { pageName: string; pageId: string; pageAccessToken: string }[]
  >([]);
  const handlePageResponse = (response: any) => {
    const pageArray = response.map((element: any) => {
      return {
        pageName: element.name,
        pageAccessToken: element.access_token,
        pageId: element.id,
      };
    });
    console.log(pageArray);
    setPages(pageArray);
  };

  useEffect(() => {
    (window as any).FB?.getLoginStatus(function (response: any) {
      console.log(response);
    });
  });

  return (
    <div
      style={{
        backgroundColor: "#1F4D90",
        height: "100vh",
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
              data-size=""
              data-button-type=""
              data-layout=""
              data-auto-logout-link="false"
              data-use-continue-as="false"
              onClick={() => {
                (window as any).FB.login(
                  function (response: any) {
                    console.log(response);
                    setAuthResponse(response.authResponse);
                    setUserStatus(response.status);
                  },
                  {
                    config_id: "458742549836535",
                  }
                );
              }}
            >
              Connect Facebook
            </Button>
          </div>
        </Modal>
      )}

      {userStatus === "connected" && pages.length === 0 && (
        <Modal>
          <Button
            onClick={() => {
              (window as any).FB.api(
                "/me/accounts",
                "GET",
                {},
                function (response: any) {
                  handlePageResponse(response.data);
                }
              );
            }}
          >
            Get Pages
          </Button>
        </Modal>
      )}

      {pages.length !== 0 && (
        <Modal>
          <Typography fontWeight={600}>Facebook Page Integeration</Typography>
          {pages.map((page) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              <span>
                Integrated Page:{" "}
                <span style={{ fontWeight: "600" }}>{page.pageName}</span>{" "}
              </span>
              <Button
                style={{ backgroundColor: "#E05140" }}
                variant="contained"
              >
                Delete Integration
              </Button>
              <Button variant="contained">Reply to Messages</Button>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
}

export default LoginPage;
