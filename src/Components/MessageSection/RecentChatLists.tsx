import { Box, Typography } from "@mui/material";
import assets from "../../json/assets";

const RecentChatLists = () => {
  return (
    <Box className="allChatList_infoWrap">
      {Array.from({ length: 10 }, (_, index) => (
        <Box className="singleChatBox">
          <figure>
            <img src={assets.chatListIMg1} alt="user-image" />
          </figure>
          <Box className="chatInfoBox">
            <Box className="msgTxt">
              <Typography variant="body1" className="userName">
                Sahil Mallick
              </Typography>
              <Typography variant="body1" className="msgtxtInfo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam eligendi ducimus error quasi inventore nihil, nesciunt
                optio officia quisquam ipsum?
              </Typography>
            </Box>
            <Box className="timeBox">
              <Typography variant="body1" className="timeTxt">
                10:30
              </Typography>
              <Typography variant="body1" className="notificationNo">
                10
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RecentChatLists;
