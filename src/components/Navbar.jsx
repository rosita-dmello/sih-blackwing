import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Our Services",
    link: "/services",
  },
  {
    title: "About Gold",
    link: "/gold",
  },
  {
    title: "About Hallmarking",
    link: "/hallmarking",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      position="sticky"
      

    >
      <Container maxWidth="xl">
        <Toolbar disableGutters color="#fff">
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            {/* <img
              src="/blue-lotus-picture.png"
              alt="Blue Lotus Logo"
              style={{ width: "4rem" }}
            /> */}
          </Box>
          <Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              color="#fff"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              BLACKWING
            </Typography>
        
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} color="#fff">
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
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="primary">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="a"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            {/* <img
              src="/blue-lotus-picture.png"
              alt="Blue Lotus Logo"
              style={{
                width: "3rem",
              }}
            /> */}
          </Box>
          <Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              color="#fff"
              sx={{
                mr: 2,
                ml: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              BLACKWING
            </Typography>
            
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                component="a"
                href="/"
                key={page.title}
                color="#fff"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  textDecoration: "none",
                  "&:hover": {
                    color: "#f4f4f4",
                  },
                }}
                fontWeight={500}
              >
                {page.title}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              component="a"
              href="/delivery/signup"
              onClick={handleCloseNavMenu}
              color="#fff"
              sx={{
                my: 2,
                mx: 1,
                textDecoration: "none",
                
                "&:hover": {
                  color: "#f4f4f4",
                },
                display: {
                  xs: "none",
                  md: "inline-block",
                },
              }}
              fontWeight={500}
            >
              Delivery Partner
            </Typography>
            <Typography
              component="a"
              href="/login"
              onClick={handleCloseNavMenu}
              color="#fff"
              sx={{
                my: 2,
                mx: 1,
                textDecoration: "none",
                "&:hover": {
                  color: "#f4f4f4",
                },
              }}
              fontWeight={500}
            >
              Login
            </Typography>
            <Typography
              component="a"
              href="/signup"
              onClick={handleCloseNavMenu}
              color="#fff"
              sx={{
                my: 2,
                mx: 1,
                textDecoration: "none",
                "&:hover": {
                  color: "#f4f4f4",
                },
              }}
              fontWeight={500}
            >
              Register
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
