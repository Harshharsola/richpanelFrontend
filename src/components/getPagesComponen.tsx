import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { deletePage, getPages } from "../api";
import toast from "react-hot-toast";
const Modal = styled.div`
  background-color: white;
  width: 20%;
  min-width: 300px;
  text-align: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

interface Iprops {
  userStatus: string | undefined;
  userData: any;
  setPageId: any;
}
function GetPagesComponent(props: Iprops) {
  const [pages, setPages] = useState<
    {
      pageName: string;
      fbPageId: string;
      pageAccessToken: string;
      _id: string;
    }[]
  >([]);

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
  return (
    <div>
      {props.userStatus === "connected" && pages.length === 0 && (
        <Modal>
          <Button
            onClick={async () => {
              if (props.userData.userId) {
                const response = await getPages({
                  userId: props.userData.userId,
                });
                handlePageResponse(response);
              }
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
              key={page._id}
            >
              <span>
                Integrated Page:{" "}
                <span style={{ fontWeight: "600" }}>{page.pageName}</span>{" "}
              </span>
              <Button
                style={{ backgroundColor: "#E05140" }}
                variant="contained"
                onClick={() => {
                  handleDelete(page._id);
                }}
              >
                Delete Integration
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  props.setPageId(page._id);
                }}
              >
                Reply to Messages
              </Button>
            </div>
          ))}
        </Modal>
      )}
    </div>
  );
}

export default GetPagesComponent;
