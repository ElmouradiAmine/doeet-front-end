/* eslint-disable no-unused-vars */
import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import EditableTodo from '../EditableTodo/EditableTodo';

const SortableTodo = SortableElement(
  ({
    todo, onDeleteTodo, onUpdateTodo, index, setEditModeOpen, editModeOpen,
  }) => (
    <EditableTodo
      todo={todo}
      onDeleteTodo={onDeleteTodo}
      onUpdateTodo={onUpdateTodo}
      setEditModeOpen={setEditModeOpen}
      editModeOpen={editModeOpen}
    />
  ),
);

export default SortableTodo;
