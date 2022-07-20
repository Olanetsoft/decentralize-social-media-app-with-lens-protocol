import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { client, getProfile, getPublications } from "../api/api";

export default function Profile() {
  const [profile, setProfile] = useState();
  const [publications, setPublications] = useState();
  const router = useRouter();

  const { id } = router.query;

  async function fetchProfile() {
    try {
      const returnedProfile = await client
        .query(getProfile, { id })
        .toPromise();

      const profileData = returnedProfile.data.profiles.items[0];

      setProfile(profileData);
    } catch (err) {
      console.log("error fetching profile...", err);
    }
  }

  async function getProfilePublications() {
    try {
      const returnedPublications = await client
        .query(getPublications, { id, limit: 10 })
        .toPromise();

      const publicationsData = returnedPublications.data.publications.items;

      console.log("publicationsData", publicationsData);

      setPublications(publicationsData);
    } catch (err) {
      console.log("error fetching publications...", err);
    }
  }

  useEffect(() => {
    if (id) {
      fetchProfile();
      getProfilePublications();
    }
  }, [id]);

  return (
    <div>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center py-4">
          <nav className="w-full lg:w-2/5">
            <Link
              href="/"
              className="text-grey-darker text-sm mr-4 font-semibold pb-6 border-b-2 border-solid border-transparent no-underline hover:text-teal hover:border-teal hover:no-underline"
            >
              Home
            </Link>
          </nav>
          <div className="w-full lg:w-1/5 text-center my-4 lg:my-0">
            <a href="#">
              <i className="fa fa-twitter fa-lg text-blue"></i>
            </a>
          </div>
          <div className="w-full lg:w-2/5 flex lg:justify-end">
            <div className="mr-4">
              <a href="#">
                {profile &&
                profile.picture &&
                profile.picture.original &&
                profile.picture.original.url ? (
                  <Image
                    src={profile.picture.original.url}
                    alt="avatar"
                    className="h-8 w-8 rounded-full"
                    width={50}
                    height={50}
                  />
                ) : (
                  <div className="rounded-full bg-gray-500 h-12 w-12"></div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container h-20 mx-auto flex flex-col lg:flex-row items-center justify-center">
        {profile &&
        profile.coverPicture &&
        profile.coverPicture.original &&
        profile.coverPicture.original.url ? (
          <Image
            src={profile.coverPicture.original.url}
            alt="logo"
            className="rounded-lg h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24"
            width={800}
            height={100}
          />
        ) : null}
      </div>

      <div className="bg-white shadow mt-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
          <div className="w-full lg:w-1/4">
            {profile &&
            profile.picture &&
            profile.picture.original &&
            profile.picture.original.url ? (
              <Image
                src={profile.picture.original.url}
                alt="logo"
                className="rounded-full h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-24"
                width={74}
                height={74}
              />
            ) : (
              <div className="rounded-full bg-gray-500 h-12 w-12"></div>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="list-reset flex">
              <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                <div className="text-sm font-bold tracking-tight mb-1">
                  Publications
                </div>
                <div className="text-lg tracking-tight font-bold text-teal">
                  {profile && profile.stats.totalPublications}
                </div>
              </li>
              <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                <div className="text-sm font-bold tracking-tight mb-1">
                  Posts
                </div>
                <div className="text-lg tracking-tight font-bold text-teal">
                  {profile && profile.stats.totalPosts}
                </div>
              </li>
              <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal">
                <div className="text-sm font-bold tracking-tight mb-1">
                  Following
                </div>
                <div className="text-lg tracking-tight font-bold hover:text-teal">
                  {profile && profile.stats.totalFollowing}
                </div>
              </li>
              <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal">
                <div className="text-sm font-bold tracking-tight mb-1">
                  Followers
                </div>
                <div className="text-lg tracking-tight font-bold hover:text-teal">
                  {profile && profile.stats.totalFollowers}
                </div>
              </li>
              <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal">
                <div className="text-sm font-bold tracking-tight mb-1">
                  Comments
                </div>
                <div className="text-lg tracking-tight font-bold hover:text-teal">
                  {profile && profile.stats.totalComments}
                </div>
              </li>
              <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent hover:border-teal">
                <div className="text-sm font-bold tracking-tight mb-1">
                  Collection
                </div>
                <div className="text-lg tracking-tight font-bold hover:text-teal">
                  {profile && profile.stats.totalCollects}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row mt-3 text-sm leading-normal">
        <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4">
          <h1>
            <a
              href="#"
              className="text-black font-bold no-underline hover:underline"
            >
              {profile && profile.name}
            </a>
          </h1>
          <div className="mb-4">@{profile && profile.handle}</div>

          <div className="mb-4">{profile && profile.bio}</div>

          <div className="mb-2">
            <i className="fa fa-link fa-lg text-grey-darker mr-1"></i>
            <a href="#" className="text-teal no-underline hover:underline">
              lens.dev
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white mb-4">
          <div className="p-3 text-lg font-bold border-b border-solid border-grey-light">
            Publications
          </div>
          {publications &&
            publications.map((publication) => (
              <div key={publication.id}>
                <div className="flex border-b border-solid border-grey-light">
                  <div className="w-1/8 text-right pl-3 pt-3">
                    <div>
                      <i className="fa fa-thumb-tack text-teal mr-2"></i>
                    </div>
                    <div>
                      <a href="#">
                        {profile &&
                        profile.picture &&
                        profile.picture.original &&
                        profile.picture.original.url ? (
                          <Image
                            src={profile.picture.original.url}
                            alt="avatar"
                            className="rounded-full h-12 w-12 mr-2"
                            width={50}
                            height={50}
                          />
                        ) : (
                          <div className="rounded-full bg-gray-500 h-12 w-12"></div>
                        )}
                      </a>
                    </div>
                  </div>
                  <div className="w-7/8 p-3 pl-0 ml-4">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-bold">
                          <a href="#" className="text-black">
                            {profile && profile.name}
                          </a>
                        </span>
                        <span className="text-grey-dark">
                          @{profile && profile.handle}
                        </span>
                        <span className="text-grey-dark">&middot;</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="mb-6 text-grey-dark mt-2">
                        {publication.metadata.content}
                      </p>
                      <p>
                        <a href="#">
                          {publication.metadata.media > 0 &&
                          publication.metadata.media[0].original.mimetype ===
                            "video/mp4" ? (
                            <video
                              controls
                              style={{ width: "700", height: "400" }}
                            >
                              <source
                                src={publication.metadata.media[0].original.url}
                                type="video/mp4"
                              />
                            </video>
                          ) : null}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-full lg:w-1/4 pl-4">
          <div className="bg-white p-3 mb-3">
            <div>
              <span className="text-lg font-bold">Who to follow</span>
              <span>&middot;</span>
            </div>

            <div className="flex border-b border-solid border-grey-light">
              <div className="py-2">
                <a href="#">
                  <Image
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follow1.jpg"
                    alt="follow1"
                    className="rounded-full h-12 w-12"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
              <div className="pl-2 py-2 w-full">
                <div className="flex justify-between mb-1">
                  <div>
                    <a href="#" className="font-bold text-black">
                      I D R I S
                    </a>{" "}
                    <a href="#" className="text-grey-dark">
                      @olanetsoft.lens
                    </a>
                  </div>

                  <div>
                    <a href="#" className="text-grey hover:text-grey-dark">
                      <i className="fa fa-times"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
