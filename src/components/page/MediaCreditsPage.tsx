"use client";

import {
  PersonLink,
  TMovie,
  TPersonDetails,
  TPersonMediaCredits,
  TTVShow,
} from "@/lib/types";
import React, { useEffect, useState, useRef } from "react";
import ProfileCard from "../ui/ProfileCard";
import MediaGrid from "../ui/MediaGrid";
import { CircularProgress, Divider } from "@nextui-org/react";
import PaginationScrollUI from "../ui/PaginationScrollUI";

const MediaCreditsPage = ({
  personDetails,
  mediaCredits,
  personLink,
}: {
  personDetails: TPersonDetails;
  mediaCredits: TPersonMediaCredits<TMovie> | TPersonMediaCredits<TTVShow>;
  personLink: PersonLink;
}) => {
  const { name, homepage, profile_path } = personDetails;
  const title = "original_title" in mediaCredits.cast[0] ? "Movie" : "TV";

  const [castMedia, setCastMedia] = useState(mediaCredits.cast);
  const [crewMedia, setCrewMedia] = useState(mediaCredits.crew);
  const [currentCastPage, setCurrentCastPage] = useState(1);
  const [currentCrewPage, setCurrentCrewPage] = useState(1);

  const castPages = Math.ceil(mediaCredits.cast.length / 20);
  const crewPages = Math.ceil(mediaCredits.crew.length / 20);
  const itemsPerPage = 20;

  const prevCastPageRef = useRef(currentCastPage);
  const prevCrewPageRef = useRef(currentCrewPage);

  const castRef = React.useRef<HTMLElement | null>(null);
  const crewRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startIndex = (currentCastPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setCastMedia(mediaCredits.cast.slice(startIndex, endIndex));
  }, [currentCastPage, mediaCredits.cast]);

  useEffect(() => {
    const startIndex = (currentCrewPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setCrewMedia(mediaCredits.crew.slice(startIndex, endIndex));
  }, [currentCrewPage, mediaCredits.crew]);

  useEffect(() => {
    if (prevCastPageRef.current !== currentCastPage) {
      castRef?.current?.scrollIntoView({ behavior: "smooth" });
      prevCastPageRef.current = currentCastPage;
    }
  }, [currentCastPage]);

  useEffect(() => {
    if (prevCrewPageRef.current !== currentCrewPage) {
      crewRef.current?.scrollIntoView({ behavior: "smooth" });
      prevCrewPageRef.current = currentCrewPage;
    }
  }, [currentCrewPage]);

  return (
    <main>
      <section className="flex items-center mt-20 justify-center">
        <div className=" mb-8 flex flex-col gap-5">
          <h1 className="text-2xl text-white md:text-3xl font-bold font-serif">
            {name}&apos;s {title} Credits
          </h1>
          <ProfileCard
            links={personLink}
            homepage={homepage}
            name={name}
            className="self-center"
            profilePath={profile_path}
          />
        </div>
      </section>
      <section ref={castRef} className="p-5 md:px-20">
        <h2 className="text-2xl mx-2 md:mx-4  text-white md:text-3xl font-bold mb-10 font-serif">
          Cast Credits
        </h2>

        <MediaGrid path="movie" media={castMedia} />
        <div className="flex mt-10 justify-center items-center">
          <PaginationScrollUI
            currentPage={currentCastPage}
            setCurrentPage={setCurrentCastPage}
            totalPages={castPages}
          />
        </div>
      </section>
      <div className="p-5 md:px-20">
        <Divider className="my-5 bg-neutral-600" />
      </div>
      <section className="p-5 md:px-20" ref={crewRef}>
        <h2 className="text-2xl mx-2 md:mx-4  text-white md:text-3xl font-bold mb-10 font-serif">
          Crew Credits
        </h2>

        <MediaGrid path="tv" media={crewMedia} />
        <div className="flex mt-10 justify-center items-center">
          <PaginationScrollUI
            currentPage={currentCrewPage}
            setCurrentPage={setCurrentCrewPage}
            totalPages={crewPages}
          />
        </div>
      </section>
    </main>
  );
};

export default MediaCreditsPage;
