import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="">
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
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
