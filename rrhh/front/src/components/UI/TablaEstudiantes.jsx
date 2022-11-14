import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  useDisclosure,
  Select,
  Input,
  Text,
  HStack,
} from "@chakra-ui/react";
import EstudianteModal from "./EstudianteModal";

export default function TablaEstudiantes({ estudiantes }) {
  const [estudiante, setEstudiante] = React.useState(null);
  const [estudiantesFiltrados, setEstudiantesFiltrados] =
    React.useState(estudiantes);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filtro, setFiltro] = React.useState("");

  const selectRow = (estudiante) => {
    onOpen();
    setEstudiante(estudiante);
  };

  const reset = () => {
    setEstudiante(null);
  };

  const handleInputChange = (e) => {
    setFiltro(e.target.value);
  };

  const mostrarTablaEstudiantes = () => {
    return estudiantesFiltrados?.map((estudiante) => (
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
    ));
  };

  return (
    <section>
      <div className="estudiantes-title">
        <h1>Estudiantes</h1>
      </div>
      <HStack>
        <Text w="150px">Filtros</Text>
        <Select>
          <option value="promedio">Promedio</option>
          <option value="carrera">Carrera</option>
        </Select>
        <Input value={filtro} onChange={handleInputChange}></Input>
      </HStack>
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
          <Tbody>{mostrarTablaEstudiantes()}</Tbody>
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
