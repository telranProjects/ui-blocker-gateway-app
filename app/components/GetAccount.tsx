'use client';
import React from 'react'

export async function pull() {

    const myHeaders: HeadersInit = new Headers();
    myHeaders.append("Authorization", "Basic XXXX");

    const requestOptions: RequestInit = {
        method: "GET",
        headers: myHeaders
    };

    try {
        const response = await fetch("http://localhost:8080/account/s@s", requestOptions);
        const result = await response.text();
        console.log(result)
    } catch (error) {
        console.error(error);
    };

}

const GetAccount: React.FC = () => {
    return (
        <div><button className='btn btn-primary' onClick={() => pull()}>Get Account</button></div>
    )
}

export default GetAccount