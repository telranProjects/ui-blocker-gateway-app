'use client';
import React from 'react';
import Link from "next/link";
import GetAllIPs from '../components/ip/GetAllIPs';
import AddIP from '../components/ip/AddIP';
import DeleteIP from '../components/ip/DeleteIP';
import LoginPassword from '../components/LoginPassword';
import useJointPage from '../hooks/useJointPage'; // Custom hook for state management
import { ErrorMessage } from '../components/errorHandler';
import InputAreaIP from '../components/ip/InputAreaIP';
import InputString from '../components/InputString';

const IPsPage = () => {
  const {
    addEntity,
    showEntities,
    deleteEntity,
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
  } = useJointPage(); // Using the custom hook
  
  return (
    <main>
      <div className="p-5 text-yellow-500">IPs Page</div>

      <div className='p-5 w-1/4'>
        <LoginPassword
          onLoginChange={handleLoginChange}
          onPasswordChange={handlePasswordChange}
        />
      </div>

      {error && <ErrorMessage message={error} />}

{/* add Entity part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-success w-1/4' onClick={handleAddEntity}>
          Add IP
        </button>
<InputAreaIP onInputAreaChange={handleInputAreaChange}/>        

        {addEntity && <AddIP auth64={auth64} onError={handleError} entity={inputArea}/>}
      </div>

{/* get all Entities part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-primary w-1/4' onClick={handleShowEntities}>
          Get All IPs
        </button>
        {showEntities && <GetAllIPs auth64={auth64} onError={handleError}/>}
      </div>

{/* delete Entity part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-secondary w-1/4' onClick={handleDeleteEntity}>
          Delete IP
        </button>
    <InputString onInputStringChange={handleInputStringChange}/>

        {deleteEntity && <DeleteIP auth64={auth64} onError={handleError} id={inputString}/>}
      </div>

      <div className="p-5 text-yellow-300">
        <Link className="hover:text-yellow-500 hover:p-3" href="./">Back to main menu</Link>
      </div>
    </main>
  );
}

export default IPsPage;
