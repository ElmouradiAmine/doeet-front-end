import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Button = ({
  label, onClick, isLoading, isDisabled,
}) => (
  <Chakra.Button
    onClick={onClick}
    isDisabled={isDisabled}
    colorScheme="primary"
    isLoading={isLoading}
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
};

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
};

export default Button;
