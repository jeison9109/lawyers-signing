import React from "react";
import { useForm } from "../hooks/useForm";
import "../../styles/formulario.css";
import "../../styles/contact.css";
//import logo1 from "../../components/images/world.png";

export const Contacto = () => {
  const [formValues, handleInputChange] = useForm({
    fullName: "",
    cedula: "",
    email: "",
    message: "",
  });
  const { fullName, cedula, email, message } = formValues;

  return (
    <div className="contact-2">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2>We Have Branches All Over The World</h2>
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th
              century, which gave some indications about how small things do
              behave, produced an increasing confusion which was Heisenberg, and
              Born.
            </p>
          </div>
          <div className="col-md-5">{/* <img src={logo1} alt={logo1} />*/}</div>
        </div>
        <div className="row">
          <div className="main-content">
            <div className="card-item">
              <div className="container-form">
                <h2>Request A Free Consultation</h2>

                <form autoComplete="off">
                  <div className="row">
                    <div className="mb-1">
                      <label htmlFor="full-name">Nombre</label>
                    </div>
                    <div className="mb-1">
                      <input
                        type="text"
                        className="form-label"
                        placeholder="Nombre y apellido"
                        name="fullName"
                        required="value"
                        //value={values.fullName}
                        onChange={handleInputChange}
                      ></input>
                    </div>

                    <div className="mb-1">
                      <label htmlFor="cedula">Cedula</label>
                    </div>
                    <div className="mb-1">
                      <input
                        //className="form-control"
                        className="form-label"
                        type="text"
                        placeholder="CC"
                        name="cedula"
                        required="value1"
                        //value={values.cedula}
                        onChange={handleInputChange}
                      ></input>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email">Correo</label>
                    </div>
                    <div className="mb-1">
                      <input
                        className="form-label"
                        type="text"
                        placeholder="email@domain.com"
                        name="email"
                        required="value2"
                        //  value={values.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="message">Mensaje</label>
                    </div>
                    <div className="mb-1">
                      <textarea
                        rows="4"
                        cols="40"
                        name="message"
                        required="value3"
                        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                        //   value={values.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-1">
                      <input
                        type="submit"
                        required="value4"
                        //  value={props.currentId == "" ? "Enviar" : ""}
                        className="button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
