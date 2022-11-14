import React from "react";
import { getAllEstudiantes } from "../../api/api.js";
import { useQuery } from "react-query";
import TablaEstudiantes from "../UI/TablaEstudiantes.jsx";

export default function BusquedaAlumnos() {
  const { data, error, loading } = useQuery("estudiantes", getAllEstudiantes, {
    refetchOnWindowFocus: false,
  });

  const mostrarAlumnos = () => {
    return <TablaEstudiantes estudiantes={data} />;
  };

  return loading ? (
    <div>Cargando...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-alumnos">{mostrarAlumnos()}</div>
  );
}
