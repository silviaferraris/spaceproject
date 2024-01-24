import React, { ReactNode, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useTheme } from "@mui/system";

interface BaseLayoutProps {
  child: ReactNode;
  options?: {
    scrollable?: boolean;
  };
  title: string;
  firstBadge?: React.ReactNode;
  secondBadge?: React.ReactNode;
}

function BaseLayout({ child, options, title }: BaseLayoutProps) {
  const theme = useTheme();
  const { scrollable = false } = options || {};

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        overflow: "auto",
      }}
    >
      <Sidebar></Sidebar>
      <Box
        sx={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "0 30px 20px 30px",
        }}
      >
        <Header title={title} />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            maxHeight: "100%",
            marginTop: "10px",
            overflow: scrollable ? "auto" : "hidden",
          }}
        >
          {child}
        </Box>
      </Box>
    </Box>
  );
}

export default BaseLayout;
