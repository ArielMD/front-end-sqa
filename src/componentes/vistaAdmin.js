import React from "react";
import Header from "./header";
import Creacion from "./CreacionHorarios";
import HorarioAdmin from "./horarioAdmin";
import { withRouter } from "react-router-dom";



const VistaAdmin = (props) => {
  return (
    <div>
      <Header />
      <Creacion/>
    </div>
  );
};
export default withRouter(VistaAdmin);
