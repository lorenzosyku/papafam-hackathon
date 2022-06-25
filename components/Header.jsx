import React from "react";
import { signOut } from "next-auth/react";
import Avatar from "boring-avatars";

function Header({ session }) {
  return (
    <div className="flex items-center justify-between p-3 shadow-sm bg-slate-100">
      <div className="">
        <h2 className="font-poppins text-xl text-shade-lightblue italic font-semibold">
          <span className="text-indigo-400">PPF</span>
          <span className="text-cyan-800"> -Exp</span>
        </h2>
      </div>

      <div className="">
        <Avatar
          size={30}
          name={`${session.user?.name}`}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <p className="text-xs">{session?.user?.name}</p>
      </div>
      <button
        className="border rounded-full p-2 shadow-sm text-sm md:text-md"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}

export default Header;
