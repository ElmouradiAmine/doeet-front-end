import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import {
  CalendarIcon,
  TimeIcon,
  CheckIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import moment from 'moment';

const Todo = ({
  todo, onDeleteTodo, onUpdateTodo, onFormOpen,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  // Check if the todo is late
  const isAfter = moment(todo.date).isAfter(new Date());
  const handleCheckClick = () => {
    onUpdateTodo({
      id: todo.id,
      isFinished: !todo.isFinished,
    });
  };
  return (
    <Chakra.Box
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Chakra.Box display="flex" marginBottom="12px">
        <Chakra.Button
          width="24px"
          height="24px"
          borderRadius="full"
          borderWidth={todo.isFinished ? '0px' : '1px'}
          paddingLeft="0px"
          minW="24px"
          paddingRight="0px"
          bgColor={todo.isFinished ? 'primary.500' : 'white'}
          marginRight="12px"
          fontSize="16px"
          onClick={handleCheckClick}
        >
          {todo.isFinished && <CheckIcon color="white" />}
        </Chakra.Button>
        <Chakra.Box display="flex" flexDir="column">
          <Chakra.Text
            mb="6px"
            textDecoration={todo.isFinished ? 'line-through' : ''}
            color={todo.isFinished ? 'gray.400' : 'black'}
          >
            {todo.title}
          </Chakra.Text>
          <Chakra.Box display="flex" alignItems="center">
            <Chakra.Box display="flex" alignItems="center" marginRight="12px">
              <CalendarIcon color="primary.500" marginRight="6px" />
              <Chakra.Text color={isAfter ? 'gray.400' : 'red.500'} fontSize="12px" fontWeight="medium">{moment(todo.date).format('DD/MM/yyyy')}</Chakra.Text>
            </Chakra.Box>
            <Chakra.Box display="flex" alignItems="center">
              <TimeIcon color="primary.500" marginRight="6px" />
              <Chakra.Text color="gray.400" fontSize="12px" fontWeight="medium">
                {todo.duration}
              </Chakra.Text>
            </Chakra.Box>
          </Chakra.Box>
        </Chakra.Box>
        {isHovered && (
          <Chakra.HStack alignSelf="center" ml="auto" spacing={2}>
            <Chakra.IconButton
              aria-label="Search database"
              variant="outline"
              borderWidth="0px"
              icon={<EditIcon color="green.500" />}
              onClick={onFormOpen}
            />
            <Chakra.IconButton
              aria-label="Search database"
              variant="outline"
              borderWidth="0px"
              icon={<DeleteIcon color="red.500" />}
              onClick={() => {
                onDeleteTodo(todo.id);
              }}
            />
          </Chakra.HStack>
        )}
      </Chakra.Box>
      <Chakra.Divider />
    </Chakra.Box>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    duration: PropTypes.string,
    isFinished: PropTypes.bool,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onFormOpen: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default Todo;
