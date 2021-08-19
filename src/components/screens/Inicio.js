import React from "react";
import logo from "../images/fondo.png";
import "../../styles/inicio.css";
import { LawyersModal } from "../modal/LawyersModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../actions/ui";

export const Inicio = () => {
  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch(uiOpenModal());
  };

  return (
    <>
      <img src={logo} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Help to reclaim your life and freedom </h1>
            <h4>
              We know how large objects will act, but things on a small scale.
            </h4>

            <div className="cta">
              <button
                className="btn btn-primary-color btn-text"
                onClick={openModal}
              >
                Consultas
              </button>
              <button className="btn btn-primary-color btn-text">
                Ver más
              </button>
            </div>
          </div>
        </div>
        <LawyersModal />
      </div>
    </>
  );
};
