import React from "react";
import { useQuery } from "react-query";
import { getAllCandidatos } from "../../api/api";

export default function BusquedaCandidatos() {
  const { data, error, loading } = useQuery("candidatos", getAllCandidatos, {
    refetchOnWindowFocus: false,
  });

  const mostrarCandidatos = () => {
    return data?.map((candidato) => {
      return (
        <div className="candidato" key={candidato.id}>
          <p>{candidato.estado}</p>
          <p>{candidato.usuario.nombre}</p>
          <p>{candidato.usuario.apellido}</p>
          <p>{candidato.usuario.carrera} </p>
        </div>
      );
    });
  };

  return loading ? (
    <div>Cargando...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-candidatos">{mostrarCandidatos()}</div>
  );
}
