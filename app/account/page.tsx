'use client';
import React from 'react';
import Link from "next/link";
import GetAccount from '../components/account/GetAccount';
import LoginPassword from '../components/LoginPassword';
import useAccountPage from '../hooks/useAccountPage'; // Custom hook for state management
import { ErrorMessage } from '../components/errorHandler';
import InputString from '../components/InputString';

const AccountsPage = () => {
  const {
    getEntity,
    auth64,
    error,
    inputString,
    handleLoginChange,
    handlePasswordChange,
    handleGetEntity,
    handleError,
    handleInputStringChange
  } = useAccountPage(); // Using the custom hook
  
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

{/* get Entity part */}
      <div className="mockup-window border border-base-300">
        <button className='btn btn-secondary w-1/4' onClick={handleGetEntity}>
          Get Account
        </button>
    <InputString onInputStringChange={handleInputStringChange}/>

        {getEntity && <GetAccount auth64={auth64} onError={handleError} id={inputString}/>}
      </div>

      <div className="p-5 text-yellow-300">
        <Link className="hover:text-yellow-500 hover:p-3" href="./">Back to main menu</Link>
      </div>
    </main>
  );
}

export default AccountsPage;
