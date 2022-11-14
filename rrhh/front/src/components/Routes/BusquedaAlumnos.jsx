import React from "react";
import { getAllEstudiantes } from "../../api/api.js";
import { useQuery } from "react-query";
import TablaEstudiantes from "../UI/TablaEstudiantes.jsx";
import useEstudiantes from "../../api/useEstudiantes.js";
import spinner from "../../assets/spinner.gif";

export default function BusquedaAlumnos() {
  const { estudiantes, error, loading } = useEstudiantes();

  const mostrarAlumnos = () => {
    return <TablaEstudiantes estudiantes={estudiantes} />;
  };

  return loading ? (
    <div className="loader">
      <img src={spinner} alt="spinner" />
    </div>
  ) : error ? (
    <div>Error</div>
  ) : (
    <div className="tabla-alumnos">{mostrarAlumnos()}</div>
  );
}
