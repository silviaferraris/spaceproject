import {
  Box,
  Drawer,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { NavLink } from "react-router-dom";

interface MenuItemInterface {
  label: string;
  path: string;
}

const menuItems: MenuItemInterface[] = [
  {
    label: "View",
    path: "/view",
  },
  {
    label: "Add",
    path: "/add",
  },
  {
    label: "Track",
    path: "/track",
  },
  {
    label: "Exit",
    path: "/exit",
  },
];

function Sidebar() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: "block",
          position: "fixed",
          top: "38px",
          left: "20px",
        }}
      ></Box>
      <Box sx={{ height: "100vh", width: "200px" }}>
        <Drawer
          open={true}
          anchor="left"
          variant={"persistent"}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "0 !important",
              backgroundColor: "#000", // Cambia il colore di sfondo a nero
            },
          }}
        >
          <Box sx={{ padding: "22px 16px", width: "200px", height: "64px" }}>
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: "bold",
                color: "#fff", // Cambia il colore del testo a bianco
                padding: 0,
              }}
            >
              NeedMySpace{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "40px 12px 0px 12px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              width: "200px",
            }}
          >
            {menuItems.map((menuItem, index) => {
              return <MenuItem key={index} menuItem={menuItem} />;
            })}
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

interface MenuItemProps {
  menuItem: MenuItemInterface;
}

function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <div>
      <NavLink
        to={menuItem.path}
        style={{
          textDecoration: "none",
        }}
      >
        <ListItemButton
          sx={{
            padding: "8px 12px 8px 16px",
            borderRadius: "8px",
            color: "#fff", // Cambia il colore del testo a bianco
            "&:hover": {
              backgroundColor: "#333", // Cambia il colore di sfondo al passaggio del mouse
            },
          }}
        >
          <ListItemText
            primary={menuItem.label}
            sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}
          />
        </ListItemButton>
      </NavLink>
    </div>
  );
}

export default Sidebar;
