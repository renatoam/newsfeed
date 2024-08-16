import { Theme } from "@/components";
import { SearchIcon } from "@/icons";
import Link from "next/link";

export default function NavbarEnd() {
  return (
    <div className="navbar-end space-x-4">
      <Link href="/search">
        <button type="button" className="btn btn-ghost btn-circle">
          <span className="sr-only">Search</span>
          <SearchIcon />
        </button>
      </Link>
      <Theme />
    </div>
  );
}
