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
import { addToFaviroute, addToCart } from "../../redux/ShopDetailSlice";
import { Link } from "react-router-dom";

const Slider = ({ items, name }) => {
  const dispatch = useDispatch();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="space-y-5 relative">
      {/* title */}
      <div className="flex items-center justify-between relative">
        <p className="md:text-3xl text-xl font-bold rounded-3xl after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-2 after:bg-colorGreen after:rounded-lg">
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
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        loop={false}
        slidesPerGroup={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
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
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        modules={[Keyboard, Pagination, Navigation, Mousewheel]}
        className="wfull h-full"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="lg:h-swiperHeight md:h-[31rem] h-[28rem] lg:max-w-[15rem] relative text-black bg-white shadow-xl group cursor-pointer rounded-md"
          >
            <Link
              to={`/productdetails/${item.id}`}
              state={{ shopDetail: item }}
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
            >
              <img
                src={item?.img}
                className="md:h-fit h-60 object-cover w-full object-center"
                loading="lazy"
              />
              <p className="text-black font-semibold group-hover:text-colorGreen text-lg px-3 pt-3">
                {item?.name}
              </p>

              <AiOutlineBars
                size={25}
                className="text-colorGreen bg-white cursor-pointer z-20 shadow-xl rounded-full h-10 w-10 p-2 text-center absolute top-3 left-3"
              />
            </Link>
            {item?.faviroute ? (
              <FaHeart
                size={25}
                onClick={() => {
                  dispatch(addToFaviroute(item));
                }}
                className="absolute top-3 z-20 right-5 cursor-pointer text-colorGreen h-10 w-10 p-2"
              />
            ) : (
              <FiHeart
                size={25}
                onClick={() => dispatch(addToFaviroute(item))}
                className="absolute top-3 z-20 right-5 cursor-pointer text-colorGreen h-10 w-10 p-2"
              />
            )}
            <div className="px-3 w-full font-semibold absolute bottom-4 left-0">
              <p className="text-xl pb-5">
                ${item?.price}{" "}
                <span className="font-light text-lg">
                  (${item?.pricePerKg}/KG)
                </span>
              </p>
              <button
                type="button"
                className="w-full active:scale-95 transition-all ease-linear duration-100 text-center lg:p-4 p-2 rounded-full text-white uppercase bg-colorGreen"
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                add to cart
              </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="h-full absolute lg:block hidden top-0 z-10 right-0 bg-gradient-to-l from-white to-transparent w-40" />
      </Swiper>
    </section>
  );
};

export default Slider;
