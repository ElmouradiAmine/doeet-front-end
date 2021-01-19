import React from 'react';
import * as Chakra from '@chakra-ui/react';

const SignupForm = () => (
  <>
    <Chakra.Text color="gray.500" fontSize="xs" fontWeight="medium">
      En continuant vous acceptez
      <Chakra.Link href="/" color="primary.500" margin={1}>les conditions d&apos;utilisation</Chakra.Link>
      et la
      <Chakra.Link href="/" color="primary.500" margin={1}>
        politique de
        confidentialité
      </Chakra.Link>
      de Doeet.
    </Chakra.Text>
    <Chakra.Divider />
    <Chakra.Center fontWeight="medium" fontSize="xs" alignSelf="center">
      <Chakra.Text marginRight={1}>Déja inscrit ?</Chakra.Text>
      <Chakra.Link href="/login" color="primary.500">
        Se connecter
      </Chakra.Link>
    </Chakra.Center>
  </>
);

export default SignupForm;
