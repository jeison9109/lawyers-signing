import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/modal.css";
import { uiCloseModal } from "../actions/ui";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const LawyersModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  return (
    <Modal
      isOpen={modalOpen}
      //  onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal-fondo"
    >
      <h1>Hola Mundo</h1>
      <hr />
      <span>Hola de nuevo</span>
    </Modal>
  );
};
