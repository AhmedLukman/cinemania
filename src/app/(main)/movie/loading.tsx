
import { CircularProgress } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-[85svh] flex z-50 justify-center items-center">
      <CircularProgress color="secondary" size="lg" aria-label="Loading..." />
    </div>
  );
};

export default Loading;
