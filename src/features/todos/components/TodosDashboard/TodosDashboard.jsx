import React, { useState, useEffect } from 'react';
import * as Chakra from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import SortableTodosList from '../SortableTodosList/SortableTodosList';
import AddTodoModal from '../AddTodoModal/AddTodoModal';
import todoApi from '../../todoApi';

const TodosDashboard = ({ search }) => {
  const [todos, setTodos] = useState(
    [],
  );
  //   Model controller
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();
  const [editModeOpen, setIsEditModeOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      todoApi.getAllTodos().then((response) => {
        setTodos(response.data);
      });
    } else {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
    todoApi.addTodo(todo);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    todoApi.deleteTodo(todoId);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        todoApi.updateTodo({
          ...todo,
          ...updatedTodo,
        });
        return {
          ...todo,
          ...updatedTodo,
        };
      }
      return todo;
    }));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setTodos((prevTodos) => arrayMove(prevTodos, oldIndex, newIndex));
  };

  const filteredTodos = () => {
    if (search !== '') {
      return todos.filter((todo) => todo.title.includes(search));
    }
    return todos;
  };

  return (
    <Chakra.Center flex="1" padding={6}>
      <Chakra.VStack
        w="600px"
        h="100%"
        borderWidth="1px"
        padding={6}
        borderRadius="base"
        shadow="md"
        spacing={4}
        align="stretch"
        bg="white"
      >
        <Chakra.HStack justifyContent="space-between">
          <Chakra.HStack>
            <Chakra.Heading size="lg">Tâches</Chakra.Heading>
            <Chakra.Text fontSize="xs" alignSelf="flex-end" color="gray.400" visibility={todos?.length > 0 ? 'visible' : 'hidden'}>
              {todos.filter((todo) => todo.isFinished)?.length}
              /
              {todos?.length}
            </Chakra.Text>
          </Chakra.HStack>
          <Chakra.IconButton colorScheme="primary" aria-label="add todo" icon={<AddIcon />} onClick={onOpen} />
          <AddTodoModal isOpen={isOpen} onClose={onClose} onSubmit={handleAddTodo} />
        </Chakra.HStack>
        <Chakra.Divider />
        {/* <ToggleableTodoForm onSubmit={handleAddTodo} /> */}

        <SortableTodosList
          todos={filteredTodos()}
          onSortEnd={onSortEnd}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
          shouldCancelStart={() => editModeOpen}
          setEditModeOpen={setIsEditModeOpen}
          editModeOpen={editModeOpen}
        />

      </Chakra.VStack>

    </Chakra.Center>
  );
};

TodosDashboard.propTypes = {
  search: PropTypes.string.isRequired,
};

export default TodosDashboard;
