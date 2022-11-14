import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  useDisclosure,
} from "@chakra-ui/react";
import EstudianteModal from "./EstudianteModal";

export default function TablaEstudiantes({ estudiantes }) {
  const [estudiante, setEstudiante] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectRow = (estudiante) => {
    onOpen();
    setEstudiante(estudiante);
  };

  const reset = () => {
    setEstudiante(null);
  };

  return (
    <section>
      <div className="estudiantes-title">
        <h1>Estudiantes</h1>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Td>Nombre</Td>
              <Td>Apellido</Td>
              <Td>Carrera</Td>
              <Td>Promedio</Td>
              <Td>Porcentaje de materias</Td>
            </Tr>
          </Thead>
          <Tbody>
            {estudiantes?.map((estudiante) => (
              <Tr
                key={estudiante.id}
                className="table-row-selector"
                onClick={() => selectRow(estudiante)}
              >
                <Td>{estudiante.nombre.toUpperCase()} </Td>
                <Td>{estudiante.apellido.toUpperCase()}</Td>
                <Td>{estudiante.carrera}</Td>
                <Td>{estudiante.promedio}</Td>
                <Td>{estudiante.porcentajeDeCarrera}%</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <EstudianteModal
        estudiante={estudiante}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        reset={reset}
      />
    </section>
  );
}
