import {
  Box,
  BoxProps,
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import assets from "../../json/assets";
import { DashboardSidebarStyled } from "../../StyledComponents/DashboardSidebarStyled";
import FileIcon2 from "../Icons//FileIcon2";
import FileIcon4 from "../Icons//FileIcon4";
import FileIcon6 from "../Icons//FileIcon6";
import InfluencerIcon from "../Icons//InfluencerIcon";
import CloseIcon from "../Icons/CloseIcon";
import FileIcon7 from "../Icons/FileIcon7";

const navItems = [
  {
    name: "Dashboard",
    route: `#`,
    icon: <FileIcon2 />,
  },
  {
    name: "Products",
    route: `#`,
    icon: <InfluencerIcon />,
  },
  {
    name: "Messages",
    route: `#`,
    icon: <FileIcon4 />,
  },
  {
    name: "Settings",
    route: `#`,
    icon: <FileIcon6 />,
  },
];

interface sidebarProps extends BoxProps {
  isInfluencer?: boolean;
  onclickProps?: () => void;
  isOpenSideBar?: boolean;
}

const DashboardSidebar: React.FC<sidebarProps & BoxProps> = ({ ...props }) => {
  const navigate = useNavigate();
  const logoRef = useRef<HTMLDivElement>(null);
  const [getLogoSecHeight, setGetLogoSecHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (logoRef.current) {
      setGetLogoSecHeight(logoRef.current.clientHeight);
    }
  }, [logoRef.current]);

  return (
    <DashboardSidebarStyled
      listHeight={getLogoSecHeight}
      {...props}
      className={props.isOpenSideBar ? "active" : ""}
    >
      <Box className="logo_sec" ref={logoRef}>
        <Button
          type="button"
          className="closebtnWrap"
          onClick={props.onclickProps}
        >
          <CloseIcon />
        </Button>
        <Link to={`/`}>
          <img
            src={assets?.weblogo}
            alt="logo"
            style={{ borderRadius: "20px" }}
          />
        </Link>
      </Box>
      <List disablePadding className="sidebar_menu">
        {navItems?.map((data, index) => (
          <ListItem disablePadding key={index}>
            <Button
              onClick={() => navigate(data?.route)}
              startIcon={data?.icon}
              className="active"
            >
              <Typography variant="caption" className="sidebar_text">
                {" "}
                {data?.name}
              </Typography>
            </Button>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button startIcon={<FileIcon7 />}>
            <Typography variant="caption" className="sidebar_text">
              Logout
            </Typography>
          </Button>
        </ListItem>
      </List>
    </DashboardSidebarStyled>
  );
};

export default DashboardSidebar;
