import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <div className="font-bold text-xl w-[200px]">Travelzo</div>
      <ul className="flex flex-1 gap-8 justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
