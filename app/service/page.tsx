'use client';
import React, { useState } from 'react';
import Link from "next/link";
import GetAllServices from '../components/GetAllServices';
import AddService from '../components/AddService';
import DeleteService from '../components/DeleteService';

const ServicesPage = () => {
  const [addService, setAddServices] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [deleteService, setDeleteService] = useState(false);

  return (
    <main>
    <div className="p-5 text-yellow-500">Services Page</div>

    <div>
      <button className='btn btn-success' onClick={() => setAddServices(true)}>Add Service</button>
    </div>
    {addService && <AddService />}
    
    <div>
      <button className='btn btn-primary' onClick={() => setShowServices(true)}>Get All Services</button>
    </div>
    {showServices && <GetAllServices />}
    
    <div>
      <button className='btn btn-secondary' onClick={() => setDeleteService(true)}>Delete Service</button>
    </div>
    {deleteService && <DeleteService />}

    <Link className="hover:text-yellow-300 hover:p-3" href="./">Back to main menu</Link>    
    </main>
  )
}

export default ServicesPage