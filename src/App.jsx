import React from 'react';
import { Box } from '@chakra-ui/react';
import Input from './ui/Input/Input';

function App() {
  return (
    <Box>
      <Input type="email" label="E-mail" isRequired />
    </Box>
  );
}

export default App;
