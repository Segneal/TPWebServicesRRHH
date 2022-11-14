import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import student from "../../assets/student-icon.png";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Recursos Humanos</div>
      <Link className="sidebar-button" to="/busquedaAlumnos">
        <Flex className="box-sidebar">
          <img src={student} alt="student" />
          <h1>Alumnos</h1>
        </Flex>
      </Link>
      <Link className="sidebar-button" to="/busquedaCandidatos">
        <Flex className="box-sidebar">
          <img src={student} alt="student" />
          <h1>Candidatos</h1>
        </Flex>
      </Link>
    </div>
  );
}
