import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';
import TodoForm from '../TodoForm/TodoForm';

const ToggleableTodoForm = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormClose = () => {
    setIsOpen(false);
  };
  const handleFormOpen = () => {
    setIsOpen(true);
  };
  if (isOpen) {
    return <TodoForm onFormClose={handleFormClose} onSubmit={onSubmit} />;
  }

  return (
    <Chakra.Button
      alignSelf="flex-start"
      colorScheme="primary"
      color="white"
      fontSize="sm"
      onClick={handleFormOpen}
    >
      Ajouter une tâche
    </Chakra.Button>
  );
};

ToggleableTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ToggleableTodoForm;
