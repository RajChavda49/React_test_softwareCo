import { createSlice } from "@reduxjs/toolkit";
import shop1 from "../assets/images/Photo.png";
import shop2 from "../assets/images/Photo (1).png";
import shop3 from "../assets/images/Photo (2).png";
import shop4 from "../assets/images/Photo (3).png";
import shop5 from "../assets/images/Photo (4).png";
import shop6 from "../assets/images/Photo (5).png";
import shop7 from "../assets/images/Photo (6).png";
import shop8 from "../assets/images/Photo (7).png";

const initialState = {
  shops: [
    {
      title: "Chemist Warehouse",
      img: shop1,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 1,
    },
    {
      title: "Chemist Warehouse",
      img: shop2,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 2,
    },
    {
      title: "Chemist Warehouse",
      img: shop3,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 3,
    },
    {
      title: "Chemist Warehouse",
      img: shop4,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 4,
    },
    {
      title: "Chemist Warehouse",
      img: shop5,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 5,
    },
    {
      title: "Chemist Warehouse",
      img: shop6,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 6,
    },
    {
      title: "Chemist Warehouse",
      img: shop7,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 7,
    },
    {
      title: "Chemist Warehouse",
      img: shop8,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 8,
    },
    {
      title: "Chemist Warehouse",
      img: shop1,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 9,
    },
    {
      title: "Chemist Warehouse",
      img: shop2,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 10,
    },
    {
      title: "Chemist Warehouse",
      img: shop3,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 11,
    },
    {
      title: "Chemist Warehouse",
      img: shop4,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 12,
    },
    {
      title: "Chemist Warehouse",
      img: shop5,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 13,
    },
    {
      title: "Chemist Warehouse",
      img: shop6,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 14,
    },
    {
      title: "Chemist Warehouse",
      img: shop7,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 15,
    },
    {
      title: "Chemist Warehouse",
      img: shop8,
      location: "Castle Hill, NSW AU 2154",
      reviews: "56",
      id: 16,
    },
  ],
};

const ShopsSlice = createSlice({
  name: "Shops",
  initialState,
  reducers: {},
});

export const {} = ShopsSlice.actions;

export default ShopsSlice.reducer;
