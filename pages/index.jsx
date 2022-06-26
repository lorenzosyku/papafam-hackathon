import { signIn, useSession } from "next-auth/react";
import Header from "../components/Header";
import TotalBalance from "../components/TotalBalance";
import DataInput from "../components/DataInput";
import Transactions from "../components/Transactions";
import dynamic from "next/dynamic";
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const Home = () => {
  const { data: session } = useSession();

  const Graph = dynamic(() => import("../components/Graph"), { ssr: false });
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

  const amounts = transactionList.map((transaction) => transaction.amount);
  console.log(amounts);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);
  

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  if (session) {
    return (
      <>
        <div className="bg-gray-200 min-h-screen space-y-6">
          <Header session={session} />
          <div className="w-full flex items-center justify-center">
            <TotalBalance total={total}/>
          </div>
          <div className="w-full">
            <Graph amounts={amounts}/>
          </div>
          <div className="flex justify-center items-center">
            <p>Amount</p>
            <p>(negative - expense, positive - income)</p>
          </div>

          <div className="w-full flex items-center justify-center">
            <DataInput />
          </div>
          <div className="pb-32">
            <Transactions transactionList={transactionList} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-900">
        <button className="text-3xl text-slate-200 border rounded-md p-5 hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out max-w-2xl mx-auto hover:text-stone-800" onClick={() => signIn()}>Continue to Login...</button>
      </div>
    </>
  );
};

export default Home;
