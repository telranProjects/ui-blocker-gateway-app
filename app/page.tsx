import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Choose Entity to operate:</h1>
      <ul>
        <li><Link href="/ip">IP</Link></li>
        <li><Link href="/service">Service</Link></li>
        <li><Link href="/account">Account</Link></li>
      </ul>      
    </main>
  );
}
