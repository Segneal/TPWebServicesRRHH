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
  VStack,
  HStack,
  Text,
  Select,
  Box,
} from "@chakra-ui/react";
import CandidatoModal from "./CandidatoModal";
import { useEffect } from "react";

export default function TablaCandidatos({ candidatos, fReset }) {
  const [candidato, setCandidato] = React.useState(null);
  const [candidatosFiltrados, setCandidatosFiltrados] =
    React.useState(candidatos);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filtroCarrera, setFiltroCarrera] = React.useState("");
  const [filtroEstado, setFiltroEstado] = React.useState("");

  const selectRow = (candidato) => {
    onOpen();
    setCandidato(candidato);
  };

  const reset = () => {
    fReset();
    setCandidato(null);
  };

  const handleFiltroChangeCarrera = (e) => {
    console.log(filtroCarrera);
    setFiltroCarrera(e.target.value);
  };

  const handleFiltroChangeEstado = (e) => {
    console.log(filtroEstado);
    setFiltroEstado(e.target.value);
  };

  //estudiantes contiene carrera
  const filtrarPorCarrera = (candidatosAFiltrar) => {
    if (filtroCarrera === "") {
      return candidatosAFiltrar;
    }
    //filter candidato that cointains carrera
    return candidatosAFiltrar.filter((candidato) => {
      return candidato.usuario.carrera
        .toLowerCase()
        .includes(filtroCarrera.toLowerCase());
    });
  };

  const filtrarPorEstado = (candidatosAFiltrar) => {
    if (filtroEstado === "") {
      return candidatosAFiltrar;
    }
    return candidatosAFiltrar?.filter((candidato) => {
      //contiene carrera
      return candidato.estado
        .toLowerCase()
        .includes(filtroEstado.toLowerCase());
    });
  };

  useEffect(() => {
    let filtrados = filtrarPorCarrera(candidatos);
    filtrados = filtrarPorEstado(filtrados);
    setCandidatosFiltrados(filtrados);
  }, [filtroCarrera, filtroEstado, candidatos]);

  //vista
  const mostrarCandidatos = () => {
    {
      return candidatosFiltrados?.map((candidato) => (
        <Tr
          key={candidato.id}
          className="table-row-selector"
          onClick={() => selectRow(candidato)}
        >
          <Td>{candidato.usuario.nombre.toUpperCase()} </Td>
          <Td>{candidato.usuario.apellido.toUpperCase()}</Td>
          <Td>{candidato.usuario.carrera}</Td>
          <Td>{candidato.estado}</Td>
        </Tr>
      ));
    }
  };

  return (
    <section>
      <VStack>
        <HStack gap="2rem" pt="1rem">
          <Text pt="1rem" pr="5rem">
            Buscar
          </Text>
          <Box>
            <Text w="150px">Carrera</Text>
            <Input
              name="filtroCarrera"
              value={filtroCarrera}
              onChange={handleFiltroChangeCarrera}
            />
          </Box>
          <Box>
            <Text w="150px">Estado</Text>
            <Select name="filtroEstado" onChange={handleFiltroChangeEstado}>
              <option value="sin contactar">Sin Contactar</option>
              <option value="contactado">Contactado</option>
              <option value="en proceso">En Proceso</option>
              <option value="rechazado">Rechazado</option>
              <option value="contratado">Contratado</option>
            </Select>
          </Box>
        </HStack>
      </VStack>
      <Box mt="3rem">
        <Table variant="striped">
          <Thead position="sticky" top={0} bgColor="gray.200">
            <Tr>
              <Td>Nombre</Td>
              <Td>Apellido</Td>
              <Td>Carrera</Td>
              <Td>Estado</Td>
            </Tr>
          </Thead>
          <Tbody>{mostrarCandidatos()}</Tbody>
        </Table>
      </Box>
      <CandidatoModal
        candidato={candidato}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        reset={reset}
      />
    </section>
  );
}
