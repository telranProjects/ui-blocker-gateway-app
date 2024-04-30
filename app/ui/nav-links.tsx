'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx';

const size = 24;

const bolt = (<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
width={size} height={size}
viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
</svg>);

const atSymbol = (<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
width={size} height={size}
viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"></path>
</svg>);

const users = (<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" 
width={size} height={size}
viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
</svg>);

const links = [
    { name: 'IPs', href: '/ip', icon: bolt },
    { name: 'Services', href: '/service', icon: atSymbol },
    { name: 'Accounts', href: '/account', icon: users },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
        {links.map((l) => 

            <Link 
                key={l.name}
                href={l.href}
                className={clsx("flex h-[48px] grow mt-10 items-center justify-center gap-2 rounded-md bg-cyan-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  'bg-sky-100 text-red-400': pathname === l.href,
                },        
            )}
            >
                {l.icon}
                <p className="hidden md:block">{l.name}</p>
              </Link>
              
            
          )}
        </>
      );

}

