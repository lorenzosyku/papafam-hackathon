import React from "react";

function TotalBalance({total}) {
  return (
    <div className="flex items-center justify-center bg-slate-100 p-7 w-1/2 md:w-1/3 lg:w-1/4 rounded-full hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out">
      <div className="flex flex-col space-y-2 items-center">
        <h1>Your balance is:</h1>
        <p className="text-3xl">{total}$</p>
      </div>
    </div>
  );
}

export default TotalBalance;
