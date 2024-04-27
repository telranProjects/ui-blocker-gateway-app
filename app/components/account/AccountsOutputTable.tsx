import React from "react";
import { Account } from "../../interfaces/Account";

interface Props {
    accounts: Account;
}

const AccountsOutputTable: React.FC<Props> = ({accounts}) => {
    return (
        <>
            <h1>Accounts-Emails</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Roles</th>                      
                    </tr>
                </thead>
                <tbody>
                    {accounts && (
                        <tr key={accounts.username}>
                            <td>{accounts.username}</td>
                            {accounts.roles.map((r, index) => <td key={index}>{r}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default AccountsOutputTable;
