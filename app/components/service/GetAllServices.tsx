'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { Service } from '../../interfaces/Service';
import ServicesOutputTable from './ServicesOutputTable';

interface Props {
    auth64: string;
}

const GetAllServices: React.FC<Props> = ({auth64}: Props) => {
    const [services, setServices] = useState<Service[]>([]);

    const requestMethod = "GET";
    const uri = "service/get_all";

    useEffect(() => {
        const fetchData = async () => {
            const data: Service[] = await FetchServerData({auth64, requestMethod, uri});
            setServices(data);
        } 

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return <ServicesOutputTable services={services} />;
}

export default GetAllServices;