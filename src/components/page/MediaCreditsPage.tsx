"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  PersonLink,
  TMovie,
  TPersonDetails,
  TPersonMediaCredits,
  TTVShow,
} from "@/lib/types";
import ProfileCard from "../ui/ProfileCard";
import MediaGrid from "../ui/MediaGrid";
import { Divider } from "@nextui-org/react";
import PaginationScrollUI from "../ui/PaginationScrollUI";
import { usePagination } from "@/hooks/usePagination";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";

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

  const itemsPerPage = 20;

  const {
    currentPage: currentCastPage,
    pagedItems: castPagedItems,
    setCurrentPage: setCurrentCastPage,
    totalPages: totalCastPages,
  } = usePagination({
    credits: mediaCredits.cast,
    itemsPerPage,
  });
  const {
    currentPage: currentCrewPage,
    pagedItems: crewPagedItems,
    setCurrentPage: setCurrentCrewPage,
    totalPages: totalCrewPages,
  } = usePagination({
    credits: mediaCredits.crew,
    itemsPerPage,
  });

  const castRef = useScrollIntoView({ page: currentCastPage });
  const crewRef = useScrollIntoView({ page: currentCrewPage });

  return (
    <main>
      <section className="flex items-center mt-20 justify-center">
        <div className="mb-8 flex flex-col gap-5">
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

      {castPagedItems.length > 0 && (
        <section ref={castRef} className="p-5 md:px-20">
          <h2 className="text-2xl mx-2 md:mx-4 text-white md:text-3xl font-bold mb-10 font-serif">
            Cast Credits
          </h2>
          <MediaGrid path={title.toLowerCase()} media={castPagedItems} />
          <div className="flex mt-10 justify-center items-center">
            <PaginationScrollUI
              currentPage={currentCastPage}
              setCurrentPage={setCurrentCastPage}
              totalPages={totalCastPages}
            />
          </div>
        </section>
      )}
      {crewPagedItems.length > 0 && castPagedItems.length > 0 && (
        <div className="p-5 md:px-20">
          <Divider className="my-5 bg-neutral-600" />
        </div>
      )}

      {crewPagedItems.length > 0 && (
        <section ref={crewRef} className="p-5 md:px-20">
          <h2 className="text-2xl mx-2 md:mx-4 text-white md:text-3xl font-bold mb-10 font-serif">
            Crew Credits
          </h2>
          <MediaGrid path={title.toLowerCase()} media={crewPagedItems} />
          <div className="flex mt-10 justify-center items-center">
            <PaginationScrollUI
              renderScrollToTop={false}
              currentPage={currentCrewPage}
              setCurrentPage={setCurrentCrewPage}
              totalPages={totalCrewPages}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default MediaCreditsPage;
