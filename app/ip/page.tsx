import React from 'react';
import Link from "next/link";
import GetAllIp from '../components/GetAllIps';

const IPsPage = () => {
  return (
    <>
    <div className="p-5 text-yellow-500">IPs Page</div>
    <GetAllIp />
    <Link className="hover:text-yellow-300 hover:p-3" href="./">Back to main menu</Link>
    
    </>
  )
}

export default IPsPage