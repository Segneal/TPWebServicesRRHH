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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { crearCandidato } from "../../api/api";

export default function EstudianteModal(props) {
  const { estudiante, isOpen, onOpen, onClose, reset } = props;
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const confirmarSeleccion = async () => {
    onClose();
    onCloseConfirmModal();
    crearCandidato(estudiante.id);
    reset();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="600px" w="600px">
          <ModalHeader>Estudiante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2rem">
              <Text>
                Nombre y Apellido {estudiante?.nombre.toUpperCase()}{" "}
                {estudiante?.apellido.toUpperCase()}
              </Text>
              <Text>Carrera: {estudiante?.carrera.toUpperCase()}</Text>
              <Text>
                Promedio:
                {estudiante?.promedio}
              </Text>
              <Text>
                Porcentaje de materias: {estudiante?.porcentajeDeCarrera}%
              </Text>
              <Button onClick={() => onOpenConfirmModal()}>Seleccionar</Button>
              <Modal isOpen={isOpenConfirmModal} onClose={onCloseConfirmModal}>
                <ModalContent>
                  <ModalHeader>Confirmar seleccion</ModalHeader>
                  <ModalBody>
                    <Text>
                      ¿Está seguro que desea seleccionar este estudiante?
                    </Text>
                  </ModalBody>
                  <ModalFooter>
                    <Flex>
                      <Button onClick={confirmarSeleccion}>Confirmar</Button>
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
