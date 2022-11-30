import { createSlice } from "@reduxjs/toolkit";
import fruit1 from "../assets/images/fruit1.png";
import fruit2 from "../assets/images/fruit2.png";
import fruit3 from "../assets/images/fruit3.png";
import fruit4 from "../assets/images/fruit4.png";
import veg1 from "../assets/images/veg1.png";
import veg2 from "../assets/images/veg2.png";
import veg3 from "../assets/images/veg3.png";
import veg4 from "../assets/images/veg4.png";
import veg5 from "../assets/images/veg5.png";

const initialState = {
  Fruits: [
    {
      name: "lemon",
      id: 1,
      img: fruit1,
      faviroute: false,
      price: 2.47,
      pricePerKg: 10.29,
    },
    {
      name: "Green Seedless Grapes",
      id: 2,
      img: fruit2,
      faviroute: false,
      price: 3.49,
      pricePerKg: 10.99,
    },
    {
      name: "Pineapple",
      id: 3,
      img: fruit3,
      faviroute: false,
      price: 4.85,
      pricePerKg: 48.5,
    },
    {
      name: "Oranges",
      id: 4,
      img: fruit4,
      faviroute: false,
      price: 3.47,
      pricePerKg: 11.29,
    },
    {
      name: "lemon",
      id: 5,
      img: fruit1,
      faviroute: false,
      price: 2.47,
      pricePerKg: 10.29,
    },
    {
      name: "Green Seedless Grapes",
      id: 6,
      img: fruit2,
      faviroute: false,
      price: 3.49,
      pricePerKg: 10.99,
    },
    {
      name: "Pineapple",
      id: 7,
      img: fruit3,
      faviroute: false,
      price: 4.85,
      pricePerKg: 48.5,
    },
    {
      name: "Oranges",
      id: 8,
      img: fruit4,
      faviroute: false,
      price: 3.47,
      pricePerKg: 11.29,
    },
  ],
  Vegetables: [
    {
      name: "Zuccini Black Organic (Each)",
      id: 11,
      img: veg1,
      faviroute: false,
      price: 2.47,
      pricePerKg: 10.29,
    },
    {
      name: "ZUCCHINI BLACK IMPERFECT PICK VALUE RANGE (MIN 500G)",
      id: 12,
      img: veg2,
      faviroute: false,
      price: 3.49,
      pricePerKg: 10.99,
    },
    {
      name: "ZUCCHINI BLACK IMPERFECT (CASE SALE 10KG)",
      id: 13,
      img: veg3,
      faviroute: false,
      price: 4.85,
      pricePerKg: 48.5,
    },
    {
      name: "Zuccini Black Organic (Each)",
      id: 14,
      img: veg4,
      faviroute: false,
      price: 3.47,
      pricePerKg: 11.29,
    },
    {
      name: "TOMATOES TRUSS (500G PREPACKED)",
      id: 15,
      img: veg5,
      faviroute: false,
      price: 3.47,
      pricePerKg: 11.29,
    },
    {
      name: "Zuccini Black Organic (Each)",
      id: 16,
      img: veg1,
      faviroute: false,
      price: 2.47,
      pricePerKg: 10.29,
    },
    {
      name: "ZUCCHINI BLACK IMPERFECT PICK VALUE RANGE (MIN 500G)",
      id: 17,
      img: veg2,
      faviroute: false,
      price: 3.49,
      pricePerKg: 10.99,
    },
    {
      name: "ZUCCHINI BLACK IMPERFECT (CASE SALE 10KG)",
      id: 18,
      img: veg3,
      faviroute: false,
      price: 4.85,
      pricePerKg: 48.5,
    },
    {
      name: "Zuccini Black Organic (Each)",
      id: 19,
      img: veg4,
      faviroute: false,
      price: 3.47,
      pricePerKg: 11.29,
    },
    {
      name: "TOMATOES TRUSS (500G PREPACKED)",
      id: 20,
      img: veg5,
      faviroute: false,
      price: 3.47,
      pricePerKg: 11.29,
    },
  ],
};

const ShopDetailSlice = createSlice({
  name: "shopdetail",
  initialState,
  reducers: {
    addToFaviroute: (state, { payload }) => {
      if (state.Fruits.find((item) => item.id === payload.id)) {
        state.Fruits = state.Fruits.map((item) =>
          item.id === payload.id
            ? { ...item, faviroute: !payload.faviroute }
            : item
        );
      } else if (state.Vegetables.find((item) => item.id === payload.id)) {
        state.Vegetables = state.Vegetables.map((item) =>
          item.id === payload.id
            ? { ...item, faviroute: !payload.faviroute }
            : item
        );
      }
    },
  },
});

export const { addToFaviroute } = ShopDetailSlice.actions;

export default ShopDetailSlice.reducer;
