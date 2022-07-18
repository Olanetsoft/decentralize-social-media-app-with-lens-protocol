import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profiles({ profiles }) {
  return (
    <>
      {profiles.length > 0 &&
        profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`} key={index}>
            <div className="max-w-md rounded-lg shadow-lg bg-white mt-5 mb-5 p-5 border border-radius-8 cursor-pointer hover:bg-gray-100 hover:shadow-lg ml-8">
              <div className="flex flex-shrink-0 p-4 pb-0">
                <div className="flex items-center">
                  <div>
                    {profile &&
                    profile.picture &&
                    profile.picture.original &&
                    profile.picture.original.url ? (
                      <Image
                        src={`${profile.picture.original.url}`}
                        alt={profile.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="rounded-full bg-gray-500 h-12 w-12"></div>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-base leading-6 font-medium ">
                      {profile.name}{" "}
                      <span className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-400 transition ease-in-out duration-150">
                        @{profile.handle}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-base width-auto font-small flex-shrink">
                  {profile.bio ? profile.bio : "No bio available 😢"}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
