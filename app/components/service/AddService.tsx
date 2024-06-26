'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { Service } from '../../interfaces/Service';
import ServicesOutputTable from './ServicesOutputTable';

interface Props {
    auth64: string;
    onError: (error: string) => void;
    entity: string;
}

const AddService: React.FC<Props> = ({auth64, onError, entity}: Props) => {
    const [service, setService] = useState<Service>();

    const requestMethod = "POST";
    const uri = "bo/service";

    useEffect(() => {
        const fetchData = async () => {
            try{
            const data: Service = await FetchServerData({auth64, requestMethod, uri, entity});
            setService(data);
        } catch (error: any) {
            console.error('Error fetching services:', error);
            onError(error.message); 

        }
    }

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return service ? <ServicesOutputTable services={[service]} /> : null;
}

export default AddService;