'use client';
import React, { useState } from 'react';
import Link from "next/link";
import GetAllServices from '../components/GetAllServices';

const ServicesPage = () => {
  const [showServices, setShowServices] = useState(false);

  return (
    <main>
    <div className="p-5 text-yellow-500">Services Page</div>
    <div>
      <button className='btn btn-primary' onClick={() => setShowServices(true)}>Get All Services</button>
    </div>
    {showServices && <GetAllServices />}

    <Link className="hover:text-yellow-300 hover:p-3" href="./">Back to main menu</Link>    
    </main>
  )
}

export default ServicesPage