import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Inicio } from "../components/screens/Inicio";
import { Nosotros } from "../components/screens/Nosotros";
import { Servicios } from "../components/screens/Servicios";
import { Contacto } from "../components/screens/Contacto";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/contacto" component={Contacto} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
