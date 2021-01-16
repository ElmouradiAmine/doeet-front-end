import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Input = ({
  type, label, value, onChange, isRequired,
}) => (
  <Chakra.FormControl id={type} isRequired={isRequired}>
    <Chakra.FormLabel fontWeight="bold">{label}</Chakra.FormLabel>
    <Chakra.Input type={type} value={value} onChange={onChange} size="md" />
  </Chakra.FormControl>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  isRequired: false,
};

export default Input;
