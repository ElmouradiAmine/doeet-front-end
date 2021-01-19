import React from 'react';
import * as Chakra from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = ({ placeholder, search, onSearch }) => (
  <Chakra.InputGroup>
    <Chakra.InputLeftElement pointerEvents="none">
      <SearchIcon color="gray.300" />
    </Chakra.InputLeftElement>
    <Chakra.Input
      variant="filled"
      autoComplete="false"
      type="text"
      placeholder={placeholder}
      shadow="sm"
      value={search}
      onChange={(e) => {
        onSearch(e.target.value);
      }}
    />
  </Chakra.InputGroup>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  placeholder: '',
};

export default SearchInput;
