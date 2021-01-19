import axios from 'axios';

const getAllTodos = () => {
  const token = localStorage.getItem('accessToken');

  return axios.get(`${process.env.REACT_APP_API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const addTodo = (todo) => {
  const token = localStorage.getItem('accessToken');
  return axios.post(`${process.env.REACT_APP_API_URL}/todos`, {
    id: todo.id,
    title: todo.title,
    date: todo.date,
    duration: todo.duration,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteTodo = (todoId) => {
  const token = localStorage.getItem('accessToken');
  return axios.delete(`${process.env.REACT_APP_API_URL}/todos/${todoId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};

const updateTodo = (updatedTodo) => {
  const token = localStorage.getItem('accessToken');
  return axios.patch(`${process.env.REACT_APP_API_URL}/todos/${updatedTodo.id}`, {
    ...updatedTodo,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => console.log(response));
};

export default {
  getAllTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
