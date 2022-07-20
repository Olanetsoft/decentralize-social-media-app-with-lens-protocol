import Head from "next/head";

import Profiles from "../components/profiles";

export default function Home() {
  return (
    <div className="grid grid-cols-3 divide-x">
      <Head>
        <title>Decentralize Social Media App - Lens protocol</title>
        <meta name="description" content="Decentralize Social Media App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="col-span-3">
        <div className="px-4 py-8">
          <h1 className="text-3xl font-bold leading-tight text-center">
            Decentralized Social Network - Lens protocol
          </h1>
          <p className="text-center">
            This is a decentralized social network built on the Lens protocol.
          </p>
        </div>
      </div>
      <Profiles />
    </div>
  );
}
