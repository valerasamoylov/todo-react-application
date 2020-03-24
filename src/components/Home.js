import React from "react";
import { Button, Card } from "antd";
import { Container } from "../styles/styled";

const Home = props => {
  return (
    <Container>
      <Card title="Todo App" style={{ width: 300, textAlign: "center" }}>
        <Button
          type="primary"
          ghost
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={() => {
            props.history.push("/register");
          }}
        >
          Register
        </Button>
        <Button
          type="primary"
          ghost
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={() => {
            props.history.push("/login");
          }}
        >
          Login
        </Button>
        <Button
          type="primary"
          ghost
          style={{ width: "100%" }}
          onClick={() => {
            props.history.push("/Dashboard");
          }}
        >
          Dashboard
        </Button>
      </Card>
    </Container>
  );
};

export default Home;
