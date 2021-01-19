import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import { CheckCircleIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid';
import moment from 'moment';

import DatePicker from '../../../../ui/DatePicker/DatePicker';

const TodoForm = ({ todo, onSubmit, onFormClose }) => {
  const [title, setTitle] = useState(todo?.title || '');
  const [date, setDate] = useState(todo ? moment(todo.date).toDate() : '');
  const [duration, setDuration] = useState(todo?.duration || '');
  const [error, setError] = useState({
    title: false,
    date: false,
    duration: false,
  });

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleDurationChange = ({ target }) => {
    setDuration(target.value);
  };

  const validate = () => {
    let isValid = true;
    setError(() => ({
      title: false,
      date: false,
      duration: false,
    }));
    if (title === '') {
      setError((prevError) => ({
        ...prevError,
        title: true,
      }));
      isValid = false;
    }
    if (!/[0-9]{1,}h[0-5]{1,2}[0-9]{1,2}$/g.test(duration)) {
      setError((prevError) => ({
        ...prevError,
        duration: true,
      }));
      isValid = false;
    }
    if (!moment(date, 'dd/MM/yyyy').isValid()) {
      setError((prevError) => ({
        ...prevError,
        date: true,
      }));
      isValid = false;
    }
    return isValid;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        id: todo?.id || uuidV4(),
        title,
        date,
        duration,
      });
      onFormClose();
    }
  };

  const ctaButtonText = todo ? 'Enregistrer' : 'Ajouter';
  return (
    <form onSubmit={handleOnSubmit}>
      <Chakra.VStack>
        <Chakra.VStack
          borderWidth="1px"
          padding={3}
          borderRadius="base"
          alignSelf="stretch"
        >
          <Chakra.InputGroup>
            <Chakra.InputLeftElement pointerEvents="none">
              <CheckCircleIcon color="gray.300" />
            </Chakra.InputLeftElement>
            <Chakra.Input
              isInvalid={error.title}
              type="text"
              placeholder="Décrire votre tâche"
              value={title}
              onChange={handleTitleChange}
              fontSize="sm"

            />
          </Chakra.InputGroup>
          <Chakra.HStack alignSelf="stretch">
            <Chakra.InputGroup fontSize="sm">
              <Chakra.InputLeftElement pointerEvents="none">
                <CalendarIcon color="gray.300" />
              </Chakra.InputLeftElement>
              <DatePicker
                id="published-date"
                selectedDate={date}
                onChange={handleDateChange}
                showPopperArrow
                isInvalid={error.date}

              />
            </Chakra.InputGroup>
            <Chakra.InputGroup>
              <Chakra.InputLeftElement pointerEvents="none">
                <TimeIcon color="gray.300" />
              </Chakra.InputLeftElement>
              <Chakra.Input
                isInvalid={error.duration}
                type="text"
                placeholder="Durée estimée (e.g. 1h30)"
                value={duration}
                fontSize="sm"
                onChange={handleDurationChange}
              />
            </Chakra.InputGroup>
          </Chakra.HStack>
        </Chakra.VStack>
        <Chakra.HStack alignSelf="flex-start">
          <Chakra.Button
            colorScheme={todo ? 'green' : 'primary'}
            color="white"
            fontSize="sm"
            fontWeight="bold"
            type="submit"
          >
            {ctaButtonText}
          </Chakra.Button>
          <Chakra.Button
            colorScheme="red"
            color="red.500"
            fontSize="sm"
            fontWeight="bold"
            variant="outline"
            borderWidth="0"
            onClick={onFormClose}
          >
            Annuler
          </Chakra.Button>
        </Chakra.HStack>
      </Chakra.VStack>
    </form>
  );
};

TodoForm.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    duration: PropTypes.string,
    isFinished: PropTypes.bool,
  }),
  onSubmit: PropTypes.func.isRequired,
  onFormClose: PropTypes.func,
};

TodoForm.defaultProps = {
  todo: null,
  onFormClose: null,
};
export default TodoForm;
