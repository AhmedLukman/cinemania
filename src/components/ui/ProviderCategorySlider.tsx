"use client";

import { ImageSize } from "@/lib/constants";
import { TWatchProvidersResponse } from "@/lib/types";
import { dataUrl, getImageUrl } from "@/lib/utils";
import { Avatar, Card, Link, Select, SelectItem } from "@nextui-org/react";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
import MediaCategorySlider from "./sliders/MediaCategorySlider";
import { getName } from "country-list";

const ProviderCategorySlider = ({
  providers,
}: {
  providers: TWatchProvidersResponse;
}) => {
  const [selectedKey, setSelectedKey] = useState<Set<string>>(new Set(["AD"]));
  const countryCodes = Object.keys(providers.results);
  const { link, buy, flatrate, rent } =
    providers.results[Array.from(selectedKey)[0]];
  return (
    <section>
      <div className="flex p-5 md:pt-10 md:pb-14 md:px-20 justify-between items-center gap-5 md:gap-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2">
          <h3 className="text-white z-10 text-2xl md:text-3xl font-serif font-bold">
            Watch Providers
          </h3>
          <Link
            href={link}
            isExternal
            showAnchorIcon
            className="text-gray-500"
          />
        </div>
        <Select
          aria-label="Select frequency"
          variant="bordered"
          className="text-white w-40 mr-2 md:mr-4"
          disallowEmptySelection
          selectedKeys={selectedKey}
          onSelectionChange={(keys) => setSelectedKey(keys as Set<string>)}
          classNames={{
            value: "!text-white",
          }}
        >
          {countryCodes.map((countryCode) => (
            <SelectItem
              key={countryCode}
              startContent={
                <Avatar
                  alt={getName(countryCode)}
                  className="w-6 h-6"
                  src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
                />
              }
            >
              {getName(countryCode)}
            </SelectItem>
          ))}
        </Select>
      </div>

      <h4 className="text-white px-5 md:px-20 pb-8 text-xl md:text-2xl font-serif font-bold">
        Flatrate
      </h4>
      {flatrate && flatrate.length > 0 ? (
        <MediaCategorySlider mediaLength={flatrate.length}>
          {flatrate.map((provider) => (
            <div key={provider.provider_id}>
              <div className=" h-full w-full flex items-center justify-center">
                <Card className="h-20 w-20">
                  <Image
                    unoptimized
                    placeholder={dataUrl as PlaceholderValue}
                    fill
                    alt={provider.provider_name + " logo"}
                    src={getImageUrl(provider.logo_path, ImageSize.Small)}
                  />
                </Card>
              </div>
            </div>
          ))}
        </MediaCategorySlider>
      ) : (
        <p className="text-red-500 px-5 md:px-20 mb-8">No data available</p>
      )}

      <h4 className="text-white px-5 md:px-20 pb-8 text-xl md:text-2xl font-serif font-bold">
        Buy
      </h4>
      {buy && buy.length > 0 ? (
        <MediaCategorySlider mediaLength={buy.length}>
          {buy.map((provider) => (
            <div key={provider.provider_id}>
              <div className=" h-full w-full flex items-center justify-center">
                <Card className="h-20 w-20">
                  <Image
                    unoptimized
                    placeholder={dataUrl as PlaceholderValue}
                    fill
                    alt={provider.provider_name + " logo"}
                    src={getImageUrl(provider.logo_path, ImageSize.Small)}
                  />
                </Card>
              </div>
            </div>
          ))}
        </MediaCategorySlider>
      ) : (
        <p className="text-red-500 px-5 md:px-20 mb-8">No data available</p>
      )}

      <h4 className="text-white px-5 md:px-20 pb-8 text-xl md:text-2xl font-serif font-bold">
        Rent
      </h4>
      {rent && rent.length > 0 ? (
        <MediaCategorySlider mediaLength={rent.length}>
          {rent.map((provider) => (
            <div key={provider.provider_id}>
              <div className=" h-full w-full flex items-center justify-center">
                <Card className="h-20 w-20">
                  <Image
                    unoptimized
                    placeholder={dataUrl as PlaceholderValue}
                    fill
                    alt={provider.provider_name + " logo"}
                    src={getImageUrl(provider.logo_path, ImageSize.Small)}
                  />
                </Card>
              </div>
            </div>
          ))}
        </MediaCategorySlider>
      ) : (
        <p className="text-red-500 px-5 md:px-20 mb-8">No data available</p>
      )}
    </section>
  );
};

export default ProviderCategorySlider;
