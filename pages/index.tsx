import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Header from "../components/Header"


const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="">
          <Header session={session}/>
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
