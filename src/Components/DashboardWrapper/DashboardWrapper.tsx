import Box from "@mui/material/Box";
import { StackProps } from "@mui/material/Stack";
import React, { useCallback, useState } from "react";
import { DashboardWrapperStyled } from "../../StyledComponents/DashboardWrapperStyled";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

interface dashBoardProps extends StackProps {
  headerTitle: string;
  subTitle?: string;
  influencerTrue?: boolean;
  isSearchHeader?: boolean;
}

const DashboardWrapper: React.FC<dashBoardProps & StackProps> = ({
  headerTitle,
  subTitle,
  influencerTrue,
  isSearchHeader,
  ...props
}) => {
  const [getHeaderHeight, setGetHeaderHeight] = useState<number>(0);
  const [sidebar, setSidebar] = useState(false);

  const handelSidebarOpen = () => {
    setSidebar(true);
    if (typeof document !== "undefined") {
      document.body.classList.add("sidebar-active");
    }
  };
  const handelSidebarClose = () => {
    setSidebar(false);
    if (typeof document !== "undefined") {
      document.body.classList.remove("sidebar-active");
    }
  };
  const headerHeightCallBack = useCallback((data: number) => {
    setGetHeaderHeight(data);
  }, []);

  return (
    <DashboardWrapperStyled
      headerHeight={getHeaderHeight}
      direction="row"
      flexWrap="wrap"
      {...props}
    >
      <DashboardSidebar
        isInfluencer={influencerTrue}
        onclickProps={handelSidebarClose}
        isOpenSideBar={sidebar}
      />
      <Box className="wrapper_rgt">
        <DashboardHeader
          headerTitle={headerTitle}
          subTitle={subTitle}
          headerHeightCallBack={headerHeightCallBack}
          onOpenClick={handelSidebarOpen}
          noSearchHeader={isSearchHeader}
        />
        <Box className="dashboard_body">{props?.children}</Box>
        <Box
          className={sidebar ? "active overLay_wrap" : "overLay_wrap"}
          onClick={handelSidebarClose}
        />
      </Box>
    </DashboardWrapperStyled>
  );
};

export default DashboardWrapper;
