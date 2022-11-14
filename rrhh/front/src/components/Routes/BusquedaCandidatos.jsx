import React from "react";
import { getAllCandidatos } from "../../api/api.js";
import { useQuery } from "react-query";
import TablaCandidatos from "../UI/TablaCandidatos";
import useCandidatos from "../../api/useCandidatos.js";
import spinner from "../../assets/spinner.gif";

export default function BusquedaCandidatos() {
  const { candidatos, error, loading } = useCandidatos();
  const [reset, setReset] = React.useState(false);

  const fReset = () => {
    console.log("reseteado");
    setReset(!reset);
  };

  console.log(candidatos);
  const mostrarCandidatos = () => {
    return <TablaCandidatos candidatos={candidatos} fReset={fReset} />;
  };

  return loading ? (
    <div className="loader">
      <img src={spinner} alt="spinner" />
    </div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-candidatos">{mostrarCandidatos()}</div>
  );
}
