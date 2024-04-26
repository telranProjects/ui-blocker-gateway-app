'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { Service } from '../../interfaces/Service';
import ServicesOutputTable from './ServicesOutputTable';

interface Props {
    auth64: string;
    onError: (error: string) => void;
}

const GetAllServices: React.FC<Props> = ({auth64, onError}: Props) => {
    const [services, setServices] = useState<Service[]>([]);

    const requestMethod = "GET";
    const uri = "service/get_all";

    useEffect(() => {
        const fetchData = async () => {
        try{
            const data: Service[] = await FetchServerData({auth64, requestMethod, uri});
            setServices(data);
   
        } catch (error: any) {
            console.error('Error fetching services:', error);
            onError(error.message); 
        }
        } 

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return  services ? <ServicesOutputTable services={services} /> : null;
}

export default GetAllServices;