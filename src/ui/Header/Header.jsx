import React, { useState } from 'react';
import * as Chakra from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import jwtDecode from 'jwt-decode';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';

const Header = ({ children, onSearch, search }) => {
  const [isLargerThan600] = Chakra.useMediaQuery('(min-width: 600px)');
  const jwtToken = localStorage.getItem('accessToken');
  const [connected, setConnected] = useState(jwtToken?.length > 0);

  const handleDisconnection = () => {
    setConnected(false);
    localStorage.removeItem('accessToken');
  };
  return (
    <Chakra.HStack
      bg="white"
      h={16}
      shadow="sm"
      display="flex"
      alignItems="center"
      paddingLeft={isLargerThan600 ? '10%' : '5%'}
      paddingRight={isLargerThan600 ? '10%' : '5%'}
      borderTopColor="primary.500"
      borderTopWidth={6}
      justifyContent="space-between"
    >
      <Chakra.LinkBox href="/app">
        <Logo />
      </Chakra.LinkBox>
      <Chakra.HStack>
        <SearchInput
          placeholder="Rechercher"
          onSearch={onSearch}
          search={search}
        />
      </Chakra.HStack>
      <Chakra.HStack>
        {connected ? (
          <>
            <Chakra.Avatar bgColor="primary.500" size="sm" />
            <Chakra.Text fontSize="sm" fontWeight="medium" color="gray.400">
              {jwtDecode(jwtToken)?.fullName}
            </Chakra.Text>
            <Chakra.IconButton size="sm" colorScheme="red" icon={<ExternalLinkIcon />} onClick={handleDisconnection} />
          </>
        ) : (
          <>
            <Chakra.Button size="sm" colorScheme="primary">
              <Chakra.Link href="/login">Connexion</Chakra.Link>
            </Chakra.Button>
            <Chakra.Button size="sm" variant="filled" color="primary.500">
              <Chakra.Link href="/signup">S&apos;inscrire</Chakra.Link>
            </Chakra.Button>
          </>
        )}
      </Chakra.HStack>
      {children}
    </Chakra.HStack>
  );
};

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

Header.defaultProps = {
  children: null,
};

export default Header;
