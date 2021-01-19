import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Button = ({
  label, onClick, isLoading, isDisabled, type,
}) => (
  <Chakra.Button
    onClick={onClick}
    isDisabled={isDisabled}
    colorScheme="primary"
    isLoading={isLoading}
    type={type}
    w="100%"
  >
    {label}
  </Chakra.Button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  type: '',
};

export default Button;
