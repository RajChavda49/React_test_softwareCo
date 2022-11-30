import React, { useState } from "react";
import tw from "tailwind-styled-components";

const Tags = () => {
  const [activeTag, setActiveTag] = useState("All");

  const tags = [
    { tag: "All" },
    { tag: "Asian" },
    { tag: "Beer, Wine & Spirit" },
    { tag: "Beverages" },
    { tag: "Breads & Bakery" },
    { tag: "Dairy & Eggs" },
    { tag: "Deli" },
    { tag: "Frozen" },
    { tag: "Fruits" },
    { tag: "Gifts & Flowers" },
    { tag: "Health" },
    { tag: "Meats" },
    { tag: "Pantry" },
    { tag: "Pasta, Rice & Grains" },
    { tag: "Seefood" },
    { tag: "Vegetables" },
  ];
  return (
    <div className="xl:h-40 lg:h-60 sm:h-72 h-96 lg:overflow-hidden overflow-y-scroll relative -top-5">
      <div className="flex absolute top-0 xl:left-1/2 left-5 xl:-translate-x-1/2 xl:w-[90%] w-full flex-wrap justify-start items-center gap-x-4 gap-y-3">
        {tags.map((tag, index) => (
          <Tag
            onClick={() => setActiveTag(tag.tag)}
            className={`${
              activeTag === tag.tag &&
              "bg-gradient-to-br from-fromColorTag to-toColorTag"
            }`}
            key={index}
          >
            {tag.tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default Tags;
const Tag = tw.p`
lg:w-36 md:w-28 min-w-[80px] px-2 flex items-center cursor-pointer shadow-xl justify-center h-16 rounded-md bg-white text-black font-semibold text-center
`;
