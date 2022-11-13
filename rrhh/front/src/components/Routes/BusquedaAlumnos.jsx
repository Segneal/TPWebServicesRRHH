import React from "react";
import { getAllEstudiantes } from "../../api/api.js";
import { useQuery } from "react-query";

export default function BusquedaAlumnos() {
  const { data, error, loading } = useQuery("estudiantes", getAllEstudiantes, {
    refetchOnWindowFocus: false,
  });

  const mostrarAlumnos = () => {
    return data?.map((estudiante) => {
      return (
        <div className="alumno" key={estudiante.id}>
          <p>{estudiante.nombre}</p>
          <p>{estudiante.apellido}</p>
          <p>{estudiante.carrera}</p>
          <p>{estudiante.promedio}</p>
          <p>{estudiante.porcentajeDeCarrera} </p>
        </div>
      );
    });
  };

  return loading ? (
    <div>Cargando...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-alumnos">{mostrarAlumnos()}</div>
  );
}
