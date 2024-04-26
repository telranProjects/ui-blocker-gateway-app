'use client';
import React, { useState } from 'react';
import Link from "next/link";
import GetAllServices from '../components/service/GetAllServices';
import AddService from '../components/service/AddService';
import DeleteService from '../components/service/DeleteService';
import LoginPassword from '../components/LoginPassword';
import Credentials64 from '../components/Credentials64';

const ServicesPage = () => {
  const [addService, setAddServices] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [deleteService, setDeleteService] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth64, setAuth64] = useState('');

    // Event handlers to update login and password
    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLogin(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

  return (
    <main>
      <div className="p-5 text-yellow-500">Services Page</div>

      <div className='p-5 w-1/4'>
        <LoginPassword 
                  onLoginChange={handleLoginChange} 
                  onPasswordChange={handlePasswordChange}
        />
      </div>

      <div>
        <button className='btn btn-success' onClick={() => setAddServices(true)}>Add Service</button>
      </div>
      {addService && <AddService />}

      <div>
        <button className='btn btn-primary' onClick={() => {
          setAuth64(Credentials64({login, password})); 
          setShowServices(true);
          }}>Get All Services</button>
      </div>
      {showServices && <GetAllServices auth64={auth64} />}

      <div>
        <button className='btn btn-secondary' onClick={() => setDeleteService(true)}>Delete Service</button>
      </div>
      {deleteService && <DeleteService />}

      <Link className="hover:text-yellow-300 hover:p-3" href="./">Back to main menu</Link>
    </main>
  )
}

export default ServicesPage