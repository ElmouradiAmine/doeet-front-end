import React from 'react';
import PropTypes from 'prop-types';

import InputBasic from './InputBasic';
import InputPassword from './InputPassword';

const Input = ({
  type, label, value, onChange, isRequired,
}) => {
  if (type === 'password') {
    return (
      <InputPassword
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        isRequired={isRequired}
      />
    );
  }

  return (
    <InputBasic
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      isRequired={isRequired}
    />
  );
};

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
