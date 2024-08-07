import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StoreIcon from "@mui/icons-material/Store";
import { AuthContext } from "../auth/AuthContext";

const authenticatedPages = [
  { text: "Home", icon: <HomeIcon />, path: "/" },
  { text: "Industries", icon: <WorkIcon /> },
  { text: "Pricing", icon: <LocalAtmIcon /> },
  { text: "Resources", icon: <LibraryBooksIcon /> },
  { text: "Marketplace", icon: <StoreIcon /> },
];

const unauthenticatedPages = [{ text: "Home", icon: <HomeIcon />, path: "/" }];

const settings = ["Profile", "Account", "Logout"];

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pages = isAuthenticated ? authenticatedPages : unauthenticatedPages;

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            paddingTop: "30px",
            paddingBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={isSidebarOpen}
              onClose={toggleSidebar}
              anchor="left"
              sx={{ width: 240 }}
            >
              <List>
                {pages.map((page) => (
                  <ListItem button key={page.text} onClick={toggleSidebar}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText primary={page.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "flex-start", md: "none" },
              alignItems: "center",
            }}
          >
            <img
              src="/images/Logo-bg-white.png"
              alt="Logo"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                height: "30px",
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.text}
                sx={{ my: 2, color: "grey", display: "block", padding: "15px" }}
                component={Link}
                to={page.path}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          {isAuthenticated ? (
            <Box sx={{ flexGrow: 0, marginRight: "50px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Profile"
                    src="/images/user.png"
                    sx={{
                      height: "60px",
                      width: "60px",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={
                      setting === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                  >
                    {setting}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              <Button
                sx={{ my: 2, color: "grey", display: "block", padding: "15px" }}
                component={Link}
                to="/auth/signin"
              >
                Sign In
              </Button>
              <Button
                sx={{ my: 2, color: "grey", display: "block", padding: "15px" }}
                component={Link}
                to="/auth/signup"
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
