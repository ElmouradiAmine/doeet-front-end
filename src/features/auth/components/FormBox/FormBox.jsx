import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Logo from '../../../../ui/Logo/Logo';

const FormBox = ({ children, label, onSubmit }) => (
  <Chakra.Center h="full">
    <Chakra.VStack
      w="452px"
      borderWidth="1px"
      padding={6}
      borderRadius="base"
      shadow="md"
      spacing={4}
      align="stretch"
      bg="white"
    >
      <Chakra.LinkBox href="/app" alignSelf="flex-start">
        <Logo alignSelf="flex-start" />
      </Chakra.LinkBox>
      <Chakra.Heading size="lg">{label}</Chakra.Heading>
      <Chakra.Divider />
      <form onSubmit={onSubmit}>
        <Chakra.VStack spacing={4} align="flex-start">
          {children}
        </Chakra.VStack>
      </form>
      <Chakra.Center>
        <Chakra.Text color="gray.500" fontSize="xs">
          Created with
          <Chakra.Box display="inline" margin={[0, 1]}>
            ❤️
          </Chakra.Box>
          by Amine Elmouradi
        </Chakra.Text>
      </Chakra.Center>
    </Chakra.VStack>
  </Chakra.Center>
);

FormBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

FormBox.defaultProps = {
  children: null,
  onSubmit: null,
};

export default FormBox;
