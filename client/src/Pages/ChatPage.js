import { Box } from "@chakra-ui/layout";
import React from "react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer/>}
      <Box>
        {/* {user && <MyChats/>} */}
        {/* {user && <ChatBox/>} */}
      </Box>
    </div>
  );
};

export default ChatPage;
