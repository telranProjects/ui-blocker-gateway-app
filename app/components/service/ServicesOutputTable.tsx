import { Service } from "../../interfaces/Service";

interface Props {
    services: Service[];
}

export function ServicesOutputTable({ services }: Props): JSX.Element {

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
                        <tr key={s.webService}>
                            <td>{s.webService}</td>
                            {s.emails.map((e, index) => <td key={index}>{e}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
