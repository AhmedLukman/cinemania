import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import { FREQUENCY } from '@/lib/constants';

const SelectUI = ({
  isLoading,
  value,
  setValue,
}: {
  isLoading: boolean;
  value: Set<string>;
  setValue: any;
}) => {
  return (
    <Select
      isLoading={isLoading}
      aria-label="Select frequency"
      variant="bordered"
      className="text-white w-32 mr-2 md:mr-4"
      onSelectionChange={setValue}
      disallowEmptySelection
      selectedKeys={value}
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

export default SelectUI