import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as Chakra from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import Input from '../../../../ui/Input/Input';
import Button from '../../../../ui/Button/Button';
import FormBox from '../FormBox/FormBox';
import SignUpFormFooter from './SignupFormFooter';
import auth from '../../auth';

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleFullNameChange = ({ target }) => {
    setFullName(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleConfirmPasswordChange = ({ target }) => {
    setConfirmPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(() => true);
    auth.signUp(email, fullName, password).then(() => {
      auth.signIn(email, password).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        history.push('/app');
      });
    }).catch((err) => {
      if (err && !err.response) setError('Erreur réseau, réessayez plus tard.');
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <FormBox label="Inscription" onSubmit={handleSubmit}>
      <Input label="E-mail" type="email" isRequired value={email} onChange={handleEmailChange} />
      <Input label="Full Name" type="text" isRequired value={fullName} onChange={handleFullNameChange} />
      <Input label="Password" type="password" isRequired value={password} onChange={handlePasswordChange} />
      <Input label="Confirm Password" type="password" isRequired value={confirmPassword} onChange={handleConfirmPasswordChange} />
      <Button label="S'inscrire" type="submit" isLoading={isLoading} />
      <Chakra.Text display={error ? 'block' : 'none'} color="red.500" fontSize="sm" fontWeight="bold" alignSelf="center">
        <WarningTwoIcon marginRight="6px" />
        {error}
      </Chakra.Text>
      <SignUpFormFooter />
    </FormBox>
  );
};

export default SignupForm;
