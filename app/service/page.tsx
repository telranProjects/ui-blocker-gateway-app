'use client';
import React from 'react';
import Link from "next/link";
import GetAllServices from '../components/service/GetAllServices';
import AddService from '../components/service/AddService';
import DeleteService from '../components/service/DeleteService';
import LoginPassword from '../components/LoginPassword';
import Credentials64 from '../components/Credentials64';
import useServicePage from '../hooks/useServicePage'; // Custom hook for state management

const ServicesPage = () => {
  const {
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
  } = useServicePage(); // Using the custom hook

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
        <button className='btn btn-success' onClick={handleAddService}>Add Service</button>
      </div>
      {addService && <AddService />}

      <div>
        <button className='btn btn-primary' onClick={handleShowServices}>
          Get All Services
        </button>
      </div>
      {showServices && <GetAllServices auth64={auth64} />}

      <div>
        <button className='btn btn-secondary' onClick={handleDeleteService}>
          Delete Service
        </button>
      </div>
      {deleteService && <DeleteService />}

      <Link className="hover:text-yellow-300 hover:p-3" href="./">Back to main menu</Link>
    </main>
  );
}

export default ServicesPage;
