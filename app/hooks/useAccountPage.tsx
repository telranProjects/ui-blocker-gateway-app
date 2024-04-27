
import { useState } from 'react';
import Credentials64 from '../components/Credentials64';

const useAccountPage = () => {
  const [getEntity, setGetEntity] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth64, setAuth64] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [inputString, setInputString] = useState('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleInputStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  const handleError = (errorMessage: string | null) => {
    setError(errorMessage);
  };

  
  const handleGetEntity = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);
    setGetEntity(prev => !prev);
    setError(null); // Clear any previous errors
  };  

  return {
    getEntity,
    login,
    password,
    auth64,
    error,
    inputString,
    handleLoginChange,
    handlePasswordChange,
    handleGetEntity,
    handleError,
    handleInputStringChange
  };
};

export default useAccountPage;
