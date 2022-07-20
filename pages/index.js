import Head from "next/head";
import Profiles from "../components/profiles";

import { useState, useEffect } from "react";

import { client, getProfiles } from "../pages/api/api";

export default function Home() {
  // Setup the state for the profiles
  const [profiles, setProfiles] = useState([]);

  // Get the recommended profiles
  const fetchProfiles = async () => {
    try {
      const response = await client.query(getProfiles).toPromise();

      setProfiles(response.data.recommendedProfiles);

      console.log(response.data.recommendedProfiles);
    } catch (e) {
      console.log(e);
    }
  };

  // Run the fetchProfiles function when the component is mounted
  useEffect(() => {
    fetchProfiles();
  }, []);

  // Render the component
  return (
    <div className="grid grid-cols-3 divide-x">
      <Head>
        <title>Decentralized Social Network - Lens protocol</title>
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
      {profiles && profiles.length > 0 ? (
        <Profiles profiles={profiles} />
      ) : (
        <div className="text-center text-gray-500 p-5 font-medium text-xl tracking-tight leading-tight">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
