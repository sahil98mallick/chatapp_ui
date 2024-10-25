import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "../mui-themes/_ThemeColors";

export const DashboardHeaderStyled = styled(Box)`
  position: fixed;
  right: 25px;
  top: 25px;
  width: calc(100% - (144px + 80px));
  padding: 0 0 30px;
  z-index: 9;
  @media (max-width: 1399px) {
    width: calc(100% - (120px + 65px));
    padding: 0 0 16px;
  }
  @media (max-width: 1199px) {
    width: 100%;
    padding: 10px 16px;
    right: 0;
    background: ${primaryColors.responsiveColor};
    top: 0;
    z-index: 9;
  }

  @media (max-width: 599px) {
    padding: 10px 12px;
  }
  .header_title {
    h1 {
      font-weight: 700;
      font-size: 30px;
      color: ${primaryColors?.black};

      @media (max-width: 1199px) {
        font-size: 20px;
      }
      @media (max-width: 899px) {
        font-size: 18px;
      }
      @media (max-width: 599px) {
        font-size: 25px;
      }
      @media (max-width: 360px) {
        font-size: 14px;
      }
    }
    p {
      font-size: 13px;
      font-weight: 500;
      margin-top: 11px;
      @media (max-width: 899px) {
        display: none;
      }
    }
  }
  .MuiInputBase-root {
    height: 47px;

    @media (max-width: 1199px) {
      height: 40px;
      padding: 10px 16px;
    }
  }
  .notification_icon {
    width: 50px;
    height: 47px;
    flex-shrink: 0;
    background: linear-gradient(
      166.61deg,
      ${primaryColors.color5190d5} 9.62%,
      ${primaryColors.color41aabf} 94.96%
    );
    border-radius: 10px;
    min-width: auto;
    padding: 0;
    margin-right: 13px;

    @media (max-width: 1199px) {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    @media (max-width: 599px) {
      width: 36px;
      height: 36px;
      margin-right: 6px;
    }
    .is_active {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${primaryColors?.primary};
        position: absolute;
        right: 0;
        top: 1px;
        z-index: 1;
      }
    }
    &.dashboardMenuIcon {
      display: none;
      margin: 0 0 0 10px !important;
      @media (max-width: 1199px) {
        display: flex;
      }
      @media (max-width: 599px) {
        margin: 0 0 0 6px !important;
      }
    }
  }
  .avatar_block {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar_btn {
    padding: 7.5px 15px;
    border-radius: 10px;
    border: 1px solid rgba(168, 205, 248, 0.22);
    background: ${primaryColors.white};
    height: 47px;

    @media (max-width: 1199px) {
      padding: 6px 2px;
      width: 40px;
      height: 40px;
      min-width: auto;
    }
    @media (max-width: 599px) {
      width: 36px;
      height: 36px;
    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 10px;

      @media (max-width: 1199px) {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      font-weight: 500;
      font-size: 13px;
      text-transform: capitalize;
      color: ${primaryColors?.color292D32};

      @media (max-width: 1199px) {
        display: none;
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 19px;

      @media (max-width: 1199px) {
        display: none;
      }
    }
  }
  .searchFld {
    .MuiInputBase-root {
      height: 47px;

      @media (max-width: 1199px) {
        height: 40px;
        padding: 10px 16px;
      }
    }
    .searchBtn {
      display: none;
    }
    @media (max-width: 599px) {
      width: auto;
      .MuiFormControl-root {
        display: none;
      }
      .searchBtn {
        display: flex;
        margin: 0 !important;
        svg {
          path {
            stroke: ${primaryColors.white};
          }
        }
      }
    }
  }
  .mobileSearchBar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 16px 60px 16px 16px;
    background: ${primaryColors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 9;
    transform: translateY(-100%);
    transition: 0.3s ease-in-out;
    &.active {
      transform: inherit;
    }
    .closebtnWrap {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      min-width: auto;
      padding: 0;
      border-radius: 50%;
      background: ${primaryColors.white};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      display: flex;
    }
  }
`;
