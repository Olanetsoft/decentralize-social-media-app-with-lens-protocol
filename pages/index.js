import Head from "next/head";

import Image from "next/image";

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
      <div className="max-w-md rounded-lg shadow-lg bg-white mt-5 mb-5 p-5 border border-radius-8 cursor-pointer hover:bg-gray-100 hover:shadow-lg ml-8">
        <div className="flex flex-shrink-0 p-4 pb-0">
          <div className="flex items-center">
            <div>
              <Image
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg"
                alt="Olanetsoft"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium ">
                I D R I S{" "}
                <span className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-400 transition ease-in-out duration-150">
                  @olanetsoft.lens
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="pl-16">
          <p className="text-base width-auto font-small flex-shrink">
            A software engineer, technical writer, and community builder.
          </p>
        </div>
      </div>
    </div>
  );
}
