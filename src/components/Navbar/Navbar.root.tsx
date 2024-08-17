import NavbarCenter from "./fragments/NavbarCenter";
import NavbarEnd from "./fragments/NavbarEnd";
import NavbarStart from "./fragments/NavbarStart";

export default async function Navbar() {
  return (
    <div className="container navbar bg-base-100 w-full lg:w-[1280px] md:px-8">
      <NavbarStart />
      <NavbarCenter />
      <NavbarEnd />
    </div>
  )
}
