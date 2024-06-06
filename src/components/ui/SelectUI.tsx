import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { FREQUENCY } from "@/lib/constants";

const SelectUI = ({
  isLoading,
  frequency,
  setFrequency,
}: {
  isLoading: boolean;
  frequency: Set<string>;
  setFrequency: React.Dispatch<React.SetStateAction<Set<string>>>;
}) => {
  return (
    <Select
      isLoading={isLoading}
      aria-label="Select frequency"
      variant="bordered"
      className="text-white w-32 mr-2 md:mr-4"
      onSelectionChange={setFrequency as any}
      disallowEmptySelection
      selectedKeys={frequency}
      classNames={{
        value: "!text-white",
      }}
    >
      {FREQUENCY.map((filter) => (
        <SelectItem key={filter.value} value={filter.value}>
          {filter.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectUI;
