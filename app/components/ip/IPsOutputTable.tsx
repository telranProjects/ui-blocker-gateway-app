import React from "react";
import { IP } from "../../interfaces/IP";

interface Props {
    IPs: IP[];
}

export default function IPsOutputTable ({ IPs }: Props): JSX.Element {

    return (
        <>
            <h1>IPs-Services-Timestamps</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>IP</th>
                        <th>Web Service</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {IPs.map(ip => (<tr key={ip.IP}>
                        <td>{ip.IP}</td>
                        <td>{ip.webService}</td>
                        <td>{ip.timestamp}</td>
                    </tr>))}
                </tbody>
            </table>
        </>
    );
};
