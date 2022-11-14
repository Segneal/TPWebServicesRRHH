import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link className="sidebar-button" to="/busquedaAlumnos">
        Busqueda Alumnos
      </Link>
      <Link className="sidebar-button" to="/busquedaCandidatos">
        Busqueda Candidatos
      </Link>
    </div>
  );
}
