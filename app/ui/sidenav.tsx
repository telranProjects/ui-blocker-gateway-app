import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <main className="h-screen">
      <div className="h-5/6">
        <h1 className="p-5 text-yellow-500">Choose Entities to operate:</h1>
        <div>
          <NavLinks />
        </div>
      </div>
      <div className="text-blue-400 align-bottom items-center justify-center">
        <h1 >Request-Blocker project.</h1>
        <div>(c) 2024</div>
      </div>
    </main>
  );
}
