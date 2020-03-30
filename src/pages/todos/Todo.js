import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import * as actions from "../../store/actions";
import ChangeTodo from "./ChangeTodo";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "left",
    fontSize: "1rem",
    padding: ".5rem",
    minWidth: "50%",
    borderBottom: "1px solid grey",
    "&:focus": {
      background: "lightgray"
    },
    "&:hover": {
      background: "lightgray"
    }
  },
  mode: {
    width: "30%",
    display: "flex",
    justifyContent: "space-around"
  }
}));

const Todo = ({ show, close, todo, deleteTodo, error, loading }) => {
  const classes = useStyles();
  const [isDeleting, setisDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={classes.root}>
      {todo.todo}
      <span className={classes.mode}>
        <IconButton aria-label="edit" color="primary">
          <EditIcon onClick={() => setIsEditing(true)} />
        </IconButton>
        <IconButton aria-label="share" color="secondary">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="delete" style={{ color: "#ff4500" }}>
          <DeleteIcon
            todo={todo}
            show={isDeleting}
            onClick={async () => await deleteTodo(todo.id)}
          />
        </IconButton>
        <ChangeTodo
          editTodo={todo}
          opened={isEditing}
          close={() => setIsEditing(false)}
        />
      </span>
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  error: todos.deleteTodo.error,
  loading: todos.deleteTodo.loading
});

const mapDispatchToProps = {
  deleteTodo: actions.deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
