import React from "react";
import { IP } from "../../interfaces/IP";

interface Props {
    IPs: (IP[]);
}

const IPsOutputTable: React.FC<Props> = ({ IPs }) => {
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
                    {IPs.length > 0 && IPs.map((ip) => (
                        <tr>
                            <td>{ip.IP}</td>
                            <td>{ip.webService}</td>
                            <td>{ip.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default IPsOutputTable;
