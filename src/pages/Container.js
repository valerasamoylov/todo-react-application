import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";

const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto, sans-serif",
    display: "flex",
    margin: "0",
    padding: "0",
    flexDirection: "column"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    width: "98.7vw"
  }
});

const Container = ({ children, loggedIn }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar loggedIn={loggedIn} />
      <main className={classes.wrapper}>{children}</main>
    </div>
  );
};
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(Container);
