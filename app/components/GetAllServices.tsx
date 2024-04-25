import React from 'react'
import Link from "next/link";

interface Service {
    webService: string;
    emails: string[];
}

const GetAllServices = async () => {
    const myHeaders: HeadersInit = new Headers();
    myHeaders.append("Authorization", "Basic c0BzOnNzc3M=");
 
    const requestOptions: RequestInit = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        cache: 'no-store'
    };

    const response = await fetch('http://localhost:8080/service/get_all', requestOptions);
    const result: Service[] = await response.json();
    console.log(result);


    return (
        <>
        <h1>Services-Emails</h1>
        <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Service</th>
            <th>Emails</th>
          </tr>
        </thead>
        <tbody>
          {result.map(res => <tr>

            <td>{res.webService}</td>
            {res.emails.map(e => <td>{e}</td>)}

          </tr>)}
        </tbody>
      </table>

      {/* <Link className="hover:text-yellow-300 hover:p-3" href="./">Back to main menu</Link> */}
        </>
        
    )
}

export default GetAllServices