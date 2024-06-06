import React from "react";
import MediaCard from "./MediaCard";
import { TMediaGrid } from "@/lib/types";

const MediaGrid = ({ media, path }: { media: TMediaGrid; path: string }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
      {media?.map((media) => (
        <MediaCard
          element="h2"
          key={media.id}
          media={media}
          path={`/${path}/${media.id}`}
        />
      ))}
    </div>
  );
};

export default MediaGrid;
