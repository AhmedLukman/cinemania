"use client";

import React, { PropsWithChildren } from "react";
import { TMediaCategoryArray } from "@/lib/types";
import { getPath } from "@/lib/utils";
import ViewMoreBtn from "./ViewMoreBtn";

const MediaCategory = ({
  media,
  children,
  heading,
  path,
}: {
  media: TMediaCategoryArray;
  heading: string;
  path?: string;
} & PropsWithChildren) => {
  return (
    <section>
      <div className="flex p-5 md:py-10 md:px-20 justify-between">
        <h3 className="text-white z-10 text-2xl md:text-3xl font-serif font-bold">
          {heading}
        </h3>
        {/* Assuming one page returned has 20 media objects */}
        {media.length >= 20 && path && <ViewMoreBtn path={path} />}
      </div>
      {media.length !== 0 && children}
      {media.length === 0 && (
        <p className="text-red-500 px-5 md:px-20">No data available</p>
      )}
    </section>
  );
};

export default MediaCategory;
