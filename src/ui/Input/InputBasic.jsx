import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InputBasic = ({
  type, label, value, onChange, isRequired,
}) => (
  <Chakra.FormControl id={type} isRequired={isRequired}>
    <Chakra.FormLabel fontWeight="bold">{label}</Chakra.FormLabel>

    <Chakra.Input
      type={type}
      value={value}
      onChange={onChange}
      autoComplete="false"
    />
  </Chakra.FormControl>
);

InputBasic.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

InputBasic.defaultProps = {
  isRequired: false,
};

export default InputBasic;
