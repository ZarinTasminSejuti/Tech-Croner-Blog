import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
//  import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {


  const pages = [
    { key: "home", content: <NavLink to="/">Home</NavLink> },
    { key: "add-blog", content: <NavLink to="/addBlog">Add Blog</NavLink> },
    { key: "all-blogs", content: <NavLink to="/all-blogs">All Blogs</NavLink> },
    { key: "featured-blogs", content: <NavLink to="/featured-blogs">Featured Blogs</NavLink> },
    { key: "wishlist", content: <NavLink to="/wishlist">Wishlist</NavLink> },
  ];
  



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  //navigate after logout
  const navigate = useNavigate();

  const { user, userDetails, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Logged Out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AppBar
      position="static"
      className="bg-gradient-to-r from-blue-600 to-cyan-500 ..."
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DevicesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tech Corner
          </Typography>

          {/* responsive starts */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.content}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <DevicesIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* responsive ends */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.key}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.content}
              </Button>
            ))}
          </Box>

          <Box>
          {user ? (
         <>
                <div className="flex gap-3 items-center">
                <img
                src={userDetails.photoURL}
                alt={userDetails.displayName}
                className="w-10 rounded"
              />
           
            <span className="text-white">{userDetails.displayName}</span>
            
            <Button
              sx={{ color: "white" }}
              onClick={handleLogOut}
                  >Log Out</Button>
                   </div>
</>
       ) : (
         <>
            <Link to="/login">
              <Button sx={{ color: "white" }} className="btn btn-ghost px-6">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button sx={{ color: "white" }} className="btn btn-ghost px-6">
                Register
              </Button>
            </Link>
   </>
          )} 
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
