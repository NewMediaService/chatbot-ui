import Head from "next/head";
import Chat from "../components/chat/Chat";

export default function Home() {
  return (
    <>
      <Head>
        <title>NMSGPT</title>
      </Head>
      <main>
        <Chat />
      </main>
    </>
  );
}