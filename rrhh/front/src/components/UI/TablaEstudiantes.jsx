import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  useDisclosure,
  Input,
  Text,
  HStack,
  VStack,
  Box,
} from "@chakra-ui/react";
import EstudianteModal from "./EstudianteModal";

export default function TablaEstudiantes({ estudiantes }) {
  const [estudiante, setEstudiante] = React.useState(null);
  const [estudiantesFiltrados, setEstudiantesFiltrados] =
    React.useState(estudiantes);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filtro, setFiltro] = React.useState("");
  const [filtroPromedio, setFiltroPromedio] = React.useState(0);

  const selectRow = (estudiante) => {
    onOpen();
    setEstudiante(estudiante);
  };

  const reset = () => {
    setEstudiante(null);
  };

  const handleFiltroChange = (e) => {
    console.log(filtro);
    setFiltro(e.target.value);
  };

  const handleFiltroPromedioChange = (e) => {
    setFiltroPromedio(e.target.value);
  };

  //estudiantes contiene carrera
  const filtrarPorCarrera = (estudiantesAFiltrar) => {
    if (filtro === "") {
      return estudiantesAFiltrar;
    }
    return estudiantesAFiltrar.filter((estudiante) => {
      //contiene carrera
      return estudiante.carrera.toLowerCase().includes(filtro.toLowerCase());
    });
  };

  const filtrarPorPromedio = (estudiantesAFiltrar) => {
    console.log(estudiantesAFiltrar);
    if (filtroPromedio === 0) {
      return estudiantesAFiltrar;
    }
    return estudiantesAFiltrar.filter((estudnt) => {
      return estudnt.promedio >= filtroPromedio;
    });
  };

  React.useEffect(() => {
    let filtrados = filtrarPorCarrera(estudiantes);
    filtrados = filtrarPorPromedio(filtrados);
    setEstudiantesFiltrados(filtrados);
  }, [filtro, filtroPromedio, estudiantes]);

  ///VISTA
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
    <section className="tabla-body">
      <VStack>
        <HStack gap="2rem">
          <Text pt="1rem" w="150px">
            Buscar
          </Text>
          <Box>
            <Text w="150px">Carrera</Text>
            <Input name="filtro" value={filtro} onChange={handleFiltroChange} />
          </Box>
          <Box>
            <Text w="150px">Promedio</Text>
            <Input
              name="filtroPromedio"
              type="number"
              value={filtroPromedio}
              onKeyDown={(evt) =>
                //prevent float values
                (evt.key === "." || evt.key === ",") && evt.preventDefault()
              }
              onChange={handleFiltroPromedioChange}
            />
          </Box>
        </HStack>
      </VStack>
      <Box overflowY="auto" maxHeight="500px">
        <Table variant="striped" mt="2rem">
          <Thead position="sticky" top={0} bgColor="gray.300">
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
      </Box>
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
