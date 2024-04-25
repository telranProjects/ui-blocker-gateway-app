import React from "react";
import { IP } from "../interfaces/IP";
import { Service } from "../interfaces/Service";

interface Props {
    th1: string;
    th2: string;
    th3: string;
    entitys: (IP[] | Service[]);
}

const OutputTable: React.FC<Props> = ({ th1, th2, th3, entitys }) => {
    return (
        <>
            <h1>Services-Emails</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>{th1}</th>
                        <th>{th2}</th>
                        <th>{th3}</th>
                    </tr>
                </thead>
                <tbody>
                    {entitys.map((ent: IP | Service, index: number) => (
                        <tr key={index}>
                            <td>{th1 in ent ? ent[th1 as keyof typeof ent] : ""}</td>
                            <td>{th2 in ent ? ent[th2 as keyof typeof ent] : ""}</td>
                            <td>{th3 in ent ? ent[th3 as keyof typeof ent] : ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default OutputTable;
