'use server';

interface Props {
    auth64: string;
    requestMethod: string;
    uri: string;
    entity?: string;
}

let response: Response;

export async function FetchServerData ({auth64, requestMethod, uri, entity}: Props): Promise<any>  {
        
        try {
            const myHeaders: HeadersInit = new Headers();
            myHeaders.append("Authorization", `Basic ${auth64}`);            

            const requestOptions: RequestInit = {
                method: requestMethod,
                headers: myHeaders,
                redirect: "follow",
                cache: 'no-store'                
            };
            
            if(entity) {
                myHeaders.append("Content-Type", "application/json");
                requestOptions.body = entity;
            }

            response = await fetch(`http://localhost:8080/${uri}`, requestOptions);

            console.log(response);

            if (response.status === 401) {
                throw new Error('Unauthorized'); // Throw an error if response status is 401
            };

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const jsonData = await response.json();
            return jsonData;


        } catch (error) {
            console.error('Error fetching services:', error);
            throw error;
           
        }        
    };  

