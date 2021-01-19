import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';

const EditableTodo = ({
  todo, onDeleteTodo, onUpdateTodo, setEditModeOpen, editModeOpen,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleFormClose = () => {
    if (editModeOpen) {
      setIsEditOpen(false);
      setEditModeOpen(false);
    }
  };

  const handleFormOpen = () => {
    if (!editModeOpen) {
      setIsEditOpen(true);
      setEditModeOpen(true);
    }
  };

  return (
    <div>
      {isEditOpen ? (
        <TodoForm
          onSubmit={onUpdateTodo}
          onFormClose={handleFormClose}
          todo={todo}
        />

      ) : (
        <Todo
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onFormOpen={handleFormOpen}
          onUpdateTodo={onUpdateTodo}
        />
      )}
    </div>
  );
};

EditableTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    duration: PropTypes.string,
    isFinished: PropTypes.bool,
  }).isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  setEditModeOpen: PropTypes.func.isRequired,
  editModeOpen: PropTypes.bool.isRequired,
};

export default EditableTodo;
