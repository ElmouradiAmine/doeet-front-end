import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LoginForm from './features/auth/components/LoginForm/LoginForm';
import SignupForm from './features/auth/components/SignupForm/SignupForm';
import Header from './ui/Header/Header';
import TodosDashboard from './features/todos/components/TodosDashboard/TodosDashboard';

function App() {
  const [search, setSearch] = useState('');
  const handleSearchChange = (value) => setSearch(value);
  return (
    <Router>
      <Box
        h="100vh"
        backgroundImage="url('/images/background-pattern.png')"
        backgroundColor="rgba(255, 255, 255, 0.75)"
        backgroundBlendMode="overlay"
        display="flex"
        flexDirection="column"
      >
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/app">
            <Header onSearch={handleSearchChange} search={search} />
            <TodosDashboard search={search} />
          </Route>
          <Redirect to="/app" />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
