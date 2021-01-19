import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';

import SortableTodo from '../SortableTodo/SortableTodo';

const SortableTodosList = SortableContainer(
  ({
    todos, onDeleteTodo, onUpdateTodo, setEditModeOpen, editModeOpen,
  }) => (
    <Chakra.VStack spacing={4} align="stretch">
      {todos.map((todo, index) => (
        <SortableTodo
          key={`item-${todo.id}`}
          index={index}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
          setEditModeOpen={setEditModeOpen}
          editModeOpen={editModeOpen}
        />
      ))}
    </Chakra.VStack>
  ),
);
SortableTodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      duration: PropTypes.string,
      isFinished: PropTypes.bool,
    }),
  ).isRequired,
  editModeOpen: PropTypes.bool.isRequired,
};

export default SortableTodosList;
