'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { Service } from '../../interfaces/Service';
import ServicesOutputTable from './ServicesOutputTable';

const AddService: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: Service[] = await FetchServerData();
            setServices(data);
        } 

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return <ServicesOutputTable services={services} />;
}

export default AddService;