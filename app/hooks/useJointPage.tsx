
import { useState } from 'react';
import Credentials64 from '../components/Credentials64';

const useJointPage = () => {
  const [addEntity, setAddEntity] = useState(false);
  const [showEntities, setShowEntities] = useState(false);
  const [deleteEntity, setDeleteEntity] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth64, setAuth64] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [inputArea, setInputArea] = useState('');
  const [inputString, setInputString] = useState('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleInputAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputArea(event.target.value);
  }

  const handleInputStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  const handleError = (errorMessage: string | null) => {
    setError(errorMessage);
  };

  const handleAddEntity = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);
    setAddEntity(prev => !prev);
    setError(null); // Clear any previous errors
  };
  
  const handleShowEntities = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);    
    setShowEntities(prev => !prev);
    setError(null); // Clear any previous errors
  };
  
  const handleDeleteEntity = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);
    setDeleteEntity(prev => !prev);
    setError(null); // Clear any previous errors
  };  

  return {
    addEntity,
    showEntities,
    deleteEntity,
    login,
    password,
    auth64,
    error,
    inputArea,
    inputString,
    handleLoginChange,
    handlePasswordChange,
    handleAddEntity,
    handleShowEntities,
    handleDeleteEntity,
    handleError,
    handleInputAreaChange,
    handleInputStringChange
  };
};

export default useJointPage;
