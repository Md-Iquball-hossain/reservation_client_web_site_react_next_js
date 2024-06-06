"use client";
import React, { createContext, useState, useEffect } from "react";
export const ContextApiProviders = createContext({});

const FilterProviders = ({ children }: any) => {
  const [adultchild, adultchildItem] = useState({ adult: 0, child: 0 });
  const [filterItem, setfilterItem] = useState<{
    key: string;
    adult: string | number;
    child: string | number;
    skip: number;
    limit: number;
    refundable: any;
    availability: any;
  }>({
    key: "",
    adult: "",
    child: "",
    skip: 0,
    limit: 10,
    refundable: "",
    availability: "",
  });


  useEffect(() => {
    setfilterItem((prevFilterItem: any) => ({
      ...prevFilterItem,
      // adult: adultchild.adult.toString(), // Convert to string if necessary
      // adult: adultchild.adult,
      adult: adultchild.adult !== 0 ? adultchild.adult : "",
    }));
  }, [adultchild.adult]);
  useEffect(() => {
    setfilterItem((prevFilterItem : any) => ({
      ...prevFilterItem,
      // adult: adultchild.adult.toString(), // Convert to string if necessary
      // adult: adultchild.adult,
      child: adultchild.child !== 0 ? adultchild.child : "",
    }));
  }, [adultchild.child]);
  console.log("adultchild", adultchild);
  console.log("filterItem", filterItem);

  const queryParams = Object.entries(filterItem)
    .filter(
      ([key, value]: any) =>
        value === filterItem.adult ||
        value === filterItem.key ||
        value === filterItem.child ||
        value === filterItem.limit ||
        value === filterItem.skip ||
        value === filterItem.availability ||
        value === filterItem.refundable
    )
    .map(([key, value]) => `${key}=${value}`)
    .join("&");



  const filter: any = { filterItem, setfilterItem, adultchild, adultchildItem , queryParams};
  return (
    <ContextApiProviders.Provider value={filter}>
      {children}
    </ContextApiProviders.Provider>
  );
};

export default FilterProviders;
