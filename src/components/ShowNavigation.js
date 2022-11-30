import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ShowNavigation = ({...rest}) => {
  return (
    <div>
      Home <MdKeyboardArrowRight /> Shop <MdKeyboardArrowRight />
    </div>
  );
};

export default ShowNavigation;
