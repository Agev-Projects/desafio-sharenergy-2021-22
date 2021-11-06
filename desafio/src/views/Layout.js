import { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header/Header.js";
import Menu from "../components/Menu/Menu.js";
import MenuMobile from "../components/Menu/MenuMobile.js";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Menu />
      <MenuMobile open={mobileOpen} setOpen={handleDrawerToggle} />

      <Box sx={{ width: "100%" }}>
        <Header open={handleDrawerToggle} />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
