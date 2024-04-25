'use server';

let response: Response;

const FetchServerData = async () => {
        
        try {
            const myHeaders: HeadersInit = new Headers();
            myHeaders.append("Authorization", "Basic c0BzOnNzc3M=");

            const requestOptions: RequestInit = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
                cache: 'no-store'
            };

            response = await fetch('http://localhost:8080/service/get_all', requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch services');
            }
        } catch (error) {
            console.error('Error fetching services:', error);
        }

        return await response.json();
    };  


export default FetchServerData