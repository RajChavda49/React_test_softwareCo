import React from "react";
import { AiOutlineArrowUp, AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <footer className="relative grid lg:grid-cols-4 md:grid-cols-2 md:gap-y-10 gap-y-5 place-items-start justify-items-center bg-colorBlack text-white w-full h-auto md:p-16 p-6">
      <section className="md:order-4 lg:order-none" />
      <section className="space-y-3 w-full">
        <p className="uppercase font-semibold tracking-wide">popular suburbs</p>
        <ul className="space-y-3 font-medium tracking-wide">
          <List>Castle Hill</List>
          <List>Kellyville</List>
          <List>Cherrybrook</List>
          <List>Baulkham Hills</List>
          <List>Pennant Hills</List>
        </ul>
      </section>
      <section className="space-y-3 w-full">
        <p className="uppercase font-semibold tracking-wide">pages</p>
        <ul className="space-y-3 font-medium tracking-wide">
          <List>About Us</List>
          <List>Shop Registration</List>
          <List>Shop & Drive for Us</List>
          <List>Terms & Conditions</List>
        </ul>
      </section>
      <section className="space-y-3 w-full">
        <p className="uppercase font-semibold tracking-wide">keep in touch</p>
        <ul className="space-y-3 font-medium tracking-wide">
          <List>Contact Us</List>
          <List>Help Centre</List>
          <li>
            <Link to="//www.facebook.com" target="_blank">
              <FiFacebook
                size={25}
                className="font-semibold inline-block mr-8 cursor-pointer hover:animate-pulse"
              />
            </Link>
            <Link to="//www.instagram.com" target="_blank">
              <AiOutlineInstagram
                size={28}
                className="font-semibold inline-block cursor-pointer hover:animate-pulse"
              />
            </Link>
          </li>
        </ul>
      </section>
      {/* arrow up scroll to top */}
      <AiOutlineArrowUp
        size={30}
        className="bg-white hover:animate-pulse text-green-600 rounded-full absolute top-6 right-24 cursor-pointer h-10 w-10 p-1"
        onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      />
    </footer>
  );
};

export default Footer;

const List = tw.li`
cursor-pointer hover:translate-x-2 w-fit md:text-base text-sm transition-all ease-linear duration-300 hover:before:border-l-4 before:border-red-400 hover:before:pr-2
`;
