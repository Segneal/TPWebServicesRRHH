import React from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { updateCandidato } from "../../api/api";
export default function CandidatoModal(props) {
  const { candidato, isOpen, onOpen, onClose, reset } = props;
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const [estadoCandidato, setEstadoCandidato] = React.useState();

  const modificarCandidato = async () => {
    onClose();
    onCloseConfirmModal();
    updateCandidato(candidato.idUsuario, estadoCandidato);
    reset();
  };

  React.useEffect(() => {
    if (candidato) {
      setEstadoCandidato(candidato.estado);
    }
  }, [candidato]);

  const handleSelectChange = (e) => {
    setEstadoCandidato(e.target.value);
  };

  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Candidato</ModalHeader>
          <ModalCloseButton />
          <ModalBody h="500px">
            <Box p="2rem">
              <Text>
                Nombre y Apellido {candidato?.usuario.nombre.toUpperCase()}{" "}
                {candidato?.usuario.apellido.toUpperCase()}
              </Text>
              <Text>Carrera: {candidato?.usuario.carrera.toUpperCase()}</Text>

              <Text>Estado</Text>
              <Select
                onChange={handleSelectChange}
                value={estadoCandidato}
                placeholder={estadoCandidato}
              >
                <option value="Contactado">Contactado</option>
                <option value="En Proceso">En Proceso</option>
                <option value="Rechazado">Rechazado</option>
                <option value="Contratado">Contratado</option>
              </Select>

              <Button onClick={() => onOpenConfirmModal()}>modificar</Button>
              <Modal isOpen={isOpenConfirmModal} onClose={onCloseConfirmModal}>
                <ModalContent pt="5rem">
                  <ModalHeader>Confirmar modificacion</ModalHeader>
                  <ModalBody>
                    <Text>
                      ¿Está seguro que desea modificar este candidato?
                    </Text>
                  </ModalBody>
                  <ModalFooter>
                    <Flex>
                      <Button onClick={modificarCandidato}>Confirmar</Button>
                      <Button onClick={onCloseConfirmModal}>Cancelar</Button>
                    </Flex>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
