"use client";

import Image from "next/image";
import Menu from "../../MenuComponents/Menu/Menu";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="container flex justify-between items-center py-4 md:px-0 px-4 absolute left-1/2 -translate-x-1/2 w-full z-50">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/avatar/AfredeAvatar.png"
            width={64}
            height={64}
            priority
            alt="Afrede hossain's avatar"
          />
          <h1 className="bg-clip-text text-2xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
            Afrede
            <br />
            Hossain
          </h1>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div
          className="md:hidden hover:bg-slate-700 p-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <HiMenu className="text-2xl" />
          ) : (
            <AiOutlineClose className="text-2xl" />
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="min-h-screen w-full absolute top-0 left-0 z-20 flex justify-center items-center bg-slate-900 transition-all duration-500 ease-in-out">
          <Menu />
        </div>
      )}
    </>
  );
};

export default Navbar;
