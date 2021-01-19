import React from 'react';
import * as Chakra from '@chakra-ui/react';

const LoginFormFooter = () => (
  <>
    <Chakra.Link href="1" color="gray.500" fontSize="xs" fontWeight="medium">
      Mot de passe oublié?
    </Chakra.Link>
    <Chakra.Divider />
    <Chakra.Center fontWeight="medium" fontSize="xs" alignSelf="center">
      <Chakra.Text marginRight={1}>Vous n&apos;êtes pas inscrit ?</Chakra.Text>
      <Chakra.Link href="/signup" color="primary.500">
        Inscription
      </Chakra.Link>
    </Chakra.Center>
  </>
);

export default LoginFormFooter;
