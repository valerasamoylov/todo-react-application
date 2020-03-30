import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@material-ui/core";
import Modal from "../../components/Modal/Modal";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../store/actions";
import styled from "styled-components";

const styledInput = styled(Field)`
    border: none,
    border-bottom: 1px solid #ccc,
    display: block,
    width: 100%,
    padding: 15px,
    font-size: 14px,
    margin-bottom: 10px,
    outline: none,
    "&:focus": {
      borderBottom: 1px solid #000
`;

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required("The todo is required.")
});

const ChangeTodo = ({ editTodo, close, opened, editTodoAction }) => {
  return (
    <>
      <Modal opened={opened} close={close}>
        <Typography variant="h6" color="primery">
          Edit your todo
        </Typography>
        <Formik
          initialValues={{
            todo: editTodo ? editTodo.todo : ""
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // send our todo
            const res = await editTodoAction(editTodo.id, values);
            if (res) {
              close();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ resetForm }) => (
            <Form>
              <Field
                style={{
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  display: "block",
                  width: "100%",
                  padding: "15px",
                  fontSize: "14px",
                  marginBottom: "10px",
                  outline: "none"
                }}
                type="text"
                name="todo"
                placeholder="Write your todo"
              />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="contained" color="primary" type="submit">
                  Edit todo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  contain
                  onClick={() => {
                    close();
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error
});

const mapDispatchToProps = {
  addTodo: actions.addTodo,
  editTodoAction: actions.editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTodo);
