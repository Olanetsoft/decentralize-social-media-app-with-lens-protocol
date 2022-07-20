import React from "react";
import Image from "next/image";

const Profiles = () => {
  return (
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
  );
};

export default Profiles;
