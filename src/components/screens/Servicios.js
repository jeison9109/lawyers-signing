import React from "react";
import "../../styles/servicios.css";

export const Servicios = () => {
  return (
    <div className="container-servicios">
      <div className="container-sup">
        <div className="row serv">
          <div className="main-content serv">
            <h2>Every Client Matters</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>

      <div className="container-cards">
        <div className="row serv1">
          <div className="col-md-4 s1">
            <div className="card-item">
              <div className="flex-row">
                <div>
                  <h6>
                    {" "}
                    <i
                      style={{
                        fontSize: "2.3rem",
                        color: "black",
                        marginRight: "15px",
                      }}
                      className="fa fa-gavel"
                      aria-hidden="true"
                    />
                    Derecho de Familia
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 s2">
            <div className="card-item">
              <div className="flex-row">
                <div>
                  <h6>
                    {" "}
                    <i
                      style={{
                        fontSize: "2.3rem",
                        color: "black",
                        marginRight: "15px",
                      }}
                      className="fa fa-balance-scale"
                      aria-hidden="true"
                    />
                    Derecho Civil
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 s3">
            <div className="card-item">
              <div className="flex-row">
                <div>
                  <h6>
                    {" "}
                    <i
                      style={{
                        fontSize: "2.3rem",
                        color: "black",
                        marginRight: "2px",
                      }}
                      className="fa fa-gavel"
                      aria-hidden="true"
                    />{" "}
                    Derecho Administrativo
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row serv2">
          <div className="col-md-4 s4">
            <div className="card-item">
              <div className="flex-row">
                <div>
                  <h6>
                    {" "}
                    <i
                      style={{
                        fontSize: "2.3rem",
                        color: "black",
                        marginRight: "15px",
                      }}
                      className="fa fa-gavel"
                      aria-hidden="true"
                    />
                    Derecho de Familia
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 s5">
            <div className="card-item">
              <div className="flex-row">
                <div>
                  <h6>
                    {" "}
                    <i
                      style={{
                        fontSize: "2.3rem",
                        color: "black",
                        marginRight: "15px",
                      }}
                      className="fa fa-gavel"
                      aria-hidden="true"
                    />
                    Derecho de Familia
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 s6">
            <div className="card-item">
              <div className="flex-row">
                <div>
                  <h6>
                    {" "}
                    <i
                      style={{
                        fontSize: "2.3rem",
                        color: "black",
                        marginRight: "15px",
                      }}
                      className="fa fa-gavel"
                      aria-hidden="true"
                    />
                    Derecho de Familia
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
