import React from 'react'
import MediaCard from "./MediaCard";
import { ScrollShadow } from '@nextui-org/react';
import { TMovie, TTVShow } from '@/lib/types';

const ProfileCreditList = ({
  title,
  mediaList,
}: {
  title: string;
  mediaList: TMovie[] | TTVShow[];
}) => {
  return (
    <>
      <h3 className="text-xl md:text-2xl font-serif mb-5">{title}</h3>
      <ScrollShadow
        hideScrollBar
        className="grid grid-cols-2 xl:grid-cols-3 gap-5 h-[30rem]"
      >
        {mediaList.map((media) => (
          <MediaCard
            key={media.id}
            media={media}
            path={`/${"original_name" in media ? "tv" : "movie"}/${media.id}`}
          />
        ))}
      </ScrollShadow>
    </>
  );
};

export default ProfileCreditList