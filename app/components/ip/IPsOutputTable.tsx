import React from "react";
import { IP } from "../../interfaces/IP";

interface Props {
    IPs: (IP[] | IP);
}

const IPsOutputTable: React.FC<Props> = ({ IPs }) => {

    const renderRows = (ip: IP): JSX.Element => {
        return <tr key={ip.IP}>
            <td>{ip.IP}</td>
            <td>{ip.webService}</td>
            <td>{ip.timestamp}</td>
        </tr>;
    };

    const rows = Array.isArray(IPs) ? IPs.map(renderRows) :
        renderRows(IPs as IP);

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
                    {rows}
                </tbody>
            </table>
        </>
    );
};

export default IPsOutputTable;
