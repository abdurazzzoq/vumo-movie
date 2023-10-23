import { MembershipPlan } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";

const Account = () => {
  return (
    <>
      <header>
        <div className="flex space-x-2 md:space-x-10 items-center">
          <Link href={"/"}>
            <Image
              src={"/Animate.svg"}
              alt="logo"
              width={56}
              height={56}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex space-x-4 items-center text-sm font-light">
          <Link href={"/account"}>
            <AiOutlineUser className="cursor-pointer h-6 w-6" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 md:px-10 pt-24 pb-12 transition-all">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <h4 className="text-3xl md:text-4xl">Account</h4>
          <div className="-ml-1 flex items-center gap-1.5">
            <MdOutlineSubscriptions className="w-5 h-5 text-red-500" />
            <p className="text-[#555] text-md font-semibold">
              Member since 15 February, 2023
            </p>
          </div>
        </div>


<MembershipPlan/>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-1 md:border-t md:border-b-0  md:pb-0">
          <h4 className="text-lg text-[gray]">Plan details</h4>
          <div className="col-span-2 fomt-medium ">Premium </div>
          <p className="text-blue-500 cursor-pointer hover:underline md:text-right">
            Change Plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 md:grid-cols-4 border md:border-b-0 md:border-x-1 md:bordet-t px-4 py-4 md:pb-0">
          <h1 className="text-lg text-[gray]">Settings</h1>
          <div className="text-blue-500 hover:underline col-span-3 cursor-pointer">Sign out of all devices</div>
        </div>
      </main>

      {/* Plan */}
    </>
  );
};

export default Account;
