'use server';

import { ErrorMessage } from "./errorHandler";

interface Props {
    auth64: string;
    requestMethod: string;
    uri: string
}

let response: Response;

const FetchServerData = async ({auth64, requestMethod, uri}: Props) => {
        
        try {
            const myHeaders: HeadersInit = new Headers();
            // myHeaders.append("Authorization", `Basic c0BzOnNzc3M=`);
            myHeaders.append("Authorization", `Basic ${auth64}`);

            const requestOptions: RequestInit = {
                method: requestMethod,
                headers: myHeaders,
                redirect: "follow",
                cache: 'no-store'
            };

            response = await fetch(`http://localhost:8080/${uri}`, requestOptions);

            if (response.status === 401) {
                throw new Error('Unauthorized'); // Throw an error if response status is 401
            };

            if (!response.ok) {
                throw new Error('Failed to fetch services');
            }

            const jsonData = await response.json();
            return jsonData;


        } catch (error) {
            console.error('Error fetching services:', error);
            throw error;
           
        }        
    };  


export default FetchServerData
