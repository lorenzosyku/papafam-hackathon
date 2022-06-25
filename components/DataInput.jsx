import React, { useRef } from "react";
import { PlusIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";

function DataInput() {
  const inputRef = useRef();
  const handleSubmit = () => {};
  return (
    <div className="flex w-full md:w-1/3 justify-center">
      <div className="flex bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl border-4 border-blue-400 relative-group">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Amount"
            className="relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 "
          />

          <button className="relative font-bold text-cyan-100 ">
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default DataInput;
