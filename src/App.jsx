import React from 'react';
import { Box } from '@chakra-ui/react';
import Input from './ui/Input/Input';
import Button from './ui/Button/Button';

function App() {
  return (
    <Box>
      <Input type="email" label="E-mail" isRequired />
      <Button label="Connexion" />
    </Box>
  );
}

export default App;
