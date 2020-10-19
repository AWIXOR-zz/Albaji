import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-blue-500! text-gray-100!`}
`;
const Categories = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div>
      <HeaderRow>
        <TabsControl>
          {categories.map((tabName, index) => (
            <TabControl
              key={index}
              active={activeTab === tabName}
              onClick={() => {
                console.log("changing tabName state");
                setActiveTab(tabName);
              }}
            >
              {tabName}
            </TabControl>
          ))}
        </TabsControl>
      </HeaderRow>
    </div>
  );
};

export default Categories;

const categories = ["فقه", "شريعة", "اصول", "قانون"];
