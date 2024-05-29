import { getCategoryHeading } from "@/lib/utils";
import React from "react";
import SelectUI from "./SelectUI";

const CategoryPageHeading = ({
  id,
  isLoading,
  setValue,
  value,
  type,
}: {
  id: string;
  isLoading: boolean;
  setValue: React.Dispatch<any>;
  value: any;
  type: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-serif text-white my-10 mx-2 md:mx-4">
        {getCategoryHeading(id)} {type}
      </h1>
      {id === "trending" && (
        <SelectUI isLoading={isLoading} setValue={setValue} value={value} />
      )}
    </div>
  );
};

export default CategoryPageHeading;
