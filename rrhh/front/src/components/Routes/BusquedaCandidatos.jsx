import React from "react";
import { getAllCandidatos } from "../../api/api.js";
import { useQuery } from "react-query";
import TablaCandidatos from "../UI/TablaCandidatos";
import useCandidatos from "../../api/useCandidatos.js";

export default function BusquedaCandidatos() {
  const { candidatos, error, loading } = useCandidatos();

  console.log(candidatos);
  const mostrarCandidatos = () => {
    return <TablaCandidatos candidatos={candidatos} />;
  };

  return loading ? (
    <div>Cargando...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-candidatos">{mostrarCandidatos()}</div>
  );
}
