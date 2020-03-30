import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottom: "1px solid 	#D3D3D3",
    width: "100%",
    padding: "1rem"
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

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required("The todo is required.")
});

const AddTodo = ({ addTodo, error }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        todo: ""
      }}
      validationSchema={TodoSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // send our todo
        const res = await addTodo(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div className={classes.root}>
          <Form style={{ display: "flex" }}>
            <Field
              type="text"
              name="todo"
              placeholder="Write your todo..."
              className={classes.inputSign}
            ></Field>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "200px", marginLeft: "1rem", padding: "1rem" }}
                type="submit"
              >
                Add Todo
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ todos }) => ({
  error: todos.error
});

const mapDispatchToProps = {
  addTodo: actions.addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
