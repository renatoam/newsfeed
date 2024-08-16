import NavbarCenter from "./fragments/NavbarCenter";
import NavbarEnd from "./fragments/NavbarEnd";
import NavbarStart from "./fragments/NavbarStart";

export default async function Navbar() {
  return (
    <div className="navbar bg-base-100 container">
      <NavbarStart />
      <NavbarCenter />
      <NavbarEnd />
    </div>
  )
}
