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
  Select,
} from "@chakra-ui/react";
import CandidatoModal from "./CandidatoModal";
export default function TablaCandidatos({ candidatos }) {
  const [candidato, setCandidato] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filtro, setFiltro] = React.useState("");

  const selectRow = (candidato) => {
    onOpen();
    setCandidato(candidato);
  };

  const reset = () => {
    setCandidato(null);
  };

  const mostrarCandidatos = () => {
    {
      return candidatos?.map((candidato) => (
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
      <div className="candidato-title">
        <h1>Candidatos</h1>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Td>Nombre</Td>
              <Td>Apellido</Td>
              <Td>Carrera</Td>
              <Td>Estado</Td>
            </Tr>
          </Thead>
          <Tbody>{mostrarCandidatos()}</Tbody>
        </Table>
      </TableContainer>
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
