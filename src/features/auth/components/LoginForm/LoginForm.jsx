import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import Input from '../../../../ui/Input/Input';
import Button from '../../../../ui/Button/Button';
import FormBox from '../FormBox/FormBox';
import LoginFormFooter from './LoginFormFooter';
import auth from '../../auth';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(() => true);
    auth.signIn(email, password).then((response) => {
      localStorage.setItem('accessToken', response.data.accessToken);
      history.push('/app');
    }).catch((err) => {
      if (err && !err.response) setError('Erreur réseau, réessayez plus tard.');
      else if (err.response?.status === 401) {
        setError('Email ou mot de passe incorrect.');
      } else {
        setError('Erreur inconnue a eu lieu.');
      }
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <FormBox label="Connexion" onSubmit={handleSubmit}>
      <Input label="E-mail" type="email" isRequired onChange={handleEmailChange} value={email} />
      <Input label="Password" type="password" isRequired onChange={handlePasswordChange} value={password} />
      <Button label="Connexion" type="submit" isLoading={isLoading} />
      <Chakra.Text display={error ? 'block' : 'none'} color="red.500" fontSize="sm" fontWeight="bold" alignSelf="center">
        <WarningTwoIcon marginRight="6px" />
        {error}
      </Chakra.Text>
      <LoginFormFooter />
    </FormBox>
  );
};

export default LoginForm;
