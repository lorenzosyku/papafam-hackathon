import React, { useRef } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";

function DataInput() {
  const amountRef = useRef("");
  const reasonRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amountRef.current.value === "" || reasonRef.current.value === "")
      return;

    await addDoc(collection(db, "transactions"), {
      amount: parseFloat(amountRef.current.value),
      reason: reasonRef.current.value,
      id: uuidv4(),
      timeStamp: Date.now(),
    });
    amountRef.current.value = "";
    reasonRef.current.value = "";
  };

  return (
    <div className="flex w-full md:w-1/3 justify-center">
      <div className="flex bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl border-4 border-blue-400 relative-group rounded-full">
        <form onSubmit={handleSubmit} className="md:flex">
          <div className="space-y-3">
            <input
              type="text"
              ref={amountRef}
              placeholder="Enter Amount"
              className="relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 "
            />
            <input
              type="text"
              ref={reasonRef}
              placeholder="Enter Reason"
              className="relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 "
            />
          </div>

          <button className="relative font-bold text-cyan-100 ">
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default DataInput;
