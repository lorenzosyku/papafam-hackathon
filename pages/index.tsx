import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Header from "../components/Header";
import TotalBalance from "../components/TotalBalance";
import DataInput from "../components/DataInput";
import { v4 as uuidv4 } from "uuid";
import Transactions from "../components/Transactions";

const Home: NextPage = () => {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <>
        <div className="bg-gray-200 min-h-screen space-y-5">
          <Header session={session} />
          <div className="w-full flex items-center justify-center">
            <TotalBalance />
          </div>
          <div className="w-full flex items-center justify-center">
            <DataInput />
          </div>
          <div className="">
            <Transactions />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
};

export default Home;
