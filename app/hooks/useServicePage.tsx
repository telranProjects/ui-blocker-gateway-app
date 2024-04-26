
import { useState } from 'react';
import Credentials64 from '../components/Credentials64';

const useServicePage = () => {
  const [addService, setAddServices] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [deleteService, setDeleteService] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth64, setAuth64] = useState('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAddService = () => {
    setAuth64(Credentials64({ login, password }));
    setAddServices(true);
  };

  const handleShowServices = () => {
    setAuth64(Credentials64({ login, password }));
    setShowServices(true);
  };

  const handleDeleteService = () => {
    setAuth64(Credentials64({ login, password }));
    setDeleteService(true);
  };

  return {
    addService,
    showServices,
    deleteService,
    login,
    password,
    auth64,
    handleLoginChange,
    handlePasswordChange,
    handleAddService,
    handleShowServices,
    handleDeleteService
  };
};

export default useServicePage;
