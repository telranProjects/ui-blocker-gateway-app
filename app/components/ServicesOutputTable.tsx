import React from "react";
import { Service } from "../interfaces/Service";

interface Props {
    services: Service[];
}

const ServicesOutputTable: React.FC<Props> = ({services}) => {
    return (
        <>
            <h1>Services-Emails</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Email</th>
                        <th>Email</th>                        
                    </tr>
                </thead>
                <tbody>
                    {services.map((s) => (
                        <tr>
                            <td>{s.webService}</td>
                            {s.emails.map(e => <td>{e}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ServicesOutputTable;
