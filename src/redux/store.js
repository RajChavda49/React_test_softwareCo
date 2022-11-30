import { configureStore } from "@reduxjs/toolkit";
import ShopDetailSlice from "./ShopDetailSlice";
import ShopsSlice from "./ShopsSlice";

const Store = configureStore({
  reducer: { shops: ShopsSlice, shopDetail: ShopDetailSlice },
});
export default Store;
