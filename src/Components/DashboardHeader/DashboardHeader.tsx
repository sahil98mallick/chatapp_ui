import styled from "@emotion/styled";
import {
  Box,
  BoxProps,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import assets from "../../json/assets";
import { primaryColors } from "../../mui-themes/_ThemeColors";
import { DashboardHeaderStyled } from "../../StyledComponents/DashboardHeaderStyled";
import CloseIcon from "../Icons/CloseIcon";
import DashboardMenuIcon from "../Icons/DashboardMenuIcon";
import DownIcon from "../Icons/DownIcon";
import NotificationBellIcon from "../Icons/NotificationBellIcon";
import SearchIcon from "../Icons/SearchIcon";
import InputFieldCommon from "../UIComponents/CommonInput";

interface headerProps extends BoxProps {
  headerHeightCallBack: (data: number) => void;
  headerTitle: string;
  subTitle?: string;
  onOpenClick?: () => void;
  noSearchHeader?: boolean;
}
const DashboardHeader: React.FC<headerProps & BoxProps> = ({
  headerHeightCallBack,
  headerTitle,
  subTitle,
  noSearchHeader,
  ...props
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarBlockRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  const [avatarMenuWidth, setAvatarMenuWidth] = useState<number | undefined>(0);
  const [searchMobile, setSearchMobile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelOpenSearch = () => {
    setSearchMobile(!searchMobile);
  };

  useLayoutEffect(() => {
    if (avatarBlockRef.current) {
      const currentWidth = avatarBlockRef.current.clientWidth;
      setAvatarMenuWidth((prevWidth) =>
        prevWidth !== currentWidth ? currentWidth : prevWidth
      );

      const adjustWidth = () => {
        const newWidth = avatarBlockRef.current?.clientWidth;
        setAvatarMenuWidth((prevWidth) =>
          prevWidth !== newWidth ? newWidth : prevWidth
        );
      };

      window.addEventListener("resize", adjustWidth);

      return () => {
        window.removeEventListener("resize", adjustWidth);
      };
    }
  }, [avatarBlockRef.current]);

  useLayoutEffect(() => {
    if (headerRef.current) {
      const currentHeight = headerRef.current.clientHeight;
      setHeaderHeight((prevHeight) =>
        prevHeight !== currentHeight ? currentHeight : prevHeight
      );

      const adjustHeight = () => {
        const newHeight = headerRef.current?.clientHeight;
        setHeaderHeight((prevHeight) =>
          prevHeight !== newHeight ? newHeight : prevHeight
        );
      };

      window.addEventListener("resize", adjustHeight);

      return () => {
        window.removeEventListener("resize", adjustHeight);
      };
    }
  }, [headerRef.current]);

  useLayoutEffect(() => {
    if (headerHeight) {
      headerHeightCallBack(headerHeight);
    }
  }, [headerHeight]);

  return (
    <DashboardHeaderStyled ref={headerRef} {...props}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box className="header_title">
          <Typography variant="h1">{headerTitle}</Typography>
          {subTitle && <Typography>{subTitle}</Typography>}
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          className="header_options"
          ref={avatarBlockRef}
        >
          <Box
            sx={{
              minWidth: { lg: "257px", md: "200px", xs: "auto" },
              marginRight: { lg: "18px", sm: "10px", xs: "6px" },
            }}
            className="searchFld"
          >
            <InputFieldCommon
              placeholder="Search anything..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton disableRipple>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="button"
              className="notification_icon searchBtn"
              onClick={handelOpenSearch}
            >
              <SearchIcon />
            </Button>
          </Box>

          <Button className="notification_icon" disableRipple>
            <NotificationBellIcon />
          </Button>

          <Box className="avatar_block">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="avatar_btn"
              disableRipple
            >
              <Typography component="i" className="avatar_image">
                <img
                  src={assets?.message_avatar}
                  alt="avatar image"
                  width={30}
                  height={30}
                />
              </Typography>
              <Typography>Sahil Mallick</Typography>
              <Typography variant="caption">
                <DownIcon />
              </Typography>
            </Button>
            <Button
              type="button"
              className="notification_icon dashboardMenuIcon"
              onClick={props.onOpenClick}
            >
              <DashboardMenuIcon />
            </Button>
            <AvatarMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              avatarMenuWidth={avatarMenuWidth}
              className="wrapper_menuListPopup"
            >
              <MenuItem onClick={handleClose}>My Profile </MenuItem>
              <MenuItem>Logout</MenuItem>
            </AvatarMenu>
          </Box>
        </Stack>
      </Stack>
      <Box
        className={searchMobile ? "active mobileSearchBar" : "mobileSearchBar"}
      >
        <InputFieldCommon
          placeholder="Search influencer..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disableRipple>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="button"
          className="closebtnWrap"
          onClick={handelOpenSearch}
        >
          <CloseIcon />
        </Button>
      </Box>
    </DashboardHeaderStyled>
  );
};

export default DashboardHeader;

export const AvatarMenu = styled(Menu, {
  shouldForwardProp: (data) => data !== "avatarMenuWidth",
})<{ avatarMenuWidth: number | undefined }>`
  .MuiPaper-root {
    width: ${({ avatarMenuWidth }) => `${avatarMenuWidth}px`};
    background: ${primaryColors?.white};
    box-shadow: 0px 3px 28px -6px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    ul {
      padding: 17px 17px;
      li {
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        text-transform: capitalize !important;
        color: ${primaryColors?.color2F3240};
        padding: 9px 0;
        &:first-child {
          padding-top: 0px;
        }
        &:last-child {
          padding-bottom: 0px;
        }
        &:hover {
          background-color: transparent;
          color: ${primaryColors?.primary};
        }
      }
    }
  }
`;
