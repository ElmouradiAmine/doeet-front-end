import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';

import LogoImage from '../../assets/logo.svg';

const Logo = ({ alignSelf }) => (
  <Chakra.Image src={LogoImage} alt="doeet logo check circle" alignSelf={alignSelf} />
);
Logo.propTypes = {
  alignSelf: PropTypes.string,
};

Logo.defaultProps = {
  alignSelf: '',
};
export default Logo;
