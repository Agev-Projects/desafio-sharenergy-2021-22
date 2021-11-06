import Drawer from "@mui/material/Drawer";
// import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/images/logo.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory, useLocation } from "react-router";

const Menu = () => {
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "Usina",
      icon: <WbSunnyIcon color="primary" />,
      path: "/",
    },
    {
      text: "Clientes",
      icon: <AccountBoxIcon color="primary" />,
      path: "/clientes",
    },
    {
      text: "Sair",
      icon: <LogoutIcon color="primary" />,
      path: "/logout",
    },
  ];

  return (
    <Drawer
      sx={{
        width: 240,
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
      variant="permanent"
      anchor="left"
    >
      <div style={{ padding: " 7px 0px 7px 7px" }}>
        <img src={Logo} width={220} alt="Sharenergy Logo" />
      </div>

      <List>
        {menuItems.map((item, index) => {
          return (
            <ListItem
              button
              key={index}
              onClick={() => history.push(item.path)}
              sx={
                location.pathname === item.path
                  ? { backgroundColor: "#f4f4f4" }
                  : null
              }
            >
              <ListItemIcon> {item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Menu;
