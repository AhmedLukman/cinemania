
import { CircularProgress } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className=" h-[85vh]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CircularProgress color="secondary" size="lg" aria-label="Loading..." />
      </div>
    </div>
  );
};

export default Loading;
