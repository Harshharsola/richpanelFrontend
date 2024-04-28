import styled from "@emotion/styled";
import React, { useState } from "react";
import InboxIcon from "../assests/inbox.svg";
import PagesIcon from "../assests/pages.svg";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #1f4d90;

  width: 50px;
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div<{ $selected?: boolean }>`
  display: flex;
  justify-content: center;
  padding: 12px;
  background-color: ${(props) => props.$selected && "white"};
`;

function Sidebar(props: {
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
}) {
  const [selected, setSelected] = useState<string>(props.selected);

  const iconClickHandler = (selection: string) => {
    if (selection !== selected) {
      setSelected(selection);
      props.setSelectedPanel(selection);
    }
  };
  return (
    <Wrapper>
      <IconContainer
        $selected={selected === "inbox"}
        id="inbox"
        onClick={() => iconClickHandler("inbox")}
      >
        <InboxIcon
          width={22}
          height={18}
          color={selected === "inbox" ? "#1f4d90" : "white"}
        />
      </IconContainer>
      <IconContainer
        $selected={selected === "pages"}
        id="pages"
        onClick={() => iconClickHandler("pages")}
      >
        <PagesIcon
          width={22}
          height={22}
          color={selected === "pages" ? "#1f4d90" : "white"}
        />
      </IconContainer>
    </Wrapper>
  );
}

export default Sidebar;
