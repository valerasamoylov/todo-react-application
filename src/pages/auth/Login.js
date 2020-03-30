import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as actions from "../../store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "80vh",
    minWidth: "30%"
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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email.required,
  password: Yup.string().required
});

const Login = ({ login, error, cleanUp }) => {
  const classes = useStyles();
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div className={classes.root} noValidate autoComplete="off">
          <Typography variant="h4">Login</Typography>
          <Typography variant="subtitle1">
            Login to access your account
          </Typography>
          <Form style={{ width: "100%" }}>
            <Field
              type="email"
              name="email"
              placeholder="Your email"
              className={classes.inputSign}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password"
              className={classes.inputSign}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ width: "200px", marginTop: "1rem", padding: "1rem" }}
              type="submit"
            >
              Sign In
            </Button>
            <div>
              <div style={{ color: "red" }} error="true">
                {error}
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error
});

const mapDispatchToProps = {
  login: actions.signIn,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
