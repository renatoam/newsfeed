import { HomeIcon } from "@/icons";
import Link from "next/link";

export default function NavbarCenter() {
  return (
    <div className="navbar-center">
      <Link href="/" className="btn btn-ghost text-xl space-x-4">
        <HomeIcon />
        <h1>News Feed</h1>
      </Link>
    </div>
  );
}
