import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';
import TodoForm from '../TodoForm/TodoForm';

const AddTodoModal = ({ isOpen, onClose, onSubmit }) => (
  <Chakra.Modal isOpen={isOpen} onClose={onClose} size="xl">
    <Chakra.ModalOverlay />
    <Chakra.ModalContent>
      <Chakra.ModalHeader>Ajouter une tâche</Chakra.ModalHeader>
      <Chakra.ModalCloseButton />
      <Chakra.ModalBody>
        <TodoForm onSubmit={onSubmit} onFormClose={onClose} />
      </Chakra.ModalBody>

    </Chakra.ModalContent>
  </Chakra.Modal>
);

AddTodoModal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default AddTodoModal;
