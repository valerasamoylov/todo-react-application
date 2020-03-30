import React from "react";
import { jssPreset, makeStyles } from "@material-ui/core/styles";
import { create } from "jss";
import jssTemplate from "jss-plugin-template";

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins]
});

const useStyles = makeStyles({
  backdropWrapper: `
	position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: red;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
	transition: all 0.1s;
	`
});

const Backdrop = ({ opened, close }) => {
  const classes = useStyles();
  return (
    <div className={classes.backdropWrapper} onClick={close} opened={opened} />
  );
};

export default Backdrop;
