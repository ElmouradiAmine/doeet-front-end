import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const InputPassword = ({
  type, label, value, onChange, isRequired,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Chakra.FormControl id={type} isRequired={isRequired}>
      <Chakra.FormLabel fontWeight="bold">{label}</Chakra.FormLabel>
      <Chakra.InputGroup>
        <Chakra.Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          autoComplete="false"
        />
        <Chakra.InputRightElement>
          <Chakra.IconButton
            size="xs"
            aria-label="toggle visibility password"
            icon={!show ? <ViewIcon /> : <ViewOffIcon />}
            onClick={handleClick}
          />
        </Chakra.InputRightElement>
      </Chakra.InputGroup>
    </Chakra.FormControl>
  );
};

InputPassword.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

InputPassword.defaultProps = {
  isRequired: false,
};

export default InputPassword;
