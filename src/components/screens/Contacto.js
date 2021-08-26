import React from "react";
import { useForm } from "../hooks/useForm";
import "../../styles/formulario.css";
//import "../../styles/contact.css";
import image from "../../components/images/media.png";

export const Contacto = () => {
  const [formValues, handleInputChange] = useForm({
    fullName: "",
    cedula: "",
    email: "",
    message: "",
  });
  const { fullName, cedula, email, message } = formValues;

  return (
    <div className="container">
      <div className="row1 d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <div className="form d-flex justify-content-between">
            <div className="image">
              <img src={image} alt={image} />
            </div>
            <form action="" className="my-form">
              <h4 className="font-weight-bold mb-3">
                Solicite una consulta gratuita
              </h4>
              <p className="mdb-color-text">
                Contactanos para consultas y asesorias. Tú eres nuestro cliente
                y nuestra principal motivacion para ganar los casos.
              </p>

              <div className="md-form md-outline">
                <i className="fa fa-address-book"></i>
                <input type="text" id="nameExample" className="form-control" />
                <label htmlFor="nameExample">Nombre completo</label>
              </div>

              <div className="md-form md-outline">
                <i className="fa fa-phone"></i>
                <input
                  type="text"
                  id="celularExample"
                  className="form-control"
                />
                <label htmlFor="numeroExample">Numero de celular</label>
              </div>

              <div className="md-form md-outline">
                <i className="fas fa-envelope prefix"></i>
                <input type="text" id="emailExample" className="form-control" />
                <label htmlFor="emailExample">Correo electronico</label>
              </div>

              <div className="md-form md-outline">
                <i className="fas fa-envelope prefix"></i>

                <select
                  name="departament"
                  id="departament"
                  className="form-control"
                >
                  <option value="Select" select="" disabled=""></option>
                  <option value="Derecho Administrativo">
                    Derecho Administrativo
                  </option>
                  <option value="Derecho Civil">Derecho Civil</option>
                  <option value="Derecho de Familia">Derecho de Familia</option>
                  <option value="Denuncias">Derecho Laboral</option>
                  <option value="Derecho Inmobiliario y Urbanistico">
                    Derecho Inmobiliario y Urbanistico
                  </option>
                  <option value="Siniestros">Siniestros</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Contratacion Estatal">
                    Contratacion Estatal
                  </option>
                </select>
                <label htmlFor="opcioneslExample">Opciones</label>
              </div>

              <div className="space">
                <div className="float-right">
                  <button className="btn btn-rounded" type="button">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
