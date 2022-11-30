import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Paginate from "react-paginate";
import { Link } from "react-router-dom";
import Shop from "./Shop";

const ShopsComponents = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { shops } = useSelector((state) => state.shops);

  const shopsPerPage = 8;
  const pageVisited = pageNumber * shopsPerPage;
  const displayShops = shops.slice(pageVisited, shopsPerPage + pageVisited);
  const pageCount = Math.ceil(shops.length / shopsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="h-auto w-full xl:px-20 md:px-10 px-5 lg:space-y-5 space-y-3">
      <h1 className="text-colorGreen text-xl">{shops.length} shops found</h1>
      {/* shops */}
      <section className="grid  xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center place-items-center w-full h-auto gap-y-7 md:gap-x-5 gap-x-2">
        {displayShops.map((shop, index) => (
          <Shop shop={shop} key={shop?.id} />
        ))}
      </section>
      <Paginate
        onPageChange={changePage}
        previousLabel={
          <div className="rounded-3xl shadow-lg text-center p-2 md:text-lg text-base">
            <IoIosArrowBack size={20} color="green" className="inline-block" />
            Prev
          </div>
        }
        nextLabel={
          <div className="rounded-3xl shadow-lg text-center p-2 md:text-lg text-base">
            Next
            <IoIosArrowForward
              size={20}
              color="green"
              className="inline-block"
            />
          </div>
        }
        className="flex items-center justify-center gap-x-5 md:py-10 py-5 text-xl"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        containerClassName={"paginationBttns"}
        disabledClassName={<div className="text-gray-400"></div>}
        activeClassName="text-colorGreen font-bold"
      />
    </div>
  );
};

export default ShopsComponents;
