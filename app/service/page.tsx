'use client';
import React from 'react';
import Link from "next/link";
import GetAllServices from '../components/service/GetAllServices';
import AddService from '../components/service/AddService';
import DeleteService from '../components/service/DeleteService';
import LoginPassword from '../components/LoginPassword';
import useServicePage from '../hooks/useServicePage'; // Custom hook for state management
import { ErrorMessage } from '../components/errorHandler';
import InputTextArea from '../components/service/InputTextArea';

const ServicesPage = () => {
  const {
    addService,
    showServices,
    deleteService,
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

      {error && <ErrorMessage message={error} />}

{/* add service part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-success w-1/4' onClick={handleAddService}>
          Add Service
        </button>
<InputTextArea onInputTextChange={handleInputTextChange}/>
        

        {addService && <AddService 
        
        auth64={auth64} onError={handleError} entity={inputTextArea}/>}
      </div>

{/* get all services part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-primary w-1/4' onClick={handleShowServices}>
          Get All Services
        </button>
        {showServices && <GetAllServices auth64={auth64} onError={handleError}/>}
      </div>

{/* delete service part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-secondary w-1/4' onClick={handleDeleteService}>
          Delete Service
        </button>
        <input type="text" placeholder="Type service name to delete" className="input input-bordered w-1/4" />

        {deleteService && <DeleteService auth64={auth64} onError={handleError}/>}
      </div>

      <div className="p-5 text-yellow-300">
        <Link className="hover:text-yellow-500 hover:p-3" href="./">Back to main menu</Link>
      </div>
    </main>
  );
}

export default ServicesPage;
