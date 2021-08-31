import React from "react";
import "../../styles/nosotros.css";
import firm from "../../components/images/firm.jpeg";
import lawyer from "../../components/images/lawyer.jpg";
import logo from "../images/fondo-fin.png";

export const Nosotros = () => {
  return (
    <>
      <div className="fond-fin">
        <img src={logo} alt={logo} />
      </div>
      <div className="container3">
        <div className="row3">
          <div className="main-content3">
            <i
              style={{ fontSize: "10rem", color: "black" }}
              className="fa fa-university icon"
              aria-hidden="true"
            ></i>
            <h2 className="titulo-nosotros">Nosotros</h2>
            <p className="paragraph">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>

        <div className="row4">
          <div className="col-md-4">
            <div className="text-nosotros">
              <h2>Most trusted in our field</h2>
              <p>
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </p>
            </div>
            <div className="card-item4">
              <flex-row>
                <div className="text-n">
                  <h5>
                    {" "}
                    <i class="fa fa-users" aria-hidden="true"></i> the quick fox
                    jumps over the lazy dog
                  </h5>
                  <h6>Things on a very small scale ...</h6>
                </div>
              </flex-row>
            </div>
            <div className="card-item5">
              <flex-row2>
                <div className="text-n1">
                  <h5>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> the quick
                    fox jumps over the lazy dog{" "}
                  </h5>
                  <h6>Things on a very small scale ...</h6>
                </div>
              </flex-row2>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-item6">
              <img className="imglawyer" src={lawyer} alt={lawyer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
