import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";
import { useLocation } from "react-router-dom";
import CustomBreadcrumbs from "./CustomBreadcrumbs";

interface PathItem {
  label: string;
  link: string;
}

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const theme = useTheme();
  const classes = styles(theme);
  const location = useLocation();
  const pathItems = location.pathname.split("/").filter(Boolean);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ padding: "20px 0" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            component="h2"
            sx={{ ...classes.title, ml: theme.spacing(4) }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const styles = (theme: Theme) => {
  return {
    title: {
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
      lineHeight: theme.typography.h2.lineHeight,
      color: theme.palette.text.primary,
    },
  };
};