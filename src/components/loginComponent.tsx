import React, { useState } from "react";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Typography } from "@mui/material";
import { LogInComponentType } from "../constants";
import styled from "@emotion/styled";

interface UserDataInterface {
  name: string;
  email: string;
  password: string;
}

interface Iprops {
  userData: UserDataInterface;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface>>;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  componentType: LogInComponentType;
}

const Modal = styled.div`
  background-color: white;
  width: 20%;
  min-width: 300px;
  text-align: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 2%;
  gap: 2px;
`;

function LoginComponent(props: Iprops) {
  const [componentType, setComponentType] = useState<
    LogInComponentType.LOG_IN | LogInComponentType.SIGN_UP
  >(props.componentType);
  const handleInputChange = (event: any) => {
    let data = {
      ...props.userData,
      [event.target.name]: event.target.value,
    };
    props.setUserData(data);
  };

  const handleSubmit = () => {
    if (
      Object.values(props.userData).filter((value) => value.length === 0)
        .length === 0
    ) {
      props.setLoggedIn(true);
      //apiCall
    } else {
      //show missing fields
    }
  };
  useEffect(() => {}, []);

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
      <Modal
        style={{
          backgroundColor: "white",
          width: "20%",
          minWidth: "300px",
          textAlign: "center",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          padding: "2%",
          gap: "12px",
        }}
      >
        <Typography variant="h4">Create Account</Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {componentType === LogInComponentType.SIGN_UP && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                width: "100%",
                gap: "4px",
              }}
            >
              <Typography>Name</Typography>
              <input
                style={{ height: "30px" }}
                name="name"
                onChange={handleInputChange}
              ></input>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              width: "100%",
              gap: "4px",
            }}
          >
            <Typography>Email</Typography>
            <input
              style={{ height: "30px" }}
              name="email"
              onChange={handleInputChange}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              width: "100%",
              gap: "4px",
            }}
          >
            <Typography>Password</Typography>
            <input
              style={{ height: "30px" }}
              name="password"
              onChange={handleInputChange}
            ></input>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Checkbox
              style={{ height: "16px", padding: "0px", width: "16px" }}
            />{" "}
            <Typography>Remember me</Typography>
          </div>

          <Button
            style={{
              backgroundColor: "#1F4D90",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            <Typography variant="button">
              {componentType === LogInComponentType.SIGN_UP
                ? "Sign Up"
                : "Login"}
            </Typography>
          </Button>
          <Typography>
            <span>
              {componentType === LogInComponentType.SIGN_UP
                ? "Already have an account?"
                : " New to MyApp"}
            </span>{" "}
            <span
              style={{ color: "blue" }}
              onClick={() => {
                componentType === LogInComponentType.SIGN_UP
                  ? setComponentType(LogInComponentType.LOG_IN)
                  : setComponentType(LogInComponentType.SIGN_UP);
              }}
            >
              {componentType === LogInComponentType.SIGN_UP
                ? "Login"
                : "Sign Up"}
            </span>
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

export default LoginComponent;
