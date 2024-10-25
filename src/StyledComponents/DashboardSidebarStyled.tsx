import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "../mui-themes/_ThemeColors";

export const DashboardSidebarStyled = styled(Box, {
  shouldForwardProp: (data) => data !== "listHeight",
})<{
  listHeight: number | undefined;
}>`
  width: 144px;
  flex-basis: 144px;
  position: fixed;
  left: 20px;
  top: 20px;
  height: calc(100vh - 40px);
  overflow-y: auto;
  z-index: 5;
  background-color: #f6dbff;
  border-radius: 20px;
  @media (max-width: 1399px) {
    width: 120px;
    flex-basis: 120px;
  }

  @media (max-width: 1199px) {
    width: 200px;
    flex-basis: 200px;
    max-width: 200px;
    position: fixed;
    left: inherit;
    right: -100%;
    top: 0;
    height: 100vh;
    transition: 0.5s ease-in-out;
    z-index: 99;
    border-radius: 0 20px 20px 0;
    &.active {
      left: 0;
      top: 0;
      height: 100vh;
      /* border-radius: 20px 0 0 20px; */
    }
  }
  .closebtnWrap {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    min-width: auto;
    padding: 0;
    border-radius: 50%;
    background: ${primaryColors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: none;

    @media (max-width: 1199px) {
      display: flex;
    }
  }
  .logo_sec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 33px 0px;
    @media (max-width: 1399px) {
      padding: 20px 16px 0;
    }
    a {
      display: inline-block;
    }
  }
  .sidebar_menu {
    padding: 30px 33px 0px;
    height: calc(100vh - (${({ listHeight }) => `${listHeight}px`} + 40px));
    overflow-y: auto;
    @media (max-width: 1399px) {
      padding: 20px 16px 0;
    }
    &::-webkit-scrollbar {
      width: 6px;
      background: ${primaryColors.colorfdf8ff};
      border-radius: 44px;
      display: none;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
      width: 6px;
      background: ${primaryColors.color3FAFBB};
      border-radius: 44px;
      display: none;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${primaryColors.color3FAFBB};
    }
    li {
      :not(:last-of-type) {
        margin-bottom: 30px;
      }
      button {
        flex-direction: column;
        font-weight: 500;
        font-size: 12px;
        color: ${primaryColors?.primary_600};
        width: 100%;
        justify-content: flex-start;
        padding: 0px;
        background: #f6dbff;
        border-radius: 10px;
        .MuiTypography-root {
          color: ${primaryColors.mainFontColor};
        }
        .MuiButton-startIcon {
          width: 40px;
          height: 38px;
          background: #f2f6fa;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 10px 0;
        }
        &:hover {
          color: ${primaryColors.white};
          .MuiButton-startIcon {
            background: linear-gradient(
              180deg,
              ${primaryColors.secondary} 0%,
              ${primaryColors.info} 100%
            );
          }
          .MuiTypography-root {
            color: ${primaryColors.primary};
            font-weight: 600;
          }
        }
        &.active {
          color: ${primaryColors.white};
          .MuiButton-startIcon {
            background: linear-gradient(
              180deg,
              ${primaryColors.secondary} 0%,
              ${primaryColors.info} 100%
            );
            /* box-shadow: 0px 0px 11.3px rgba(68, 166, 193, 0.5); */
          }
          .MuiTypography-root {
            color: ${primaryColors.primary};
            font-weight: 500;
            
          }
        }
      }
    }
  }
`;
