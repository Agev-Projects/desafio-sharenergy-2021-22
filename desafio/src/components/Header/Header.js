import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import Avatar from "@mui/material/Avatar";

const Header = ({ open }) => {
  return (
    <header>
      <AppBar sx={{ flexGrow: 1 }} position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={open}
            sx={{ fontSize: 40, visibility: { md: "hidden" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" edge="start">
              <NotificationsIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton size="large" edge="start">
              <SettingsIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton size="large" edge="start">
              <HelpIcon sx={{ color: "white" }} />
            </IconButton>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
};

export default Header;
