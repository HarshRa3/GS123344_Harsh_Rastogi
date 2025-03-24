import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import Logo from "../assests/logo/Gsynergy.svg";
import { Avatar, Stack } from "@mui/material";

const drawerWidth = 180;

const NavDrawer: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "white" }}
      >
        <Toolbar>
          <Stack
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
            direction={"row"}
          >
            <Stack sx={{ width: "130px" }}>
              <img src={Logo} alt="" />
            </Stack>
            <Typography sx={{ color: "black", fontWeight: 600 }} variant="h6">
              Data Viewer App
            </Typography>
            <Stack>
              <Avatar>H</Avatar>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { title: "Store" },
              { title: "SKU" },
              { title: "Planing" },
              { title: "Charts" },
            ].map((e, index) => (
              <NavLink
                key={e.title}
                style={{ textDecoration: "none", color: "black" }}
                to={e.title === "Store" ? "/" : e.title.toLowerCase()}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={e.title} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
      <Stack
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          background: "#DFDFDF",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        {children}
      </Stack>
    </Box>
  );
};

export default NavDrawer;
