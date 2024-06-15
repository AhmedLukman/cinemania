import React, { PropsWithChildren } from "react";
import { TCollectionImageResponse, TMediaCategoryArray } from "@/lib/types";
import ViewMoreBtn from "./ViewMoreBtn";
import ViewImages from "./ViewImages";

const MediaCategory = ({
  media,
  children,
  heading,
  path,
  collectionImages,
}: {
  media: TMediaCategoryArray;
  heading: string;
  path?: string;
  collectionImages?: TCollectionImageResponse;
} & PropsWithChildren) => {
  return (
    <section>
      <div className="flex p-5 md:pt-10 md:pb-14 md:px-20 justify-between items-center">
        <h3 className="text-white z-10 text-2xl md:text-3xl font-serif font-bold">
          {heading}
        </h3>
        {/* Assuming one page returned has 20 media objects */}
        {media.length >= 20 && path && <ViewMoreBtn path={path} />}
        {collectionImages && (
          <ViewImages imageData={collectionImages} title={heading} />
        )}
      </div>
      {media.length !== 0 && children}
      {media.length === 0 && (
        <p className="text-red-500 px-5 md:px-20">No data available</p>
      )}
    </section>
  );
};

export default MediaCategory;
