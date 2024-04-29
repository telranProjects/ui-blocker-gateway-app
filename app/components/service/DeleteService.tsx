'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { Service } from '../../interfaces/Service';
import ServicesOutputTable from './ServicesOutputTable';

interface Props {
    auth64: string,
    onError: (error: string) => void,
    id: string
}

const DeleteService: React.FC<Props> = ({ auth64, onError, id }: Props) => {
    const [service, setService] = useState<Service>();

    const requestMethod = "DELETE";
    const uri = `bo/service/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Service = await FetchServerData({ auth64, requestMethod, uri });
                setService(data);
            } catch (error: unknown) {
                console.error('Error fetching services:', error);
                onError('An error occurred');
            }
        }

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return service ? <ServicesOutputTable services={[service]} /> : null;
}

export default DeleteService;