import { collection, doc, onSnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Transaction from "./Transaction";

function Transactions() {
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => {
    const transactionsRef = collection(db, "transactions");

    const getTransactions = onSnapshot(transactionsRef, (snapshot) => {
      let result = [];
      snapshot.docs.map((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      result?.sort(function (a, b) {
        return a.timeStamp - b.timeStamp;
      });
      
      setTransactionList(result);
    });

    return () => getTransactions();
  }, []);

 
  return (
    <div className="">
      {transactionList.map((transaction)=>(
        <Transaction key={transaction.id} transaction={transaction}/>
      ))}
      
    </div>
  );
}

export default Transactions;
