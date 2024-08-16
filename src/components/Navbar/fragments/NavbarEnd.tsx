import { Theme } from "@/components";
import { SearchIcon } from "@/icons";

export default function NavbarEnd() {
  return (
    <div className="navbar-end space-x-4">
      <button type="button" className="btn btn-ghost btn-circle">
        <span className="sr-only">Search</span>
        <SearchIcon />
      </button>
      <Theme />
    </div>
  );
}
