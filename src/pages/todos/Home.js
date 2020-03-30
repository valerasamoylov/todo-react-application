import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "baseline",
    textAlign: "center",
    minHeight: "80vh",
    minWidth: "100%"
  },
  inputSign: {
    border: "none",
    borderBottom: "1px solid #ccc",
    display: " block",
    width: "100%",
    padding: "15px",
    fontSize: "14px",
    marginBottom: "10px",
    outline: "none",
    "&:focus": {
      borderBottom: "1px solid #000"
    }
  }
}));

const Home = ({ todos, requested, userId }) => {
  const classes = useStyles();
  let content;
  if (!todos) {
    content = <>Loading</>;
  } else if (!todos[userId] || !todos[userId].todos) {
    content = (
      <>
        <Typography variant="h7">You dont have todos!</Typography>
      </>
    );
  } else if (todos[userId].todos.length === 0) {
    content = (
      <>
        <Typography variant="h7">You dont have todos!</Typography>
      </>
    );
  } else {
    content = (
      <>
        {todos[userId].todos
          .slice(0)
          .reverse()
          .map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </>
    );
  }
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <Typography variant="h5">Your todos</Typography>
      <AddTodo />
      {content}
    </div>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`todos/${props.userId}`])
)(Home);
