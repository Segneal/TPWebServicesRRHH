import React from "react";
import { useQuery } from "react-query";
import { getAllCandidatos } from "../../api/api.js";
import TablaCandidatos from "../UI/TablaCandidatos";

export default function BusquedaCandidatos() {
  const { data, error, loading } = useQuery("candidatos", getAllCandidatos, {
    refetchOnWindowFocus: false,
  });

  const mostrarCandidatos = () => {
    return <TablaCandidatos candidatos={data} />;
  };

  return loading ? (
    <div>Cargando...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-candidatos">{mostrarCandidatos()}</div>
  );
}
