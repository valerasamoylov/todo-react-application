import React, { useState } from "react";
import { Button, Form, Input, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Container } from "../styles/styled";

const Register = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Container>
      <Card title="Registration" style={{ width: 300, textAlign: "center" }}>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="First Name"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setFirstName(e.target.value);
            }}
            autoComplete="off"
          />
          <Input
            placeholder="Last Name"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setLastName(e.target.value);
            }}
            autoComplete="off"
          />
          <Input
            prefix={<UserOutlined style={{ color: " rgba(0, 0, 0, 0.25)" }} />}
            placeholder="Email"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
          />
          <Input.Password
            prefix={<LockOutlined style={{ color: " rgba(0, 0, 0, 0.25)" }} />}
            placeholder="Password"
            style={{ marginBottom: "10px" }}
            onChange={e => {
              setPassword(e.target.value);
            }}
            autoComplete="off"
          />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%", marginBottom: "10px" }}
          >
            Register
          </Button>
          Or
          <Button
            type="primary"
            style={{ width: "100%", marginBottom: "10px" }}
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
