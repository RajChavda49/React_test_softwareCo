import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { FiUser, FiShoppingBag, FiClock } from "react-icons/fi";
import { BiHeart, BiChevronDown } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { Fruits, Vegetables, totalQuantity } = useSelector(
    (s) => s.shopDetail
  );

  const favirouteFruits = Fruits.filter((fruit) => fruit.faviroute === true);
  const favirouteVegs = Vegetables.filter((fruit) => fruit.faviroute === true);

  const favirouteItems = [...favirouteFruits, ...favirouteVegs];

  return (
    <header className="flex lg:justify-evenly justify-around overflow-hidden items-center xl:px-40 lg:px-10 lg:py-6 font-semibold w-full md:px-10 px-0 py-5">
      {/* button for tablet & mobile */}
      <span
        className="z-40 lg:hidden block lg:mr-auto"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        {openSidebar ? (
          <AiOutlineClose
            fontSize={25}
            className=" text-black font-semibold cursor-pointer"
          />
        ) : (
          <FaBars
            fontSize={25}
            className=" text-black font-semibold cursor-pointer"
          />
        )}
      </span>
      {/* btn for desktpop */}
      <span>
        <FaBars
          fontSize={25}
          className=" text-black font-semibold cursor-pointer lg:block hidden"
        />
      </span>
      {/* menu for desktop */}
      <div className="space-x-5 flex items-center ">
        <p className="cursor-pointer relative sm:block hidden">
          <TbLocation
            fontSize={25}
            className="absolute top-1/2 left-4 -translate-y-1/2  text-green-600 inline-block"
          />
          <input
            type="text"
            className="font-normal rounded-3xl focus:outline-2 focus:outline-green-500 shadow-md sm:pl-10 pl-12 py-2 pr-2 placeholder:text-gray-500 placeholder:font-normal text-left w-72"
            placeholder="Deliver Address / Post Code"
          />
        </p>
        <p className="cursor-pointer lg:block hidden">
          <FiClock fontSize={25} className=" text-green-600 inline-block" />
          <span className="align-middle ml-2">Deliver ASAP</span>
          <BiChevronDown fontSize={25} className=" text-black inline-block" />
        </p>
      </div>
      <div className="space-x-6 flex items-center">
        <p className="cursor-pointer lg:block hidden">
          <Link to="/shops">
            <BsShop size={25} className="text-green-600 inline-block" />
            <span className="align-middle ml-2">Shops</span>
          </Link>
        </p>
        <p className="cursor-pointer sm:block hidden">
          <FiUser size={25} className=" text-green-600 inline-block" />
          <span className="align-middle ml-2">Sign in</span>
          <BiChevronDown fontSize={25} className=" text-black inline-block" />
        </p>
        <p className="relative cursor-pointer">
          <BiHeart size={25} className="text-green-600" />
          <span className="absolute -top-1/2 -right-5 bg-white rounded-full text-center font-bold w-6 h-6 shadow-xl shadow-gray-300 text-sm">
            {favirouteItems.length}
          </span>
        </p>
        <p className="relative cursor-pointer">
          <FiShoppingBag size={25} className="text-green-600" />
          <span className="absolute -top-1/2 -right-5 rounded-full text-center w-6 font-bold h-6 bg-white shadow-xl shadow-gray-300 text-sm">
            {totalQuantity}
          </span>
        </p>
      </div>
      {/* end desktop menu */}
      {/* sidebar for mobile */}
      {openSidebar && (
        <div className="transition-all duration-300 ease-in-out delay-100 lg:hidden block">
          <div className="w-9/12 md:w-1/2 h-screen bg-white text-black z-30 absolute top-0 left-0 transition-all duration-300 ease-in-out px-5">
            <div className="space-y-6 absolute top-16 left-1/2 -translate-x-1/2">
              <p className="cursor-pointer relative w-auto sm:hidden block">
                <TbLocation
                  fontSize={25}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 inline-block"
                />
                <input
                  type="text"
                  className="border-none outline-none font-normal rounded-3xl shadow-md pl-12 py-2 pr-2 placeholder:text-gray-500 placeholder:font-medium text-center w-44"
                  placeholder="Deliver Address / Post Code"
                />
              </p>
              <p className="cursor-pointer whitespace-nowrap">
                <FiClock
                  fontSize={25}
                  className=" text-green-600 inline-block"
                />
                <span className="align-middle ml-2">Deliver ASAP</span>
                <BiChevronDown
                  fontSize={25}
                  className=" text-black inline-block"
                />
              </p>
              <p className="ncursor-pointer lg:hidden block">
                <Link to="/shops">
                  <BsShop size={25} className="text-green-600 inline-block" />
                  <span className="align-middle ml-2">Shops</span>
                </Link>
              </p>
              <p className="cursor-pointer sm:hidden block">
                <FiUser size={25} className="text-green-600 inline-block" />
                <span className="align-middle ml-2">Sign in</span>
                <BiChevronDown
                  fontSize={25}
                  className=" text-black inline-block"
                />
              </p>
            </div>
          </div>
          <div className="z-20 fixed h-screen w-screen top-0 left-0 bg-opacity-20 bg-gray-900" />
        </div>
      )}
    </header>
  );
};

export default Header;

const List = tw.li`
cursor-pointer hover:translate-x-2 w-fit md:text-base text-sm transition-all ease-linear duration-300 hover:before:border-l-2 before:border-red-400 hover:before:pr-2
`;
