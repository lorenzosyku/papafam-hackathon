import { deleteDoc, doc } from "@firebase/firestore";
import { XIcon } from "@heroicons/react/solid";
import moment from "moment";
import React from "react";
import { db } from "../firebase";

function Transaction({ transaction }) {
  const deleteTransaction = async (id) => {
    const transactionDoc = doc(db, "transactions", id);
    await deleteDoc(transactionDoc);
  };
  const time = moment(transaction.timeStamp).format("MMM Do YY");
  return (
    <div className="p-5">
      <div className="bg-slate-100 flex items-center justify-between p-3 m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out max-w-2xl mx-auto">
        <div className="flex items-center space-x-1">
          <div
            className={`relative h-16 w-1 ${
              transaction.amount < 0 ? "bg-red-400" : "bg-green-400"
            }`}
          ></div>
          <p>{transaction.reason}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <p>{transaction.amount}$</p>
            <h2 className="text-gray-500">{time}</h2>
          </div>
          <div onClick={() => deleteTransaction(transaction.id)}>
            <XIcon className="text-red-400 h-5 w-5 hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
