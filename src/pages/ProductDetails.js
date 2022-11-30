import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdKeyboardArrowRight, MdArrowBack } from "react-icons/md";
import Slider from "../components/ShopDetails/Slider";

const ProductDetails = () => {
  const [activeTag, setActiveTag] = useState("Information");

  const { Fruits, Vegetables } = useSelector((s) => s.shopDetail);
  const { id } = useParams();

  const allItems = [...Fruits, ...Vegetables];
  const product = allItems.find((item) => item.id == id);
  return (
    <section className="relative h-auto w-full lg:px-20 px-10 md:my-10 my-5 lg:space-y-8 md:space-y-6 space-y-3">
      {/* navigation */}
      <div className=" flex xl:items-center items-start justify-between xl:flex-row flex-col xl:gap-0 gap-y-3">
        <div className="font-semibold flex md:flex-nowrap flex-wrap lg:items-center items-start xl:gap-x-4 w-full">
          <p>Departments</p>
          <MdKeyboardArrowRight size={25} />
          <p>Vegetables</p>
          <MdKeyboardArrowRight size={25} />
          <p>Subcategory 1</p>
          <MdKeyboardArrowRight size={25} />
          <p>{product?.name}</p>
        </div>
        <p className="space-x-3" onClick={() => window.history.back()}>
          <MdArrowBack size={20} className="inline-block text-colorGreen" />
          <span className="text-colorGreen font-semibold uppercase inline-block">
            Back to Harris farm markets
          </span>
        </p>
      </div>
      {/* img & info */}
      <div className="grid lg:grid-cols-2 place-items-start lg:justify-items-center justify-items-start gap-x-5">
        <div className="w-full">
          <img
            src={product?.img}
            className="h-fit w-full object-center object-contain"
          />
        </div>
        <div className="lg:space-y-6 md:space-y-4 space-y-2 xl:w-11/12 h-full">
          <p className="font-semibold md:text-4xl text-2xl">{product?.name}</p>
          <div className="flex justify-start items-center gap-x-10">
            <p>
              <span>Sold by:</span>{" "}
              <span className="text-colorGreen underline underline-offset-2">
                Harris Farm Markets
              </span>
            </p>
            <p>
              <span>Status:</span>{" "}
              <span className="text-colorGreen underline underline-offset-2">
                in Stock
              </span>
            </p>
          </div>
          <div className="flex justify-start items-center gap-x-10 lg:text-2xl text-xl">
            <p className="font-semibold ">
              ${product?.price}{" "}
              <span className="text-sm font-light">/item</span>
            </p>
            <p className="text-gray-400 font-semibold">
              (${product?.pricePerKg}){" "}
              <span className="font-light text-sm">/kg</span>
            </p>
          </div>
          <div className="w-full">
            <label className="font-light text-base block">Quantity</label>
            <div className="flex justify-start items-center gap-x-5 w-full">
              <div className="xl:space-x-5 md:space-x-3 space-x-2 text-center">
                <button
                  type="button"
                  className="rounded-full xl:px-12 inline-block md:px-7 px-3 py-2 border-2 text-center border-gray-300"
                >
                  <AiOutlineMinus size={20} />
                </button>
                <span>1</span>
                <button
                  type="button"
                  className="rounded-full xl:px-12 inline-block md:px-7 px-3 py-2 border-2 border-gray-300 text-center"
                >
                  <AiOutlinePlus size={20} />
                </button>
              </div>
              <button
                type="button"
                className="rounded-full outline-none border-none active:scale-95 transition-all ease-linear duration-100 uppercase text-white bg-colorGreen text-lg xl:w-60 w-40 border-2 text-center p-2"
              >
                add to cart
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button type="button">
              <FiHeart
                size={25}
                className="h-10 w-10 shadow-xl p-2 rounded-full"
              />
            </button>
            <p className="text-gray-400">Add to wishlist</p>
          </div>
          <p className="space-x-5">
            <span className="text-lg font-normal">Categories:</span>{" "}
            <span className="font-semibold">Vegetables,</span>
            <span className="font-semibold">Vegan</span>
          </p>
        </div>
      </div>
      {/* sections */}
      <div className="flex flex-col items-center justify-start mx-auto w-full gap-y-5">
        <div className="flex items-center justify-center gap-x-10 w-full">
          <button
            type="button"
            onClick={() => setActiveTag("Information")}
            className={`w-48 py-2 px-1 text-center shadow-xl rounded-md ${
              activeTag === "Information"
                ? "bg-colorGreen text-white"
                : "bg-white text-colorGreen"
            } `}
          >
            Information
          </button>
          <button
            type="button"
            onClick={() => setActiveTag("Ingredients")}
            className={`w-48 py-2 px-1 text-center shadow-xl rounded-md ${
              activeTag === "Ingredients"
                ? "bg-colorGreen text-white"
                : "bg-white text-colorGreen"
            } `}
          >
            Ingredients
          </button>
          <button
            type="button"
            onClick={() => setActiveTag("Directions")}
            className={`w-48 py-2  px-1 text-center shadow-xl rounded-md ${
              activeTag === "Directions"
                ? "bg-colorGreen text-white"
                : "bg-white text-colorGreen"
            } `}
          >
            Directions
          </button>
        </div>
        <p className="text-[#828282] font-normal tracking-wider xl:w-1/2 text-left">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui.
        </p>
      </div>
      <Slider items={Vegetables} name="Vegetables" />
    </section>
  );
};

export default ProductDetails;
