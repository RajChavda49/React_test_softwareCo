import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img from "../../assets/images/bgShopdetails.jpg";
import logo from "../../assets/images/logoShopdetails.png";

const ShopInfo = () => {
  const { shops } = useSelector((s) => s.shops);
  const { id } = useParams();

  const shopDetail = shops.filter((shop) => shop.id == id);
  const shop = Object.assign({}, ...shopDetail);
  return (
    <div className="relative h-full">
      <img
        src={img}
        className="object-cover object-center w-full xl:h-full h-[30rem]"
      />
      {/* show navigation */}
      <div className="text-white absolute md:top-10 top-5 md:left-16 left-5 flex items-center md:gap-x-5 gap-x-3 font-medium md:text-xl">
        <span>Home</span>
        <span>
          <MdKeyboardArrowRight size={25} />
        </span>
        <span>Shop</span>
        <span>
          <MdKeyboardArrowRight size={25} />
        </span>
        <span className="font-normal">{shop?.title}</span>
      </div>
      {/* shop info */}
      <div className="absolute xl:top-10 top-20 left-1/2 -translate-x-1/2 w-full flex items-center flex-col justify-center text-white gap-y-6">
        <img
          src={logo}
          className="w-20 h-20 rounded-full object-cover object-center"
        />
        <p className="font-semibold lg:text-4xl sm:text-3xl text-xl">
          {shop?.title}
        </p>
        <p className="">
          <AiOutlineStar size={25} color="white" className="inline-block" />
          <AiOutlineStar size={25} color="white" className="inline-block" />
          <AiOutlineStar size={25} color="white" className="inline-block" />
          <AiOutlineStar size={25} color="white" className="inline-block" />
          <AiOutlineStar size={25} color="white" className="inline-block" />
          <span className="ml-5">No rating found yet</span>
        </p>
        <p className="space-x-5">
          <button
            type="button"
            className="w-40 p-2 text-center rounded-3xl border-2 border-white"
          >
            More info
          </button>
          <button
            type="button"
            className="w-40 p-2 text-center rounded-3xl border-2 border-white"
          >
            Give a review
          </button>
        </p>
        <div className="w-full flex items-center justify-center h-auto lg:mt-10 mt-2">
          <input
            type="text"
            className="rounded-tl-full pl-3 rounded-bl-full xl:w-1/4 w-1/2 outline-none text-black md:p-4 p-2 placeholder:font-medium"
            placeholder={`Search ${shop?.title} Products`}
          />
          <button
            type="button"
            className="uppercase active:scale-105 transition-all ease-in-out duration-100 w-40 md:px-4 px-2 inline-block text-base sm:font-semibold font-medium rounded-tr-full rounded-br-full bg-colorGreen text-white md:p-4 p-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
