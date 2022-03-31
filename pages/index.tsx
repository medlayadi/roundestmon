import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Who's roundest Pokemon?!" />
      </Head>
      <h1 className="text-2xl">Hello world</h1>
    </div>
  );
};

export default Home;
