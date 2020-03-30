import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    letterSpacing: ".1rem"
  },
  navigationLink: {
    color: "#000",
    textDecoration: "none",
    padding: "1.4rem",
    "&:hover": {
      color: "#333",
      borderBottom: "1px solid #333",
      fontWeight: 500
    }
  }
}));

const Navbar = ({ clicked, loggedIn }) => {
  const classes = useStyles();
  let links;
  if (loggedIn.uid) {
    links = (
      <>
        <NavLink
          className={classes.navigationLink}
          color="inherit"
          onClick={clicked}
          exact
          activeClassName="active"
          to="/logout"
        >
          Logout
        </NavLink>
      </>
    );
  } else {
    links = (
      <>
        <NavLink
          className={classes.navigationLink}
          onClick={clicked}
          color="inherit"
          exact
          activeClassName="active"
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          className={classes.navigationLink}
          color="inherit"
          onClick={clicked}
          exact
          activeClassName="active"
          to="/signup"
        >
          Register
        </NavLink>
      </>
    );
  }
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Todo's
        </Typography>
        {links}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
