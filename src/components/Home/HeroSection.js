import React from "react";
import image from "../../assets/images/bg-herosection.png";
import { Helmet } from "react-helmet";

const HeroSection = () => {
  return (
    <>
      <Helmet title="Home" />
      <div className="relative w-full h-auto">
        <div className="absolute inset-0 bg-gradient-to-b opacity-60 from-black h-full" />
        <img
          className="w-full sm:h-full h-40 object-cover object-center"
          src={image}
          loading="lazy"
        />
        <div className="absolute sm:top-5 top-2 left-1/2 -translate-x-1/2 text-white">
          <div className="w-full tracking-wider whitespace-nowrap md:space-y-2 font-semibold text-center">
            <p className="xl:text-5xl lg:text-4xl sm:text-3xl text-lg">
              Shop from your favourite
            </p>
            <p className="xl:text-6xl lg:text-5xl sm:text-4xl text-xl font-bold">
              grocery stores!
            </p>
          </div>
          <div className=" w-full flex items-center justify-center h-auto lg:mt-10 mt-2">
            <input
              type="text"
              className="rounded-tl-full pl-3 rounded-bl-full sm:w-1/2 outline-none text-black md:p-2 p-1 placeholder:font-medium"
              placeholder="I am shopping for..."
            />
            <button
              type="button"
              className="uppercase active:scale-105 transition-all ease-in-out duration-100  w-auto md:px-4 px-2 inline-block text-base sm:font-semibold font-medium rounded-tr-full rounded-br-full bg-colorGreen text-white md:p-2 p-1"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
