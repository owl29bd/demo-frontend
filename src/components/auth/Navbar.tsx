import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 bg-[#141414] text-white px-6">
      <Link href={"/"} className="text-xl font-bold">
        My Fancy Website
      </Link>

      <ul className="hidden md:flex space-x-4 list-none">
        <li>
          <Link href={"/login"} className="hover:text-blue-600">
            Login
          </Link>
        </li>
        <li>
          <Link href={"/register"} className="hover:text-blue-600">
            Register
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"} className="hover:text-blue-600">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href={"/settings"} className="hover:text-blue-600">
            Settings
          </Link>
        </li>

        <form>
          <Button type="submit" variant={"ghost"}>
            Logout
          </Button>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
