import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { BiSearch, BiBellMinus } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AuthContext } from "@/context/auth.context";
import Link from "next/link";


const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`${scroll && "bg-[#141414]"}`}>
      <div className="flex space-x-2 md:space-x-10 items-center">
        <Image
          src={"/Animate.svg"}
          alt="logo"
          width={56}
          height={56}
          className="object-contain cursor-pointer"
        />
        <ul className="md:flex hidden space-x-4">
          <li className="navLinks text-shadow-xl">Home</li>
          <li className="navLinks text-shadow-xl">Movies</li>
          <li className="navLinks text-shadow-xl">TV Shows</li>
          <li className="navLinks text-shadow-xl">New</li>
          <li className="navLinks text-shadow-xl">Popular</li>
        </ul>
      </div>

      <div className="flex space-x-4 items-center text-sm font-light">
        <BiSearch className="cursor-pointer h-6 w-6" />
        <p className="hidden lg:block">Kids</p>
        <BiBellMinus className="cursor-pointer h-6 w-6" />
        <Link href={'/account'}>
        <AiOutlineUser className="cursor-pointer h-6 w-6" />
        </Link>
        <RiLogoutCircleLine
          className="cursor-pointer h-6 w-6"  
          onClick={logout}
        />
      </div>
    </header>
  );
};

export default Navbar;
