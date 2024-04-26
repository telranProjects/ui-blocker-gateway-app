
import { useState } from 'react';
import Credentials64 from '../components/Credentials64';

const useServicePage = () => {
  const [addService, setAddServices] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [deleteService, setDeleteService] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth64, setAuth64] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [inputTextArea, setInputTextArea] = useState('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleInputTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextArea(event.target.value);
  }

  const handleError = (errorMessage: string | null) => {
    setError(errorMessage);
  };

  const handleAddService = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);
    setAddServices(prev => !prev);
    setError(null); // Clear any previous errors
  };
  
  const handleShowServices = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);    
    setShowServices(prev => !prev);
    setError(null); // Clear any previous errors
  };
  
  const handleDeleteService = () => {
    const credentials64 = Credentials64({ login, password });
    setAuth64(credentials64);
    setDeleteService(true);
    setError(null); // Clear any previous errors
  };  

  return {
    addService,
    showServices,
    deleteService,
    login,
    password,
    auth64,
    error,
    inputTextArea,
    handleLoginChange,
    handlePasswordChange,
    handleAddService,
    handleShowServices,
    handleDeleteService,
    handleError,
    handleInputTextChange
  };
};

export default useServicePage;
