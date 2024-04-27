import React from "react";
import { Service } from "../../interfaces/Service";

interface Props {
    services: Service[] | Service;
}

const ServicesOutputTable: React.FC<Props> = ({ services }) => {

    let rows = null;

    if (Array.isArray(services)) {
        rows = services.map((s) => (
            <tr key={s.webService}>
                <td>{s.webService}</td>
                {s.emails.map((e, index) => <td key={index}>{e}</td>)}
            </tr>
        ));
    } else {
        rows = (
            <tr key={services.webService}>
                <td>{services.webService}</td>
                {services.emails.map((e, index) => <td key={index}>{e}</td>)}
            </tr>
        );
    }

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
                {rows}
            </tbody>
        </table>
    </>
);
};

export default ServicesOutputTable;
