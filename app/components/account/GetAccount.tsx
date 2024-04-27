'use client';
import React, { useState, useEffect } from 'react';
import FetchServerData from '../FetchServerData';
import { Account } from '../../interfaces/Account';
import AccountsOutputTable from './AccountsOutputTable';

interface Props {
    auth64: string,
    onError: (error: string) => void,
    id: string
}

const GetAccount: React.FC<Props> = ({ auth64, onError, id }: Props) => {
    const [accounts, setAccounts] = useState<Account[]>([]);

    const requestMethod = "GET";
    const uri = `account/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Account[] = await FetchServerData({ auth64, requestMethod, uri });
                setAccounts(data);
            } catch (error: any) {
                console.error('Error fetching accounts:', error);
                onError(error.message);
            }
        }

        fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once

    return accounts.length > 0 ? <AccountsOutputTable accounts={accounts} /> : null;
}

export default GetAccount;