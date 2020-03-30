import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "./Backdrop/Backdrop";

const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? "translate(-50%, -50%)" : "translate(-50%, -150%)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  width: 100%;
  max-width: 50rem;
  border-radius: 0.2rem;
  transition: all 0.1s;
  background-color: white;
  border: 1px solid #333;
`;

const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`;

const Modal = ({ opened, close, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop close={close} opened={opened} />
      <WrappedModal opened={opened}>
        <InsideWrapper>{children}</InsideWrapper>
      </WrappedModal>
    </>,
    document.getElementById("root-modal")
  );
};

export default Modal;
