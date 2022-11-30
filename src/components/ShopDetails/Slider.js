import React, { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToFaviroute } from "../../redux/ShopDetailSlice";
import { Link } from "react-router-dom";

const Slider = ({ items, name }) => {
  const dispatch = useDispatch();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="space-y-5 relative">
      {/* title */}
      <div className="flex items-center justify-between">
        <p className="md:text-3xl text-xl font-bold rounded-3xl decoration-4 underline underline-offset-8 decoration-colorGreen">
          {name}
        </p>
        <button className="text-colorGreen w-fit font-semibold">
          View all
          <MdKeyboardArrowRight size={15} className="ml-2 inline-block" />
        </button>
      </div>
      {/* arrow button  for slider*/}
      <ChevronLeftIcon
        className="absolute z-20 p-3 cursor-pointer font-semibold  top-1/2 -translate-y-1/2 shadow-xl rounded-full md:-left-10 -left-3 w-10 h-10 bg-white"
        ref={prevRef}
      />
      <ChevronRightIcon
        className="absolute z-20 p-3 cursor-pointer font-semibold  top-1/2 -translate-y-1/2 shadow-xl rounded-full md:-right-10 -right-3 w-10 h-10 bg-white"
        ref={nextRef}
      />
      <Swiper
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        loop={false}
        pagination={false}
        scrollbar={false}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="relative h-full border-none outline-none"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="space-y-5 md:h-swiperHeight h-[28rem] max-w-[15rem] relative text-black bg-white shadow-xl group cursor-pointer rounded-md"
          >
            <Link to={`/productdetails/${item.id}`}>
              <img
                src={item?.img}
                className="h-fit object-cover w-full object-center"
              />
              <p className="text-black font-semibold group-hover:text-colorGreen text-lg px-3">
                {item?.name}
              </p>
              <div className="px-3 w-full space-y-5 font-semibold absolute bottom-4 left-0">
                <p className="text-xl">
                  ${item?.price}{" "}
                  <span className="font-light text-lg">
                    (${item?.pricePerKg}/KG)
                  </span>
                </p>
                <button
                  type="button"
                  className="w-full active:scale-95 transition-all ease-linear duration-100 text-center lg:p-4 p-2 rounded-full text-white uppercase bg-colorGreen"
                >
                  add to cart
                </button>
              </div>

              <AiOutlineBars
                size={25}
                className="text-colorGreen bg-white cursor-pointer z-20 shadow-xl rounded-full h-10 w-10 p-2 text-center absolute top-3 left-3"
              />
              {item?.faviroute ? (
                <FaHeart
                  size={25}
                  onClick={() => {
                    dispatch(addToFaviroute(item));
                  }}
                  className="absolute top-3 z-20 right-4 cursor-pointer text-colorGreen h-10 w-10 p-2"
                />
              ) : (
                <FiHeart
                  size={25}
                  onClick={() => dispatch(addToFaviroute(item))}
                  className="absolute top-3 z-20 right-4 cursor-pointer text-colorGreen h-10 w-10 p-2"
                />
              )}
            </Link>
          </SwiperSlide>
        ))}
        <div className="h-full absolute top-0 z-10 right-0 bg-gradient-to-l from-white to-transparent w-40" />
      </Swiper>
    </section>
  );
};

export default Slider;
