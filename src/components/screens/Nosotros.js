import React from "react";
import "../../styles/nosotros.css";
import firm from "../../components/images/firm.jpeg";

export const Nosotros = () => {
  return (
    <>
      <div className="container3">
        <div className="row3">
          <div className="main-content3">
            <img className="firm" src={firm} alt={firm} />
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
          </div>
          <div className="col-md-8">
            <div className="card-item"></div>
          </div>
        </div>
      </div>
    </>
  );
};
