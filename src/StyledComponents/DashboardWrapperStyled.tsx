import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import assets from "../json/assets";
import { primaryColors } from "../mui-themes/_ThemeColors";

export const DashboardWrapperStyled = styled(Stack, {
  shouldForwardProp: (data) => data !== "headerHeight",
})<{ headerHeight: number }>`
  padding: 25px 25px;
  height: 100vh;
  background: url(${assets?.dashboard_bg}) no-repeat center;
  background-size: cover;

  @media (max-width: 1199px) {
    padding: 16px;
  }
  @media (max-width: 599px) {
    padding: 16px 12px;
  }
  .wrapper_rgt {
    width: calc(100% - 144px);
    flex-basis: calc(100% - 144px);
    padding-left: 30px;
    padding-top: ${({ headerHeight }) => `${headerHeight}px`};
    margin-left: auto;
    @media (max-width: 1399px) {
      padding-left: 15px;
      width: calc(100% - 120px);
      flex-basis: calc(100% - 120px);
    }
    @media (max-width: 1199px) {
      width: 100%;
      flex-basis: 100%;
      padding-left: 0;
    }
  }
  .dashboard_body {
    padding: 0px;
    background: transparent;
    border-radius: 0;
    height: calc(100vh - (50px + ${({ headerHeight }) => `${headerHeight}px`}));
    overflow-y: auto;

    @media (max-width: 1199px) {
      height: calc(
        100vh - (32px + ${({ headerHeight }) => `${headerHeight}px`})
      );
    }
  }
  .common_box {
    padding: 30px 30px;
    background: ${primaryColors.white};
    box-shadow: 0px 1px 11.4px ${primaryColors.cmnCardBg};
    border-radius: 15px;
    @media (max-width: 1399px) {
      padding: 20px 16px;
    }
    @media (max-width: 899px) {
      padding: 16px 12px;
      border-radius: 10px;
    }
  }
  .overLay_wrap {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 10;
    position: fixed;
    display: none;
    &.active {
      display: block;
    }
  }
  .sidebar-active {
    overflow: hidden;
  }
`;
