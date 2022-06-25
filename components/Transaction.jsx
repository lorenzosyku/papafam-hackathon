import React from "react";

function Transaction() {
  return (
    <div className="p-5">
      {/* <div>👍</div> */}
      <div className="bg-slate-100 flex items-center justify-between p-3 m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out max-w-2xl mx-auto">
        <div className="flex items-center space-x-1">
          <div className="relative h-16 w-1 bg-green-400"></div>
          <p>github</p>
        </div>
        <div className="">
          <p>200$</p>
          <h2 className="text-gray-500">24 June</h2>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
