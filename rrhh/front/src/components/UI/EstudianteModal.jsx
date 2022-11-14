import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
        <ModalContent h="350px" w="600px" color="gray.600" gap="1rem">
          <ModalHeader>Estudiante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p="2rem" gap="2rem">
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
              <Button mt="2rem" onClick={() => onOpenConfirmModal()}>
                Seleccionar
              </Button>
              <Modal isOpen={isOpenConfirmModal} onClose={onCloseConfirmModal}>
                <ModalContent mt="10rem" h="200px" bgColor="gray.100" w="350px">
                  <ModalHeader>Confirmar seleccion</ModalHeader>
                  <ModalBody>
                    <Text>
                      ¿Está seguro que desea seleccionar este estudiante?
                    </Text>
                  </ModalBody>
                  <Flex gap="2rem" mb="1rem">
                    <Button
                      bgColor="gray.200"
                      ml="auto"
                      onClick={confirmarSeleccion}
                    >
                      Confirmar
                    </Button>
                    <Button
                      bgColor="gray.200"
                      mr="auto"
                      onClick={onCloseConfirmModal}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                </ModalContent>
              </Modal>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
