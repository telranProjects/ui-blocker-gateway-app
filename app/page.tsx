import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="p-5 text-yellow-500">Choose Entities to operate:</h1>
      <ul>
        <li><Link className="hover:text-yellow-100 hover:p-1" href="/ip">IPs</Link></li>
        <li><Link className="hover:text-yellow-200 hover:p-2" href="/service">Services</Link></li>
        <li><Link className="hover:text-yellow-300 hover:p-3" href="/account">Accounts</Link></li>
      </ul>      
    </main>
  );
}
