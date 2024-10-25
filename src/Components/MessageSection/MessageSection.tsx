import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import assets from "../../json/assets";
import { MessageSectionStyled } from "../../StyledComponents/MessageSectionStyled";
import BackBtnIcon from "../Icons/BackBtnIcon";
import FileUploadIcon from "../Icons/FileUploadIcon";
import SearchIcon from "../Icons/SearchIcon";
import SmileIcon from "../Icons/SmileIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import InputFieldCommon from "../UIComponents/CommonInput";
import RecentChatLists from "./RecentChatLists";

const MessageSection = () => {
  const [sameChatList, setSameChatList] = useState(0);
  const [mobileMsg, setMobileMsg] = useState<boolean | number>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [ReportCommunication, SetReportCommunication] = useState(false);

  const handleSetReportOpen = () => {
    SetReportCommunication(true);
  };

  const handleSetReportClose = () => {
    SetReportCommunication(false);
  };
  const handelMsgOpenMobile = (index: number) => {
    setMobileMsg(!mobileMsg);
  };
  const handelClickSameChat = (index: SetStateAction<number>) => {
    setSameChatList(index);
  };
  const [tabBtn, setTabBtn] = useState("all");
  const handelClick = () => {
    setTabBtn("all");
  };
  const handelClickUnRead = () => {
    setTabBtn("unread");
  };
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MessageSectionStyled>
      <Box className="wrapperMsgMain">
        <Box
          className={mobileMsg ? "active wrapper_leftMsg" : "wrapper_leftMsg"}
        >
          <Box className="innerAllInfoLeft">
            <Box className="chatSrch_top">
              <Box className="searchBox">
                <InputFieldCommon
                  placeholder="Search influencer..."
                  adorMentIcon={<SearchIcon />}
                />
              </Box>
            </Box>
            <Box className="topBtnTab_wrapper">
              <Button
                type="button"
                disableRipple
                onClick={() => handelClick()}
                className={tabBtn === "all" ? "active" : ""}
              >
                All
              </Button>
              <Button
                type="button"
                disableRipple
                onClick={() => handelClickUnRead()}
                className={tabBtn === "unread" ? "active" : ""}
              >
                Unread
              </Button>
            </Box>
            {/* Recent Chat Lists */}
            <RecentChatLists />
          </Box>
        </Box>
        <Box
          className={mobileMsg ? "active wrapper_rightMsg" : "wrapper_rightMsg"}
        >
          <Box className="wrapper_mainMsgBox">
            <Box className="allMsgInfoMain">
              <Box className="topMsgBarChat">
                <Button type="button" className="backMobileBtn">
                  <BackBtnIcon />
                </Button>
                <figure>
                  <img src={assets.chatListIMg1} alt="user-image" />
                </figure>
                <Box className="infoName">
                  <Box className="textOnly">
                    <Typography variant="body1" className="userName">
                      Sahil Kumar
                    </Typography>
                    <Typography variant="body1" className="typing status">
                      Typing...
                    </Typography>
                  </Box>
                  <Button
                    className="threDotButton"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <ThreeDotIcon IconColor="currentcolor" />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    className="wrap_innerMenuCmn reportMsgMenu"
                  >
                    <MenuItem>Report</MenuItem>
                  </Menu>
                </Box>
              </Box>
              <Box className="innerAllMsg_mainWrap">
                <Box className="mainMsg_all">
                  <Typography variant="body1" className="startDate">
                    10-Sept, 2024
                  </Typography>
                  <Box className="msgLising_chat">
                    <Box className="singleMsgBox sndr">
                      <figure>
                        <img src={assets.chatListIMg1} alt="user-image" />
                      </figure>
                      <Box className="msgTxtBox">
                        <Box className="innerChatTxt">
                          <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati modi dolorum odit repudiandae sint
                            perspiciatis vel minus aut nam sed! Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit. Totam
                            iusto sequi voluptas optio omnis vitae quam incidunt
                            veniam necessitatibus soluta? Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Sunt labore omnis
                            molestiae eum vero, saepe inventore natus vel,
                            maxime expedita id veritatis placeat quisquam est
                            sint suscipit! Vel, necessitatibus in! Lorem ipsum
                            dolor sit amet consectetur, adipisicing elit.
                            Laborum, doloribus? Possimus recusandae aliquam est
                            incidunt consequuntur nam magnam tempore dolorum
                            suscipit magni. Architecto eum fugit odio tempore
                            quod, consectetur itaque.
                          </Typography>
                         
                        </Box>
                        <Typography
                            textAlign="right"
                            variant="body1"
                            className="dateTxt"
                          >
                            ✔✔ 10:20 PM
                          </Typography>
                      </Box>
                      {/* <Typography variant="body1" className="dateTxt">
                        10:20 PM
                      </Typography> */}
                      <Button className="threDotButton">
                        <ThreeDotIcon IconColor="currentcolor" />
                      </Button>
                    </Box>
                    <Box className="singleMsgBox recvr">
                      <Box className="msgTxtBox">
                        <Box className="innerChatTxt">
                          <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim doloremque atque accusamus laudantium
                            quos aspernatur laboriosam, pariatur eos est
                            voluptatem? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Hic natus laudantium a facilis
                            consequatur omnis ullam modi adipisci beatae alias
                            dolor sit rem, dolores repellat tenetur quidem vitae
                            eaque minus eum enim necessitatibus laboriosam,
                            iusto quibusdam ipsum! Ea totam, deleniti nemo
                            praesentium distinctio sunt nam eos hic consequatur
                            nulla ipsa?
                          </Typography>
                        </Box>
                        <Typography
                            textAlign="right"
                            variant="body1"
                            className="dateTxt"
                          >
                            ✔✔ 10:20 PM
                          </Typography>
                      </Box>
                      {/* <Typography variant="body1" className="dateTxt">
                        10:30 PM
                      </Typography> */}
                      <Button className="threDotButton">
                        <ThreeDotIcon IconColor="currentcolor" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="wrapper_searchBtmFld">
                <InputFieldCommon placeholder="Write your message..." />
                <Box className="btnWRap">
                  <Button type="button" className="cmnBtnBg">
                    <SmileIcon />
                  </Button>
                  <Button type="button" className="cmnBtnBg">
                    <FileUploadIcon />
                    <input type="file" />
                  </Button>
                  <Button variant="contained" color="primary">
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </MessageSectionStyled>
  );
};

export default MessageSection;
