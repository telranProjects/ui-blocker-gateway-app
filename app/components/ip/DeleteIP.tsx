'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { IP } from '../../interfaces/IP';
import IPsOutputTable from './IPsOutputTable';

interface Props {
    auth64: string,
    onError: (error: string) => void,
    id: string
}

const DeleteIP: React.FC<Props> = ({ auth64, onError, id }: Props) => {
    const [IPs, setIPs] = useState<IP[]>([]);

    const requestMethod = "DELETE";
    const uri = `bo/ip/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: IP[] = await FetchServerData({ auth64, requestMethod, uri });
                setIPs(data);
            } catch (error: any) {
                console.error('Error fetching IPs:', error);
                onError(error.message);
            }
        }

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return IPs.length > 0 ? <IPsOutputTable IPs={IPs} /> : null;
}

export default DeleteIP;