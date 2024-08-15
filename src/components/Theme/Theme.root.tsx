import { MoonIcon, SunIcon } from "@/icons";

export default function Theme() {
  return (
    <label className="swap swap-rotate">
      <span className="sr-only">Theme controller</span>
      <input type="checkbox" className="theme-controller" value="coffee" />
      <SunIcon />
      <MoonIcon />
    </label>
  )
}
