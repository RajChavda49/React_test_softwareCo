import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  return (
    <div
      className="w-full h-auto md:space-y-3 space-y-1 rounded-lg shadow-xl"
      key={shop.id}
    >
      <img
        className="h-60 w-full object-cover object-center rounded-tr-lg rounded-tl-lg"
        src={shop.img}
        loading="lazy"
      />
      <div className="space-y-3 px-5 py-3">
        <p className="xl:text-2xl text-lg font-semibold">{shop.title}</p>
        <p className="font-medium xl:text-lg text-base">
          <HiOutlineLocationMarker
            size={25}
            color="black"
            className="inline-block mr-1"
          />
          {shop.location}
        </p>
        <p className="w-full">
          <AiOutlineStar size={25} color="black" className="inline-block" />
          <AiOutlineStar size={25} color="black" className="inline-block" />
          <AiOutlineStar size={25} color="black" className="inline-block" />
          <AiOutlineStar size={25} color="black" className="inline-block" />
          <AiOutlineStar size={25} color="black" className="inline-block" />
          <span className="ml-5">{shop.reviews} reviews</span>
        </p>
        <p className="bg-colorGreen active:scale-95 transition-all ease-linear duration-100 uppercase font-semibold w-full h-fit py-3 rounded-3xl text-white text-center">
          <Link className="w-full" to={`/shopdetails/${shop.id}`}>
            View all 134 items
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Shop;
